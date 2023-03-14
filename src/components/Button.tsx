import styles from './Button.module.css';

interface Props {
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button className={`${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
