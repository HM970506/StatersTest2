import Styled from "styled-components";

const Background = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = Styled.main`
    width:80%;
`;

const Result = Styled.div`
    width: 80%;
    height: 50px;
    text-align: right;
    font-size: 20px;
`;

export { Background, Main, Result };
