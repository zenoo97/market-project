// props는 부모 컴포넌트에서 전달하는 데이터를 자식 컴포넌트로 전달할 때 사용 됌
function ChildComponent(props) {
  const { name, age } = props;

  return (
    <div>
      <p>
        이름은 {name}이며 {age}살 입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
