import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ margin: 0 }}> {/* Set margin to 0 */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TO-DO LIST MANAGEMENT</a>
        <Link className="btn btn-outline-light rounded-0" to="/addtodo">Add Task</Link>
      </div>
    </nav>
  );
}

export default Navbar;
