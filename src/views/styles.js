import styled from "styled-components";

export const Container = styled.div`
  height: 1px;
`;

export const DivCenter = styled.div`
  background-color: #353535;
  padding-top: 20px;
  color: #fff;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 4px 1px rgb(0 0 0 / 25%);
`;

export const Text = styled.span`
  font-weight: 300;
  font-size: 5rem;
  margin-right: 10px;
`;

export const DivLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: initial;
`;

export const Button = styled.button`
  border-radius: 25px;
  margin: 10px;
  padding: 15px 35px;
  border: none;
  outline: none;
  background-color: #0092c3;

  font-size: 3rem;
  color: #fff;
`;

export const TextRed = styled.span`
  font-weight: 700;
  font-size: 5rem;
  color: red;
`;

export const List = styled.ul`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: wrap column;
  flex-flow: wrap column;
  align-content: center;
  max-height: 150px;
  li {
    flex: 1 0 15%;
    padding: 10px;
  }
`;
