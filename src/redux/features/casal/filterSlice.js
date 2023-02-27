import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredCasais: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_CASAIS(state, action) {
      const { casais, search } = action.payload;
      const tempCasais = casais.filter(
        (casal) =>
          casal.name.toLowerCase().includes(search.toLowerCase()) ||
          casal.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredCasais = tempCasais;
    },
  },
});

export const { FILTER_CASAIS } = filterSlice.actions;

export const selectFilteredCasais = (state) => state.filter.filteredCasais;

export default filterSlice.reducer;
