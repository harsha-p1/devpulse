import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ darkMode, setDarkMode }: Props) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <nav
      className={`w-full px-6 py-4 flex justify-between items-center shadow-md ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <Link
        to="/dashboard"
        className="text-3xl font-bold text-blue-600"
      >
        DevPulse
      </Link>

      <div className="flex items-center gap-4">

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-xl bg-gray-200 text-black"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;