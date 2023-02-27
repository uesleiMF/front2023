import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CasalList from "../../components/casal/casalList/CasalList";
import CasalSummary from "../../components/casal/casalSummary/CasalSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getCasais } from "../../redux/features/casal/casalSlice";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { casais, isLoading, isError, message } = useSelector(
    (state) => state.casal
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getCasais());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <CasalSummary products={casais} />
      <CasalList products={casais} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
