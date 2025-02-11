import { Link } from "react-router-dom";

function UserNavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary position-relative">
      <div className="container-fluid d-flex align-items-center">
        {/* App Name */}
        <Link className="navbar-brand me-auto" to="/">
          AppName
        </Link>

        {/* Search Bar */}
        <form className="d-flex mx-3" role="search" style={{ flex: "1 1 auto", maxWidth: "50vw" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter the address"
            aria-label="Search"
            style={{ width: "50vw", height: "35px" }}
          />
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li className="nav-item me-3">
            <Link className="nav-link active" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link active" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            {/* Button to toggle collapse */}
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Basket
            </button>
          </li>
        </ul>
      </div>

      {/* Collapse content for Basket */}
      <div
        className="collapse collapse-horizontal position-absolute top-100 end-0"
        id="collapseWidthExample"
        style={{ zIndex: 1000 }}
      >
        <div className="card card-body" style={{ width: "300px" }}>
          <Link className="nav-link" to="/basket">
            Go to Basket
          </Link>
          {/* Add any other content you need here */}
        </div>
      </div>
    </nav>
  );
}

export default UserNavBar;