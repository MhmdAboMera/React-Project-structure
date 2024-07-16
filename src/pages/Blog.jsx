import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
const BlogPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="blog - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={window.location.href + "src/assets/images/home_3.png"}
      />
    </>
  );
};

export default BlogPage;

