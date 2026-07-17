

import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout/PublicLayout";

import HomePage from "../features/public/pages/HomePage";
import LoginPage from "../features/auth/pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;