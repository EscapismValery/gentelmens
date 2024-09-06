import { AboutUs } from "../components/AboutUs/AboutUs";
import { BigImgAndTitle } from "../components/BigImgAndTitle/BigImgAndTitle";
import { Contacts } from "../components/Contacts/Contacts";
import { History } from "../components/History/History";
import { Reviews } from "../components/Reviews/Reviews";
import { SalonReviews } from "../components/SalonReviews/SalonReviews";
import { TopBarberInfo } from "../components/TopBarberInfo/TopBarberInfo";

const AboutUsPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <BigImgAndTitle />
      <AboutUs 
        title='тут текст о нас какие мы молодцы, какие хорошие, чего добились, преуспели как и тд и вообще почему именно мы тут находимся                                                 .'
        descr={[
          'Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке. Замени мои упрощенные слова и предложения уровня A0 на более красивые слова и предложения. Сохраните смысл, но сделай текст более литературным. Отвечай только на исправления и улучшения, и ничего больше, не пиши объяснения. Вот первое предложение для перевода:',
          'Выступи в роли переводчика и корректора орфографии. Я буду говорить на любом языке, а ты будешь определять язык, переводить его и отвечать исправленной и улучшенной версией моего текста на английском языке. Замени мои упрощенные слова и предложения уровня A0 на более красивые слова и предложения. Сохраните смысл, но сделай текст более литературным. Отвечай только на исправления и улучшения, и ничего больше, не пиши объяснения. Вот первое предложение для перевода:'
        ]}
      />
      <History />
      <TopBarberInfo />
      <SalonReviews />
      <Reviews />
      <Contacts />
    </>
  );
};

export { AboutUsPage };