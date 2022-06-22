import React from "react";
// useState는 react 모듈에 있음
function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  //   값이  변경이 되야 setTime이 다시 실행됌
  // 즉, []안에 time을 넣어주면 무한정으로 실행하게 됌
  return (
    <div>
      <h3>{time}초</h3>
      <button>1씩 올려주세요</button>
    </div>
  );
}
export default TimerComponent;
