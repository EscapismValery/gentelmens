import { AboutUs } from "../components/AboutUs/AboutUs";
import { BenefitsNewService } from "../components/BenefitsNewService/BenefitsNewService";
import { Contacts } from "../components/Contacts/Contacts";
import { CtaImage } from "../components/CtaImage/CtaImage";
import { FreeDiagnostic } from "../components/FreeDiagnostic/FreeDiagnostic";
import { FullScreenText } from "../components/FullScreenText/FullScreenText";
import { Gallery } from "../components/Gallery/Gallery";
import { Hero } from "../components/Hero/Hero";
import { Masters } from "../components/Masters/Masters";
import { PresentSert } from "../components/PresentSert/PresentSert";
import { SalonReviews } from "../components/SalonReviews/SalonReviews";
import { ServicesDemo } from "../components/ServicesDemo/ServicesDemo";
import { ShopDemo } from "../components/ShopDemo/ShopDemo";
import { VideoFullScreen } from "../components/VideoFullScreen/VideoFullScreen";
import video from '../video/main.mp4';

const MainPage = () => {
  window.scrollTo(0, 0);

  const aboutUsBenefits = [
    {
      title: 'Преимущество:',
      value: '1245',
    },
    {
      title: 'Преимущество:',
      value: '1245',
    },
    {
      title: 'Преимущество:',
      value: '1245',
    },
  ]

  return (
    <>
      <Hero />
      <VideoFullScreen href={video}/>
      <AboutUs 
        title='тут текст о нас какие мы молодцы, какие хорошие, чего добились, преуспели как и тд и вообще почему именно мы тут находимся                                                 .'
        descr='Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке. Замени мои упрощенные слова и предложения уровня A0 на более красивые слова и предложения. Сохраните смысл, но сделай текст более литературным. Отвечай только на исправления и улучшения, и ничего больше, не пиши объяснения. Вот первое предложение для перевода:'
        benefits={aboutUsBenefits}
      />
      <ServicesDemo />
      <Masters />
      <FreeDiagnostic />
      <BenefitsNewService />
      <Gallery />
      <FullScreenText />
      <ShopDemo />
      <PresentSert />
      <SalonReviews />
      <Contacts />
      <CtaImage />
    </>
  );
};

export { MainPage };