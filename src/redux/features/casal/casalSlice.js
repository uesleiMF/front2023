import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import casalService from "./casalService";
import { toast } from "react-toastify";

const initialState = {
  casal: null,
  casais: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  totalStoreValue: 0,
  outOfStock: 0,
  category: [],
};

// Create New Product
export const createCasal = createAsyncThunk(
  "casais/create",
  async (formData, thunkAPI) => {
    try {
      return await casalService.createCasal(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all products
export const getCasais = createAsyncThunk(
  "casais/getAll",
  async (_, thunkAPI) => {
    try {
      return await casalService.getCasais();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a Product
export const deleteCasal = createAsyncThunk(
  "casais/delete",
  async (id, thunkAPI) => {
    try {
      return await casalService.deleteCasal(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get a product
export const getCasal = createAsyncThunk(
  "casais/getCasal",
  async (id, thunkAPI) => {
    try {
      return await casalService.getCasal(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update product
export const updateCasal = createAsyncThunk(
  "casais/updateCasal",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await casalService.updateCasal(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const casalSlice = createSlice({
  name: "casal",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      const casais = action.payload;
      const array = [];
      casais.map((item) => {
        const { price, quantity } = item;
        const casalValue = price * quantity;
        return array.push(casalValue);
      });
      const totalValue = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.totalStoreValue = totalValue;
    },
    CALC_OUTOFSTOCK(state, action) {
      const casais = action.payload;
      const array = [];
      casais.map((item) => {
        const { quantity } = item;

        return array.push(quantity);
      });
      let count = 0;
      array.forEach((number) => {
        if (number === 0 || number === "0") {
          count += 1;
        }
      });
      state.outOfStock = count;
    },
    CALC_CATEGORY(state, action) {
      const casais = action.payload;
      const array = [];
      casais.map((item) => {
        const { category } = item;

        return array.push(category);
      });
      const uniqueCategory = [...new Set(array)];
      state.category = uniqueCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCasal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCasal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.casais.push(action.payload);
        toast.success("Product added successfully");
      })
      .addCase(createCasal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCasais.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCasais.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.casais = action.payload;
      })
      .addCase(getCasais.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteCasal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCasal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Product deleted successfully");
      })
      .addCase(deleteCasal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCasal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCasal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.casal = action.payload;
      })
      .addCase(getCasal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateCasal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCasal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Product updated successfully");
      })
      .addCase(updateCasal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { CALC_STORE_VALUE, CALC_OUTOFSTOCK, CALC_CATEGORY } =
  casalSlice.actions;

export const selectIsLoading = (state) => state.casal.isLoading;
export const selectCasal = (state) => state.casal.casal;
export const selectTotalStoreValue = (state) => state.casal.totalStoreValue;
export const selectOutOfStock = (state) => state.casal.outOfStock;
export const selectCategory = (state) => state.casal.category;

export default casalSlice.reducer;
