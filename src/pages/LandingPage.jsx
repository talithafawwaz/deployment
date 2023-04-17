import { NavLink } from "react-router-dom";
import gambar from '/src/assets/images/hero-img.png'
import './style.css'

const LandingPage = () => {
  
    return (
    <>
    <div className="first">
        <nav className="navbar navbar-expand-lg navbar fixed-top">
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
                            className="nav-link active text-primary"
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
                        <li className="nav-item">
                            <NavLink to="/CreateProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                            Create Product
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
        

        <div className="hero">
            <div className="main">
            <h1>Better Solutions For Your Bussines</h1>
            <p id="teks">
                We are team of talented designers making websites with Bootstrap
            </p>
            <img
                        className=" img img-fluid mx-auto d-block"
                        src={gambar}
                        alt="gambar"
                    />
            <div id="button">
                <button id="get">Get Started</button>
                <span id="watch">Watch Video</span>
            </div>
            </div>
        </div>
        <div className="content">
            <h3>Join Our Newsletter</h3>
            <p id="sentence">
            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </p>
            <form>
            <input className="input" />
            <button className="subscribe">Subscribe</button>
            </form>
        </div>
        <div className="sosmed">
            <div className="about">
            <div className="arsha">
                <p id="name">ARSHA</p>
                <p id="address">
                A108 Adam Street
                <br />
                New York, NY 535022 United States
                <br />
                <br />
                Phone: +1 5589 55488 55 Email: info@example.com
                </p>
            </div>
            <div className="link">
                <h4>Useful Links</h4>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                </ul>
            </div>
            <div className="services">
                <h4>Our Services</h4>
                <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Designer</li>
                </ul>
            </div>
            <div className="networks">
                <h4>Our Social Networks</h4>
                <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                valies
                </p>
                <div className="social-links">
                <div className="social-links-item" />
                <div className="social-links-item" />
                <div className="social-links-item" />
                <div className="social-links-item" />
                </div>
            </div>
            </div>
        </div>
        <div className="copyright">
            <p className="copy">
            {" "}
            ©Copyright <strong>Arsha.</strong> All Rights Reserved
            </p>
            <p className="design">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </p>
        </div>
    </>

    )
  }
  
  export default LandingPage