import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

import hrmsLogo from "../../../assets/images/hrms-logo.png";

const SOFTONCLOUD_URL = "https://www.softoncloud.com/";
const logoAlt = "HRMS SoftOnCloud logo";

const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
        return () => {
            window.removeEventListener("scroll", scrollNavigation, true);
        };
    }, []);

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    };

    const [activeLink, setActiveLink] = useState();
    useEffect(() => {
        const activation = (event) => {
            const target = event.target;
            if (target) {
                target.classList.add("active");
                setActiveLink(target);
                if (activeLink && activeLink !== target) {
                    activeLink.classList.remove("active");
                }
            }
        };
        const defaultLink = document.querySelector(".navbar li.a.active");
        if (defaultLink) {
            defaultLink?.classList.add("active");
            setActiveLink(defaultLink);
        }
        const links = document.querySelectorAll(".navbar a");
        links.forEach((link) => {
            link.addEventListener("click", activation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", activation);
            });
        };
    }, [activeLink]);

    const handleBrandClick = () => {
        setisOpenMenu(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link
                        className="navbar-brand landing-brand"
                        to="/landing"
                        onClick={handleBrandClick}
                    >
                        <span className="brand-logo-expanded">
                            <img src={hrmsLogo} alt={logoAlt} className="brand-logo-icon" height="50" />
                            <span className="brand-logo-text">
                                <span className="brand-logo-title">HRMS</span>
                                <span className="brand-logo-subtitle">SoftOnCloud</span>
                            </span>
                        </span>
                    </Link>

                    <NavbarToggler
                        className="navbar-toggler py-0 fs-20"
                        onClick={toggle}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                        isOpen={isOpenMenu}
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "hero",
                                "services",
                                "features",
                                "faqs",
                                "contact",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink href="#hero">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#features">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#faqs">FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#contact">Contact</NavLink>
                            </li>
                        </Scrollspy>

                        <div className="">
                            <a href={SOFTONCLOUD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-link fw-medium text-decoration-none">
                                Sign in
                            </a>
                            <a href={SOFTONCLOUD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                                Sign Up
                            </a>
                        </div>
                    </Collapse>
                </Container>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
