import { Outlet } from "react-router-dom";
export default function AuthenticationLayout() {
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center">
      <Outlet />
    </div>
  );
}
