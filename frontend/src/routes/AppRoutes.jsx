// import { Routes, Route } from "react-router-dom";

// import PublicLayout from "../layouts/PublicLayout/PublicLayout";

// import HomePage from "../features/public/pages/HomePage";
// import LoginPage from "../features/auth/parent/pages/LoginPage";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<PublicLayout />}>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../features/public/pages/HomePage";
import LoginPage from "../features/auth/parent/pages/LoginPage";
import RegisterPage from "../features/auth/parent/pages/RegisterPage";
import AuthPage from "../features/auth/parent/pages/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;