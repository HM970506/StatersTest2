import { useEffect, useState, useRef } from "react";
import { Buttons, MButton } from "./styles/buttons";
import { Background, Main, Result, Error } from "./styles/layouts";
import { useRecoilState } from "recoil";
import { resultAtom, errorAtom } from "./atoms/atoms";
import NumberButton from "./components/numberButtons";
import ClearButton from "./components/clearButtons";
import OperButton from "./components/operButtons";
import ExtraButton from "./components/extraButtons";

function App() {
  const resultRef = useRef();
  const [result, setResult] = useRecoilState(resultAtom);
  const [error, setError] = useRecoilState(errorAtom);

  return (
    <Background>
      <Main>
        <Error visible={error}>error</Error>
        <Result ref={resultRef}>{result}</Result>

        <div>
          <input type="radio" name="rounding" checked value="F" />
          F
          <input type="radio" name="rounding" value="CUT" />
          CUT
          <input type="radio" name="rounding" value="5/4" />
          5/4
        </div>

        <div>
          <input type="radio" name="digits" value="4" />
          4
          <input type="radio" name="digits" value="3" />
          3
          <input type="radio" name="digits" value="2" />
          2
          <input type="radio" name="digits" value="1" />
          1
          <input type="radio" name="digits" value="0" />
          0
          <input type="radio" name="digits" checked value="ADD2" />
          ADD2
        </div>

        <Buttons>
          <ExtraButton oper="H/M/S" />
          <ExtraButton oper="%" />
          <ExtraButton oper="√ " />

          <ClearButton oper="▶" />
          <OperButton>GT</OperButton>

          <MButton>MC</MButton>
          <MButton>MR</MButton>
          <MButton>M-</MButton>
          <MButton>M+</MButton>
          <OperButton oper="/" />

          <ExtraButton oper="+/-" />
          <NumberButton number={"7"} />
          <NumberButton number={"8"} />
          <NumberButton number={"9"} />
          <OperButton oper="x" />

          <ClearButton oper="C" />
          <NumberButton number={"4"} />
          <NumberButton number={"5"} />
          <NumberButton number={"6"} />
          <OperButton oper="-" />

          <ClearButton oper="AC" />
          <NumberButton number="3" />
          <NumberButton number="2" />
          <NumberButton number="1" />
          <OperButton oper="+" />

          <NumberButton number="00" />
          <NumberButton number="0" />
          <NumberButton number="." />
          <OperButton oper="=" />
        </Buttons>
      </Main>
    </Background>
  );
}

export default App;
