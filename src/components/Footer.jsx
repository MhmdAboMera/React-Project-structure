import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/najez_logo.png'
import { FaAngleRight, FaEnvelope,  FaPhoneSquareAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { useTranslation } from 'react-i18next'
import BackToTopButton from './BackToTopButton'
import SocialIcons from './SocialIcons'
const Footer = () => {
const {t} = useTranslation();
  return (
    <>
    <footer>
      <div className="container">
      <div className="row pb-2">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                    <div className="p-3 d-flex justify-content-center">
                        <img className="img_footer" src={logo}
                            title="najez_logo" alt="najez_logo"  loading="lazy" />
                    </div>
                    <p className="footer-text">  {t("footerPara")}</p>
                <SocialIcons/>
                </div>
                <div className="col-6 col-sm-12 col-md-6 col-lg-3">
                    <div className="bord_side">
                        <p className="text-da  fs-2">{t("secvice")}</p>
                        <div className="d-flex mt-2 service flex-column gap-3 m-0 p-0">
                                <Link to=""
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link ">
                                   <FaAngleRight />
                                    <span>{t("secvice")}</span>
                                </Link>
                                <Link to=""
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link ">
                                   <FaAngleRight />
                                    <span>{t("secvice")}</span>
                                </Link>
                                <Link to=""
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link ">
                                   <FaAngleRight />
                                    <span>{t("secvice")}</span>
                                </Link>
                                <Link to=""
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link ">
                                   <FaAngleRight />
                                    <span>{t("secvice")}</span>
                                </Link>
                                <Link to=""
                                    className="d-flex gap-2 align-items-center text-decoration-none text-dark service-link ">
                                   <FaAngleRight />
                                    <span>{t("secvice")}</span>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-12 col-md-6 col-lg-3">
                    <div className="bord_side">
                        <p className="text-dark  fs-2">{t("Links")}</p>
                        <div className="d-flex mt-2 flex-column gap-2 p-0">
                            <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link"  to="/">
                               <FaAngleRight />
                                <span>{t("home")}</span>
                            </NavLink>
                            <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/about">
                               <FaAngleRight />
                                <span>{t("about us")}</span>
                            </NavLink>
                            <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/service">
                               <FaAngleRight />
                                <span> {t("secvice")}</span>
                            </NavLink>
                            <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/work">
                               <FaAngleRight />
                                <span>{t("our work")} </span>
                            </NavLink>
                            <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/blog">
                               <FaAngleRight />
                                <span>{t("blog")}</span>
                            </NavLink>
                            <NavLink className="d-flex gap-2 align-items-center text-decoration-none text-dark foot-link" to="/contact">
                               <FaAngleRight />
                                <span>{t("contact us")}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                    <div className="bord_side">
                        <p className="text-dark  fs-2">{t("contact us")}</p>
                        <div className="d-flex mt-2 flex-column gap-2 footer-text py-2 p-0">
                                <Link className="d-flex gap-2 align-items-center text-decoration-none text-dark " to="tel:01098755465" rel="nofollow">
                                    <div className="contact_icon px-2 py-1">
                                    <FaPhoneSquareAlt />
                                    </div>
                                    <span>01098755465</span>
                                </Link>
                                <Link className="d-flex gap-2 align-items-center text-decoration-none text-dark " to="mailto:contact@gmail.com" rel="nofollow">
                                    <div className="contact_icon px-2 py-1">
                                    <FaEnvelope />
                                    </div>
                                    <span>contact@gmail.com</span>
                                </Link>
                                <Link className="d-flex gap-2 align-items-center text-decoration-none text-dark " to="{{ $settings->location }}" rel="nofollow">
                                    <div className="contact_icon px-2 py-1">
                                    <ImLocation />

                                    </div>
                                    <span>---------</span>

                                </Link>
                        
                        </div>
                    </div>

                </div>


            </div>
      </div>
      <div className='footer-bottom'></div>
      <BackToTopButton/>
    </footer>
    
    </>
  )
}

export default Footer