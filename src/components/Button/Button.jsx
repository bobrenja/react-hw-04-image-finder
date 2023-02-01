import style from './button.module.scss';

const Button = ({ btnClick }) => {
  return (
    <button className={style.btn} type="button" onClick={btnClick}>
      Load more
    </button>
  );
};
export default Button;
