import classnames from "classnames";
import styles from "./WorkCard.module.scss";
import Image from "next/image";

type WorkCardProps = {
  picture: string;
  color: string;
  title: string;
  description: string;
  fullwidth?: boolean;
};

export const WorkCard = ({
  picture,
  color,
  title,
  description,
  fullwidth,
}: WorkCardProps) => {
  return (
    <div
      className={classnames(styles.container, {
        [styles.fullwidth]: fullwidth,
      })}
      style={{ backgroundColor: color }}>
      <Image src={picture} alt='' className={styles.picture} />
      <div className={styles.overlay}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
