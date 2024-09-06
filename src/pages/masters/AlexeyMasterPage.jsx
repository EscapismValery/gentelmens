import { MasterAchieves } from "../../components/MasterAchieves/MasterAchieves";
import { MasterInfo } from "../../components/MasterInfo/MasterInfo";
import { Masters } from "../../components/Masters/Masters";
import mainImg from '../../images/masters/mainImg/alexey.jpg';
import icon1 from '../../icons/arrows/arrow-achieves.svg';
import { MasterPortfolio } from "../../components/MasterPortfolio";
import slider1img1 from '../../images/masters/portfolio/alexey/1.jpg';

const AlexeyMasterPage = () => {
  window.scrollTo(0, 0);

  const archeves = [
    {
      icon: icon1,
      title: 'Профессиональный стаж:',
      value: '15 лет',
    },
    {
      icon: icon1,
      title: 'Довольных клиентов:',
      value: '600+',
    },
    {
      icon: icon1,
      title: 'Уровень барбера',
      value: 'Старший',
    },
    {
      icon: icon1,
      title: 'Средняя оценка',
      value: '5.0',
    },
  ]

  const sliders = {
    slider1: [slider1img1, slider1img1, slider1img1, slider1img1],
    slider2: [slider1img1, slider1img1, slider1img1, slider1img1]
  }

  return (
    <>
      <MasterInfo 
        name="Алексей Никифоров"
        level="Премиум барбер"
        descr={[
          'Возможность подобрать себе прическу/бороду по фотографии. Необходимо загрузить фотографию, далее включается автоматическая система фильтров, которая сделает лицо гораздно красочнее и красивее. Возможность подобрать себе прическу/бороду по фотографии.',
          'Необходимо загрузить фотографию, далее далее включается автоматическая система фильтров, которая сделает лицо гораздно красочнее и красивее. Возможность подобрать себе прическу/бороду по фотографии. Необходимо загрузить фотографию, далее',
          'Необходимо загрузить фотографию, далее далее включается автоматическая система фильтров, которая сделает лицо гораздно красочнее и красивее. Возможность подобрать себе прическу/бороду по фотографии. Необходимо загрузить фотографию, далее',
        ]}
        img={mainImg}
      />
      <MasterAchieves 
        items={archeves}
      />
      <MasterPortfolio 
        images={sliders}
      />
      <Masters isSlider={true} />
    </>
  );
};

export { AlexeyMasterPage };