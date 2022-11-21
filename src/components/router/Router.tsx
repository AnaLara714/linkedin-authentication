import { LinkedinAuthenticationRoutes } from "components/constants";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={LinkedinAuthenticationRoutes.login}
          element={<LoginPage/>}
        />
        <Route
          path={LinkedinAuthenticationRoutes.register}
          element={<RegisterPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
};