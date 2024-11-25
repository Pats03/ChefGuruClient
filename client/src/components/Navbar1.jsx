import { FaAlignLeft } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext(); // Accessing toggleSidebar from context

  return (
    <div
      className="text-white h-[80px] flex items-center justify-between px-5"
      style={{ backgroundColor: '#083358' }}
    >
      {/* Sidebar Toggle Button */}
      <button
        type="button"
        className="text-gray-400 hover:text-gray-200 focus:outline-none"
        onClick={toggleSidebar} // Call toggleSidebar when button is clicked
      >
        <FaAlignLeft size={30} color="currentColor" />{' '}
        {/* Increased icon size */}
      </button>

      {/* Logo Text with gap */}
      <div className="ml-4">
        {' '}
        {/* Adjusted margin-left for gap */}
        <h4 className="text-2xl font-bold">DASHBOARD</h4>
        {/* Increased font size */}
      </div>

      <div className="btn-container">
        {/* Additional buttons or features can be added here */}
      </div>
    </div>
  );
};

export default Navbar;
