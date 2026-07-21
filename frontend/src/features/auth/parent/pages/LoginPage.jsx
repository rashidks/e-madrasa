import {
  LoginLeftPanel,
  LoginRightPanel,
} from "../components/login";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">

        <LoginLeftPanel />

        <LoginRightPanel />

      </div>
    </div>
  );
};

export default LoginPage;