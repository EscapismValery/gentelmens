import { Contacts } from "../components/Contacts/Contacts";
import { CtaImage } from "../components/CtaImage/CtaImage";

const ContactsPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div style={{height: '70px'}}></div>
      <Contacts />
      <CtaImage />
    </>
  );
};

export { ContactsPage };