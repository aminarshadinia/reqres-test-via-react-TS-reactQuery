import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: localStorage.getItem("tokenId") };
  return user && user.loggedIn;
};

const PublicRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="user-list" /> : <Outlet />;
};

export default PublicRoutes;
