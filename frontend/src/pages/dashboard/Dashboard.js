import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientList from "../../components/client/clientList/ClientList"
import ClientSummary from "../../components/client/clientSummary/ClientSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getClients } from "../../redux/features/product/clientSlice";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getClients());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <ClientSummary products={products} />
      <ClientList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;