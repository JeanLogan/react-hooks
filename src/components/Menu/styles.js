import styled from "styled-components";

export const MenuAside = styled.aside`
  display: flex;
  flex-basis: 250px;

  background: linear-gradient(to top, #005f73, #006c90);
  box-shadow: 0 0 1em #333333;
  z-index: 1;
  -webkit-box-shadow: 4px 0px 17px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 0px 17px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 0px 17px -5px rgba(0, 0, 0, 0.75);
`;

export const Nav = styled.nav`
  flex-grow: 1;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  a {
    flex: 1;
    padding: 10px;
    margin-bottom: 10px;

    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }
  a:hover {
    background: #00000020;
  }
`;
