import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import PublicRoutes from "../Public/PublicRoutes";

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRouter;
