import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      // 동적으로 type을 받을 수 있도록 해줌
      // props의 type이 없다면 'button'으로 type 지정
      type={props.type || "button"}
      // props의 onClick시 실행되는 함수를 가져옴
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
