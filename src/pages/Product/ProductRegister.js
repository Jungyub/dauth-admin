import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";
import ProductInputBox from "../../components/InputBox/ProductInputBox";
import { NONAME } from "dns";
import { tsNonNullExpression } from "@babel/types";

const ProductRegister = () => {
  const [products, setProducts] = useState({
    productName: "",
    productPrice: "",
    productInfo: "",
  });
  const [files, setFiless] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { productName, productPrice, productInfo } = products;

  const onChange = (e) => {
    const { value, name } = e.target;
    setProducts({
      ...products,
      [name]: value,
    });
  };
  const handleImgClick = () => {
    document.querySelector(".fileInputBox").click();
  };

  const handleImgUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFiless(file);
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  let $imagePrev = null;

  console.log("onChange value: ", products);
  return (
    <Nav>
      <ProductRegisterTag>
        <Wrapper>
          <Contents>
            <Info>
              <span>상품명</span>
              <ProductInputBox
                type="text"
                name="productName"
                value={productName}
                placeholder="상품을 입력하세요"
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>가격</span>
              <ProductInputBox
                type="text"
                name="productPrice"
                value={productPrice}
                placeholder="상품의 가격을 입력하세요"
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>상세설명</span>
              <Textarea
                type="text"
                name="productImg"
                value={productInfo}
                placeholder="상품에 대한 설명을 입력하세요."
                onChange={onChange}
              />
            </Info>
            <Info>
              <span>이미지</span>
              <ProductInputBox
                className="fileInputBox"
                type="file"
                name="productImage"
                onChange={handleImgUpload}
                style={{ display: "none" }}
              />
              <UploadButton type="button" onClick={handleImgClick}>
                Image Upload
              </UploadButton>
            </Info>
            <img src={imageUrl} alt="imgUpload" />
          </Contents>
          <ButtonBox>
            <Button>상품등록</Button>
          </ButtonBox>
        </Wrapper>
      </ProductRegisterTag>
    </Nav>
  );
};

export default withRouter(ProductRegister);

const ProductRegisterTag = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid #3f51b5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Contents = styled.div`
  padding: 15px 13px;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 22px 0;
  span {
    min-width: 90px;
    font-size: 21px;
    line-height: 1.4;
  }
`;

const UploadButton = styled.button`
  min-width: 200px;
  height: 200px;
  margin: 0 16px;
  padding: 10px 10px;
  flex: 1;
  background-color: #ffffff;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 4px;
`;

const ButtonBox = styled.div`
  padding: 15px 13px;
  width: 100%;
  button {
    width: 100%;
    margin: 0;
    padding: 9px 0;
    span {
      font-size: 20px;
    }
  }
`;
