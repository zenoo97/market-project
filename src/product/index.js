import { useParams } from "react-router-dom";
// 상품을 클릭했을 때의 해당 상품에 대한 id 값을 받아오게 하기 위한 모듈

function ProductPage() {
  const { id } = useParams();
  // 비구조화할당 공부하기
  return <h1>상품 상세 페이지 {id} 상품 </h1>;
}
export default ProductPage;
