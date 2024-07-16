import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import arStyles from "../styles/about/ar.module.css";
import enStyles from "../styles/about/en.module.css";
import SEO from "../components/SEO";
const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  const styles = currentLanguage === "ar" ? arStyles : enStyles;
  return (
    <>
      <SEO
        title="About - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={window.location.href + "src/assets/images/home_5.png"}
      />
    </>
  )
}

export default AboutPage