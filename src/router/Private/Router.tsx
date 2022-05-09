import { Route, Routes } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import NotFoundPage from "../../pages/404/NotFoundPage";
import AddUserPage from "../../pages/AddUserPage";
import UpdateUserPage from "../../pages/UpdateUserPage";
import UserDetailsPage from "../../pages/UserDetailsPage";
import UserListPage from "../../pages/UserListPage";
import ProtectedRoutes from "../Private/ProtectedRoutes";

const PrivateRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user-list" element={<UserListPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/user-details/:id" element={<UserDetailsPage />} />
          <Route path="/update-user/:id" element={<UpdateUserPage />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default PrivateRouter;
