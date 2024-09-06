import { CtaImage } from "../components/CtaImage/CtaImage";
import { ShopFull } from "../components/ShopFull/ShopFull";

const ShopPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <ShopFull />
      <CtaImage />
    </>
  );
};

export { ShopPage };