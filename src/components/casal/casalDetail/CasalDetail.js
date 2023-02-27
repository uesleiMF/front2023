import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getCasal } from "../../../redux/features/casal/casalSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./CasalDetail.scss";
import DOMPurify from "dompurify";

const CasalDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { casal, isLoading, isError, message } = useSelector(
    (state) => state.casal
  );

  const stockStatus = (quantity) => {
    if (quantity > 0) {
      return <span className="--color-success">Casal</span>;
    }
    return <span className="--color-danger">Out Of Stock</span>;
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getCasal(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div className="product-detail">
      <h3 className="--mt">Sobre o Casal</h3>
      <Card cardClass="card">
        {isLoading && <SpinnerImg />}
        {casal && (
          <div className="detail">
            <Card cardClass="group">
              {casal?.image ? (
                <img
                  src={casal.image.filePath}
                  alt={casal.image.fileName}
                />
              ) : (
                <p>Nenhuma imagem definida para este Casal</p>
              )}
            </Card>
            <h4>Casal: {stockStatus(casal.quantity)}</h4>
            <hr />
            <h4>
              <span className="badge">Casal: </span> &nbsp; {casal.name}
            </h4>
            <p>
              <b>&rarr; Cod. : </b> {casal.sku}
            </p>
            <p>
              <b>&rarr; Cargo : </b> {casal.category}
            </p>
            <p>
              <b>&rarr; Ofertas : </b> {"R$"}
              {casal.price}
            </p>
            <p>
              <b>&rarr; Qtd : </b> {casal.quantity}
            </p>
            <p>
              <b>&rarr; Aniversario : </b> {casal.date}
            </p>
            <p>
              <b>&rarr; Total de Ofertas : </b> {"R$"}
              {casal.price * casal.quantity}
            </p>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(casal.description),
              }}
            ></div>
            <hr />
            <code className="--color-dark">
              Created on: {casal.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Last Updated: {casal.updatedAt.toLocaleString("en-US")}
            </code>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CasalDetail;
