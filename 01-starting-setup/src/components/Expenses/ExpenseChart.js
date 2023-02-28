import Chart from "../Chart/Chart";

export default function ExpenseChart(props) {
  const chartDataPoints = [
    // 가져오는 data가 객체이기 때문에 객채로 받아옴
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // props.expenses가 객체가 아닌 배열이라 in 대신 of를 사용해야 됨
  for (const expense of props.expenses) {
    // January = 0이기 때문에
    // chartDataPoints의 객체들의 인덱스와 일치
    const expenseMonth = expense.date.getMonth();

    // 특정 달의 값을 증가시킴
    // chartDataPoint[0] = Jan
    // => Jan에 value의 값을 amount로 변경
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}
