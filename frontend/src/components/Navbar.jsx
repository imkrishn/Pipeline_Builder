import { ChevronDown, Play, Save, Menu, Settings, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full lg:h-20 h-14 lg:px-6 px-2 bg-white border-b border-gray-200 flex items-center justify-between">
      {/* logo*/}

      <img
        src="/logo.png"
        alt="DataPipeline Logo"
        className="lg:w-64 w-44 h-auto block"
      />

      {/* breadcrumb */}
      <div className="hidden md:flex items-center text-sm text-gray-500 gap-2">
        <span className="hover:text-gray-700 cursor-pointer transition">
          Pipelines
        </span>
        <span>&gt;</span>
        <span className="text-gray-800 font-medium">My Data Pipeline</span>
      </div>

      <div className="flex items-center gap-4">
        <Bell
          size={21}
          className="text-gray-600 hover:text-gray-800 cursor-pointer transition"
        />
        <Settings
          size={21}
          className="text-gray-600 hover:text-gray-800 cursor-pointer transition"
        />
        <img
          src="/user.png"
          alt="User"
          className="lg:h-14 h-10 lg:w-14 w-10 rounded-full object-cover rounded-full hover:bg-gray-100 cursor-pointer transition"
        />
      </div>
    </header>
  );
};

export default Navbar;
