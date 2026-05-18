import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {

  return (
    <div>

      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="main-content">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AdminLayout;