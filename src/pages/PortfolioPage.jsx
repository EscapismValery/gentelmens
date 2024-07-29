import { Contacts } from "../components/Contacts/Contacts";
import { CtaImage } from "../components/CtaImage/CtaImage";
import { Gallery } from "../components/Gallery/Gallery";

const PortfolioPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Gallery />
      <Contacts />
      <CtaImage />
    </>
  );
};

export { PortfolioPage };