import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CountStyled = styled.div`
  width: 500px;
  height: 500px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const ButtonStyled = styled.button`
  padding: 10px;
  background: white;
`;

//state
//inistatte => giá trị ban đầu của state
// setState => cập nhập giá trị state
  //setState là 1 callback funticon
//

// objectis => ===
// {} = object
// [] = array

//useEffect side effect
//  dùng để thực thi những thứ không cần thiết render ra giao diện
// call api

//depencendici nếu k truyền thì mặc đinh sẽ chạy 1 lần 
// truyền biến vào denc thì sẽ được gọi lại khi biến đó thay đổi

// Thêm xoá sữa

const finol = (n) => {
  if (n < 3) {
    return n;
  }
  return finol(n - 1) - finol(n - 2);
};

export default function Count() {
  const obj ={
    amount: 2000,
    age:20,
  }

  const [state, setState] = useState(obj);




  const onDecre = () => {

    

  };
  
  const onIncre = () => {
    setState(state + 1)
    setState(state + 1)
 
  };
   const [state2, setState2] = useState(0)
  const onSubmit = () => {
    setState2(state2 +1)
  };



  console.log('re-render');

  return (
    <CountStyled>
      <ButtonStyled onClick={onDecre}> - </ButtonStyled>
      <div>state: {state?.amount}</div>

      <ButtonStyled onClick={onIncre}>+</ButtonStyled>





      <ButtonStyled onClick={onSubmit}>submit</ButtonStyled>
    </CountStyled>
  );
}
