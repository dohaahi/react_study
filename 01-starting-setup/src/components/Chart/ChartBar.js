import "./ChartBar.css";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  // barFillHeight가 0 초과라면 value를 퍼센트로 나타냄
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // style이 동적으로 변해야하기 때문에 자바스크립트 객체를 사용
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label} </div>
    </div>
  );
}
