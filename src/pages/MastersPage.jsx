import { Contacts } from "../components/Contacts/Contacts";
import { CtaImage } from "../components/CtaImage/CtaImage";
import { Masters } from "../components/Masters/Masters";

const MastersPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Masters />
      <Contacts />
      <CtaImage />
    </>
  );
};

export { MastersPage };