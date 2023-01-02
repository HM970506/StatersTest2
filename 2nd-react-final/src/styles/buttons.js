import Styled from "styled-components";

const Buttons = Styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
    justify-items: center;
    align-items: center;
`;

const Button = Styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width:40px;
    height: 40px;
    color:white;
    border: none;
    border-radius: 20%;
    font-size: 20px;
    &:active {
        background-color: pink;
        font-size: 15px;
      }

`;

const NumberButton = Styled(Button)`
    background-color: black;

`;
const OperButton = Styled(Button)`
    background-color: grey;
`;
const ClearButton = Styled(Button)`
    background-color: red;
`;
const MButton = Styled(Button)`
    background-color: blue;
`;

export { Buttons, NumberButton, OperButton, ClearButton, MButton };
