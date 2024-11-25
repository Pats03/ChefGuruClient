import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import Wrapper from '../assets/wrappers/BigSidebar';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext(); // Accessing showSidebar from context

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header
            style={{
              fontSize: '2.0rem', // Larger font size
              fontWeight: 'bold', // Bold font
              color: '#FFFFFF', // Correct color code for white
              letterSpacing: '2px', // Optional: Spacing for more impact
              textAlign: 'center', // Center the text
            }}
          >
            SYNKRO
          </header>
          <NavLinks isBigSidebar /> {/* Pass isBigSidebar prop */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
