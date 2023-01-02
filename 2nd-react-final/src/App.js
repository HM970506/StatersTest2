import { useRef } from "react";
import { Buttons, MButton, OperButton } from "./styles/buttons";
import { Background, Main, Result } from "./styles/layout";
import { useRecoilState } from "recoil";
import { resultAtom } from "./atoms/atoms";
import NumberButton from "./components/numberButtons";
import ClearButton from "./components/clearButtons";

function App() {
  const resultRef = useRef();
  const [result, setResult] = useRecoilState(resultAtom);

  return (
    <Background>
      <Main>
        <Result ref={resultRef}>{result}</Result>
        <Buttons>
          <OperButton>H/M/S</OperButton>
          <OperButton>%</OperButton>
          <OperButton>√ </OperButton>
          <OperButton>▶</OperButton>
          <OperButton>GT</OperButton>

          <MButton>MC</MButton>
          <MButton>MR</MButton>
          <MButton>M-</MButton>
          <MButton>M+</MButton>
          <OperButton>/</OperButton>

          <OperButton>+/-</OperButton>
          <NumberButton number={"7"} />
          <NumberButton number={"8"} />
          <NumberButton number={"9"} />
          <OperButton>X</OperButton>

          <ClearButton oper="C" />
          <NumberButton number={"4"} />
          <NumberButton number={"5"} />
          <NumberButton number={"6"} />
          <OperButton>-</OperButton>

          <ClearButton oper="AC" />
          <NumberButton number={"3"} />
          <NumberButton number={"2"} />
          <NumberButton number={"1"} />
          <OperButton>+</OperButton>

          <NumberButton number={"00"} />
          <NumberButton number={"0"} />
          <NumberButton number={"."} />
          <OperButton>=</OperButton>
        </Buttons>
      </Main>
    </Background>
  );
}

export default App;
