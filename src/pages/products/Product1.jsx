import mainImg from '../../images/shop/full/product1.jpg';
import { ShopDemo } from "../../components/ShopDemo/ShopDemo";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";

const Product1 = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <ProductInfo 
        name="metawo total black"
        level="Шампунь от выпадения волос и бороды"
        descr={[
          'Возможность подобрать себе прическу/бороду по фотографии. Необходимо загрузить фотографию, далее включается автоматическая система фильтров, которая сделает лицо гораздно красочнее и красивее. ',
        ]}
        price='2 500'
        img={mainImg}
      />
      <ShopDemo isDop={true}/>
    </>
  );
};

export { Product1 };