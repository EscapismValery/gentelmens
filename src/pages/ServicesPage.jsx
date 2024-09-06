import { CtaImage } from "../components/CtaImage/CtaImage";
import { ServicesFull } from "../components/ServicesFull/ServicesFull";
import { TestDrive } from "../components/TestDrive/TestDrive";
import services from "../database/services";


const ServicesPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <TestDrive />
      <ServicesFull title='Основные услуги' items={services.main}/>
      <ServicesFull title='Дополнительные услуги' items={services.dop}/>
      <ServicesFull subtitle='Новинка' title='уход за лицом' items={services.face}/>
      <CtaImage />
    </>
  );
};

export { ServicesPage };