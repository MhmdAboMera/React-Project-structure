

import { useEffect, useState } from "react";
import arStyles from "../styles/services/ar.module.css";
import enStyles from "../styles/services/en.module.css";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
const SingleService = () => {
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
                title="service - NajezSoft Web Solutions"
                description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
                name="NajezSoft"
                keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"

            />
        </>
    )
}

export default SingleService