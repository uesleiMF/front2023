import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import CasalForm from "../../components/casal/casalForm/CasalForm";
import {
  createCasal,
  selectIsLoading,
} from "../../redux/features/casal/casalSlice";

const initialState = {
  name: "",
  category: "",
  quantity: "",
  date:"",
  price: "",
};

const AddCasal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [casal, setCasal] = useState(initialState);
  const [casalImage, setCasalImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");

  const isLoading = useSelector(selectIsLoading);

  const { name, category, price, date, quantity, } = casal;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasal({ ...casal, [name]: value });
  };

  const handleImageChange = (e) => {
    setCasalImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateKSKU = (category) => {
    const letter = category.slice(0, 2).toUpperCase();
    const number = Date.now();
    const sku = letter + number;
    return sku;
  };

  const saveCasal = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateKSKU(category));
    formData.append("category", category);
    formData.append("quantity", Number(quantity));
    formData.append("price", price);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", casalImage);

    console.log(...formData);

    await dispatch(createCasal(formData));

    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Adicionar novo Casal</h3>
      <CasalForm
        casal={casal}
        casalImage={casalImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveCasal={saveCasal}
      />
    </div>
  );
};

export default AddCasal;
