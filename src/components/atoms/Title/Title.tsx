import styles from "./Title.module.scss";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h1 className={styles.container}>{title}</h1>
      <div className={styles.line} />
    </div>
  );
};
