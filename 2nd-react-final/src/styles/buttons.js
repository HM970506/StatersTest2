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
    width:30px;
    height: 30px;
`;

const NumberButton = Styled(Button)``;
const OperButton = Styled(Button)``;
const ClearButton = Styled(Button)``;
const MButton = Styled(Button)``;

export { Buttons, NumberButton, OperButton, ClearButton, MButton };
