import { IconType } from "@/components/atoms/Icon/type";
import { Icon } from "../../atoms/Icon";
import styles from "./ServiceCard.module.scss";

type ServiceCardProps = {
  firstIcon: IconType;
  title: string;
  subtitle: string;
  secondIcon?: IconType;
};

export const ServiceCard = ({
  firstIcon,
  secondIcon,
  title,
  subtitle,
}: ServiceCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Icon icon={firstIcon} />
        {secondIcon && <Icon icon={secondIcon} />}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};
