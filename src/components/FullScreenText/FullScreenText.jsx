import { useEffect, useState } from 'react';
import styles from './FullScreenText.module.scss';

const defaultValues = {
  index: 0,
  length: 0,
  step: 1,
};

const FullScreenText = () => {
  const titles = ['Позиционирование            ', 'Провокационность            ', 'Стиль            '];
  const [state, setState] = useState(null);
  const delay = 50;

  useEffect(() => {
    setState(() => ({...defaultValues}));
  }, titles);

  useEffect(() => {
    const timeoutId = setTimeout(setState, delay, ({...state}) => {
      state.length += state.step;
      if (state.length === titles[state.index].length) {
        state.step = -1;
      } else if (state.length === 1) {
        state.step = 1;
        state.index = (state.index + 1) % titles.length;
      } 
      return state;
    });

    return () => clearTimeout(timeoutId);
  });
  

  return (
    <section className={`${styles.section} flex`}>
      <h2 className={`${styles.section__title}`}>{titles?.[state?.index]?.slice(0, state?.length)}</h2>
    </section>
  );
};

export { FullScreenText };