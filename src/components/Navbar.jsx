import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// import '../styles/en.css'; // English styles by default
import arStyles from "../styles/navbar/ar.module.css";
import enStyles from "../styles/navbar/en.module.css";
import logo from "../assets/images/najez_logo.png";
import { FaLanguage } from "react-icons/fa";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langClass, setLangClass] = useState("en");
  const [isSticky, setSticky] = useState(false);
  // changeLanguage funcation
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangClass(lng);
  };
  // get currentLanguage
  const currentLanguage = i18n.language;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    setLangClass(currentLanguage);

    currentLanguage === "ar" ? "ar" : "en";
    if (currentLanguage === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
      document.body.className = "ar";
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
      document.body.className = "en";
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentLanguage]);
  const styles = currentLanguage === "ar" ? arStyles : enStyles;
  return (
    <>
      <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
        <div className="d-flex container justify-content-between align-items-center d-none d-md-none d-lg-flex ">
          <Link to="/" aria-label="logo">
            {" "}
            <img src={logo} className={styles.logo} alt="" />
          </Link>
          <div
            className={`d-flex flex-column justify-content-start ${styles.nav_contact}`}
          >
            <div className="d-flex gap-2 align-items-center ">
              <span> {t("call us now")} :</span>
              <Link to="tel:01098755465" className={styles.phone}>
                01098755465
              </Link>
            </div>
            <div className="d-flex gap-2 align-items-center ">
              <span> {t("Email")} :</span>
              <Link to="mailto:contact@gmail.com" className={styles.mailto}>
                contact@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg py-0">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="d-block d-md-block d-lg-none" to="/">
              {" "}
              <img src={logo} className={styles.logo} alt="" />
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ${styles.ulBg}`}>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    {t("home")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/about"
                  >
                    {t("about us")}
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink
                    to="/service"
                    className="nav-item text-decoration-none p-2 p-0"
                  >
                    {t("secvice")}
                  </NavLink>
                  <div
                    id="dropdownMenuButton1"
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 p-0"
                    onClick={toggleDropdown}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></div>
                  <ul
                    className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item fw-normal "
                        to="/SingleService"
                      >
                        مميزات تطبيقات
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item fw-normal"
                        to="/SingleService"
                      >
                        مميزات تطبيقات
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item fw-normal"
                        to="/SingleService"
                      >
                        مميزات تطبيقات
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/work">
                    {t("our work")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/blog">
                    {t("blog")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/contact"
                  >
                    {t("contact us")}
                  </NavLink>
                </li>
                <li className="nav-link">
                  {langClass == "ar" ? (
                    <FaLanguage
                      className="fs-2 text-white cursor-pointer lang-icon"
                      onClick={() => changeLanguage("en")}
                    />
                  ) : (
                    <FaLanguage
                      className="fs-2 text-white cursor-pointer lang-icon"
                      onClick={() => changeLanguage("ar")}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
