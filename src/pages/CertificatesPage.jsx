import { useState } from "react";
import { Certificates } from "../components/Certificates/Certificates";
import { CtaImage } from "../components/CtaImage/CtaImage";
import { ModalCert } from "../components/ModalCert/ModalCert";

const CertificatesPage = () => {
  window.scrollTo(0, 0);

  const [modalActive, setModalActive] = useState(false);
  const [priceCert, setPriceCert] = useState(1500);
  const [nextStep, setNextStep] = useState(false);

  return (
    <>
      <Certificates setModalActive={setModalActive} setPrice={setPriceCert} setNextStep={setNextStep}/>
      <CtaImage />
      <ModalCert 
        active={modalActive} 
        setActive={setModalActive}
        priceCert={priceCert}
        nextStep={nextStep}
        setNextStep={setNextStep}
      />
    </>
  );
};

export { CertificatesPage };