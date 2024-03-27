import { IconList } from "./const";
import { IconType } from "./type";
import classnames from "classnames";
import styles from "./Icon.module.scss";

type IconProps = {
  icon: IconType;
  size?: "small" | "default" | "big";
};

export const Icon = ({ icon, size = "default" }: IconProps) => {
  return <div className={classnames(styles[size])}>{IconList[icon]}</div>;
};
