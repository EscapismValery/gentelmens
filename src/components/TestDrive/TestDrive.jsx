import styles from './TestDrive.module.scss';

const TestDrive = () => {
  return (
    <section className={styles.testdrive}>
      <div className={`${styles.testdrive__wrap}`}>
        <h2 className={`${styles.testdrive__title} title`}>ТЕСТ - ДРАЙВ</h2>
        <p className={`${styles.testdrive__descr} text-primary`}>Каждому новому клиенту дарим скидку <span>200 рублей</span> на первую стрижку и накопительную cashback карту <span>5%</span></p>
      </div>
    </section>
  );
};

export { TestDrive };