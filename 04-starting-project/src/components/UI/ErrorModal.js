import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card>
        <header className={classes.modal}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>OK</Button>
        </footer>
      </Card>
    </div>
  );
};
