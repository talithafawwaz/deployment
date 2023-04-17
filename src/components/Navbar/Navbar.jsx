import React from "react"

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand active text-dark" href="#">
            Simple header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-light bg-primary rounded"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-primary" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-primary" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-primary" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-primary" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar