import { Contacts } from "../components/Contacts/Contacts";
import { CtaImage } from "../components/CtaImage/CtaImage";
import { Gallery } from "../components/Gallery/Gallery";
import { Portfolio } from "../components/Portfolio/Portfolio";

const PortfolioPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Portfolio />
      <Contacts />
      <CtaImage />
    </>
  );
};

export { PortfolioPage };