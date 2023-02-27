import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../loader/Loader";
import "./casalList.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Search from "../../search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_CASAIS,
  selectFilteredCasais,
} from "../../../redux/features/casal/filterSlice";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteCasal,
  getCasais,
} from "../../../redux/features/casal/casalSlice";
import { Link } from "react-router-dom";

const CasalList = ({ casais, isLoading }) => {
  const [search, setSearch] = useState("");
  const filteredCasais = useSelector(selectFilteredCasais);

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const delCasal = async (id) => {
    console.log(id);
    await dispatch(deleteCasal(id));
    await dispatch(getCasais());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Deletar Casal",
      message: "Tem certeza que deseja excluir este Casal.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delCasal(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredCasais.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCasais.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredCasais]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCasais.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    dispatch(FILTER_CASAIS({ casais: casais, search }));
  }, [casais, search, dispatch]);

  return (
    <div className="product-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-direction: row;">
          <span>
            <h3>Lista de Casais</h3>
          </span>
          <span>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>

        {isLoading && <SpinnerImg />}

        <div className="table">
          {!isLoading && casais.length === 0 ? (
            <p>-- Nenhum casal encontrado, adicione um casal...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>nº</th>
                  <th>Nome-Casal</th>
                  <th>Cargo</th>
                  <th>Ofertas</th>
                  <th>Qtd</th>
                  <th>Aniversario</th>
                  <th>Total</th>
                  <th>Ação</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((casal, index) => {
                  const { _id, name, category, price, date, quantity } = casal;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                     
                      <td>{category}</td>
                      <td>
                        {"R$"}
                        {price}
                      </td>
                     
                      <td>{quantity}</td>
                      <td>{date}</td>
                      <td>
                        {"R$"}
                        {price * quantity}
                      </td>
                     
                      <td className="icons">
                        <span>
                          <Link to={`/product-detail/${_id}`}>
                            <AiOutlineEye size={25} color={"purple"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-product/${_id}`}>
                            <FaEdit size={20} color={"green"} />
                          </Link>
                        </span>
                        <span>
                          <FaTrashAlt
                            size={20}
                            color={"red"}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default CasalList;
