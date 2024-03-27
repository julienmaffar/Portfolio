import { IconType } from "@/components/atoms/Icon/type";
import styles from "./TechnologyCard.module.scss";
import { Icon } from "../../atoms";

type TechnologyCardProps = {
  icon: IconType;
};

export const TechnologyCard = ({ icon }: TechnologyCardProps) => {
  return (
    <div className={styles.container}>
      <Icon icon={icon} size='big' />
    </div>
  );
};
