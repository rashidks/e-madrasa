import { LeftPanel, AuthCard } from "../components/auth";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <LeftPanel />
        <AuthCard />
      </div>
    </div>
  );
};

export default AuthPage;