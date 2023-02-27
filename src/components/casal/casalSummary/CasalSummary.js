import React, { useEffect } from "react";
import "./CasalSummary.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import {ImManWoman} from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectCategory,
  selectOutOfStock,
  selectTotalStoreValue,
} from "../../../redux/features/casal/casalSlice";

// Icons
const earningIcon = <AiFillDollarCircle size={40} color="#fff" />;
const casalIcon = <ImManWoman size={40} color="#fff" />;
const categoryIcon = <BiCategory size={40} color="#fff" />;
const outOfStockIcon = <BsCartX size={40} color="#fff" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CasalSummary = ({ casais }) => {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const outOfStock = useSelector(selectOutOfStock);
  const category = useSelector(selectCategory);

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(casais));
    dispatch(CALC_OUTOFSTOCK(casais));
    dispatch(CALC_CATEGORY(casais));
  }, [dispatch, casais]);

  return (
    <div className="product-summary">
      <h3 className="--mt">Casais Cadastrados</h3>
      <div className="info-summary">
        <InfoBox
          icon={casalIcon}
          title={"Total de Casais"}
          count={casais.length}
          bgColor="card1"
        />
        <InfoBox
          icon={earningIcon}
          title={"Total de Ofertas"}
          count={`R$${formatNumbers(totalStoreValue.toFixed(2))}  `}
          bgColor="card2"
        />
        <InfoBox
          icon={outOfStockIcon}
          title={"Out of Stock"}
          count={outOfStock}
          bgColor="card3"
        />
        <InfoBox
          icon={categoryIcon}
          title={"Cargos"}
          count={category.length}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default CasalSummary;
