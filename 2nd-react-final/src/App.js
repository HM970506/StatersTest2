import { useEffect, useState, useRef } from "react";
import { Buttons } from "./styles/buttons";
import { Background, Main, Result, Error } from "./styles/layouts";
import { useRecoilValue } from "recoil";
import {
  resultSelector,
  errorAtom,
  memoryAtom,
  beforeAtom,
  endAtom,
  kAtom,
} from "./atoms/atoms";
import NumberButton from "./components/numberButtons";
import ClearButton from "./components/clearButtons";
import OperButton from "./components/operButtons";
import ExtraButton from "./components/extraButtons";
import RoundingSelector from "./components/Selectors";
import MButton from "./components/mButtons";

function App() {
  const resultRef = useRef();
  const result = useRecoilValue(resultSelector);
  const memory = useRecoilValue(memoryAtom);
  const error = useRecoilValue(errorAtom);
  const before = useRecoilValue(beforeAtom);
  const end = useRecoilValue(endAtom);
  const k = useRecoilValue(kAtom);

  useEffect(() => {
    console.log(before);
  }, [before]);

  return (
    <Background>
      <Main>
        <Error visible={error}>error</Error>
        <div>
          {memory.length === 0 ? null : "M"}
          {k.length === 0 ? null : "K"}
        </div>
        <Result ref={resultRef}>
          {parseFloat(result).toLocaleString("ko-KR", {
            maximumFractionDigits: 15,
          })}
        </Result>

        <RoundingSelector />
        <Buttons>
          <ExtraButton oper="H/M/S" />
          <ExtraButton oper="%" />
          <ExtraButton oper="√ " />

          <ClearButton oper="▶" />
          <ExtraButton oper="GT" />

          <MButton oper="C" />
          <MButton oper="R" />
          <MButton oper="+" />
          <MButton oper="-" />
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
