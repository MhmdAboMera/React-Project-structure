import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import SEO from "../components/SEO";
const SingleBlog = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage);
  useEffect(() => { }, [currentLanguage]);
  return (
    <>
      <SEO
        title="Blog - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"

      />
    </>
  );
};

export default SingleBlog;
