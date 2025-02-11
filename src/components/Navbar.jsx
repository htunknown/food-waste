function Navbar() {
    return (
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          {/* App Name */}
          <a className="navbar-brand" href="#">AppName</a>
  
          {/* Toggle Button for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search Bar - Now inside collapsible section */}
            <form className="d-flex ms-auto my-2 my-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter the address"
                aria-label="Search"
                style={{ width: "50vw", height: "35px" }} // Adjust as needed
              />
              <button className="btn btn-secondary" type="submit">Search</button>
            </form>
  
            {/* Navigation Links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Basket</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  