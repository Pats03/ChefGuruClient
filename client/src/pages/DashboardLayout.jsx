import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import Navbar from '../components/Navbar1';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import { useState, createContext, useContext } from 'react';

// Context for Dashboard
const DashboardContext = createContext();

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar visibility state

  // Toggles sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <DashboardContext.Provider value={{ showSidebar, toggleSidebar }}>
      <Wrapper>
        <main className="dashboard bg-white">
          {' '}
          {/* Set the background to white */}
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
