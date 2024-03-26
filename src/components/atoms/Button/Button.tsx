import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      {label}
    </button>
  );
};
