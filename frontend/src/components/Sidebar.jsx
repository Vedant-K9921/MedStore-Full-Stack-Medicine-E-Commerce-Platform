import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="sidebar">

      <h2>Admin Panel</h2>

      <Link to="/admin">
        Dashboard
      </Link>

      <Link to="/admin/medicines">
        Medicines
      </Link>

    </div>
  );
}

export default Sidebar;