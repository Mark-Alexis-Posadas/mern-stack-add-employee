import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-3 px-5 border-b border-slate-300 flex items-cener justify-end">
      <button className="text-sm text-slate-500">
        <Link to="/login">Log out</Link>
      </button>
    </nav>
  );
}
