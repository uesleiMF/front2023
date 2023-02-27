import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import CasalForm from "../../components/casal/casalForm/CasalForm";
import {
  getCasal,
  getCasais,
  selectIsLoading,
  selectCasal,
  updateCasal,
} from "../../redux/features/casal/casalSlice";

const EditCasal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const casalEdit = useSelector(selectCasal);

  const [casal, setCasal] = useState(casalEdit);
  const [casalImage, setCasalImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getCasal(id));
  }, [dispatch, id]);

  useEffect(() => {
    setCasal(casalEdit);

    setImagePreview(
      casalEdit && casalEdit.image ? `${casalEdit.image.filePath}` : null
    );

    setDescription(
      casalEdit && casalEdit.description ? casalEdit.description : ""
    );
  }, [casalEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCasal({ ...casal, [name]: value });
  };

  const handleImageChange = (e) => {
    setCasalImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveCasal = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", casal?.name);

    formData.append("category", casal?.category);
    formData.append("quantity", casal?.quantity);
    formData.append("price", casal?.price);
    formData.append("date", casal?.date);
    formData.append("description", description);
    if (casalImage) {
      formData.append("image", casalImage);
    }

    console.log(...formData);

    await dispatch(updateCasal({ id, formData }));
    await dispatch(getCasais());
    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Editar Casal</h3>
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

export default EditCasal;
