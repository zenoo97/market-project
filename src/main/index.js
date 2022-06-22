import "./index.css";
// css는 export 하는게 없기 때문에 from을 안적어줘도 됌
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  // products는 기본적으로 배열이기 때문에 빈 배열을 넣어줌
  React.useEffect(function () {
    axios
      .get(
        "https://10906c9b-9aef-4fa5-afed-7da498e5ea22.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러 발생: ", error);
      });
  }, []);
  // 네트워크 통신이 딱 한번만 일어나게 하기 위해서 useEffect를 사용
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link to={`/products/${index}`} className="product-link">
                  <div>
                    <img className="product-img" src={product.imageUrl}></img>
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      ></img>
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
// return을 해줄 때는 태그를 하나 씌어줘야 함, 복수개의 태그를 리턴해줄 수 없기 떄문
export default MainPage;
