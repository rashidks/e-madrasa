import {
    RegisterLeftPanel,
    RegisterRightPanel,
  } from "../components/register";
  
  const RegisterPage = () => {
    return (
      <div className="min-h-screen bg-slate-100">
        <div className="grid min-h-screen lg:grid-cols-2">
          <RegisterLeftPanel />
          <RegisterRightPanel />
        </div>
      </div>
    );
  };
  
  export default RegisterPage;