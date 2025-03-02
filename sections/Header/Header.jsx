import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#footer", label: "Contact", isButton: true },
];

function Header() {
    const [openHamburger, setOpenHamburger] = useState(false);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpenHamburger(false);
            }
        };

        const handleClickOutside = (event) => {
            const navMenu = document.querySelector(".nav-menu");
            if (navMenu && !navMenu.contains(event.target)) {
                setOpenHamburger(false);
            }
        };

        if (openHamburger) {
            window.addEventListener("keydown", handleEscape);
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openHamburger]);

    useEffect(() => {
        if (openHamburger) {
            const firstLink = document.querySelector(".nav-menu a");
            if (firstLink) firstLink.focus();
        } else {
            const hamburgerButton = document.querySelector(".hamburger");
            if (hamburgerButton) hamburgerButton.focus();
        }
    }, [openHamburger]);

    return (
        <header>
            <div className="container">
                <div className="header-logo" tabIndex={0}>
                    <a href="#" aria-label="SunnySide Home">
                        <img src={logo} alt="SunnySide Logo" />
                    </a>
                </div>

                <nav className="header-nav" aria-label="Main navigation" role="navigation">
                    <ul
                        className={`nav-menu ${openHamburger ? "open-hamburger" : "hidden md:flex"}`}
                        id="main-menu"
                    >
                        {navLinks.map(({ href, label, isButton }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    className={isButton ? "header-button" : "header-link"}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="hamburger"
                    type="button"
                    onClick={() => setOpenHamburger(!openHamburger)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={openHamburger}
                    aria-controls="main-menu"
                    aria-haspopup="true"
                >
                    <img src={hamburgerIcon} alt="Open menu" />
                </button>
            </div>
        </header>
    );
}

export default Header;