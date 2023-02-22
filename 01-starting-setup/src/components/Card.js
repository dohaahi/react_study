import "./Card.css";

// Wrapper 컴포넌트 = 컴포넌트들을 감싸는 컴포넌트
// item과 item을 둘러싼 expenses의 div태그를 Card 태그로 바꾸기 위한 컴포넌트
export default function Card(props) {
  // classes는  card.css 뿐만 아니라 expenseItem.css를 동적으로 가져오기 위함
  // 'card' 뒤에 공백이 포함되어야 2개의 class가 인식됨
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}
