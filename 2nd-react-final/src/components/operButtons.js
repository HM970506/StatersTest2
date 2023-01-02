import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  resultSelector,
  beforeAtom,
  gtAtom,
  endAtom,
  kAtom,
} from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";
import calculation from "./calculation";

export default function OperButton({ oper }) {
  const [result, setResult] = useRecoilState(resultSelector);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const [gt, setGt] = useRecoilState(gtAtom);
  const [end, setEnd] = useRecoilState(endAtom);
  const [k, setK] = useRecoilState(kAtom);

  useEffect(() => {
    console.log(before);
  }, [before]);

  const setOper = () => {
    let nowResult = result;
    setEnd(true);

    if (k.length === 0) {
      if (before.length === 0) setBefore([oper, nowResult]);
      else if (before.length === 2) {
        if (!end) nowResult = calculation(before[0], before[1], result);
        if (end && oper === "=") {
          if (before[0] === "-") nowResult = -nowResult;
          else if (before[0] === "/")
            nowResult = calculation(before[0], 1, result);
          else if (before[0] === "x")
            nowResult = calculation(before[0], result, result);
        }
        if (end && oper !== "=") {
          console.log(before, oper);
          if (before[0] === oper) setK([oper, nowResult]); //k
          else if (before[0] !== oper) setBefore([oper]); //다른 오퍼 클릭시 덮어씌움
        }
      }
    } else {
      console.log(k, result);
      nowResult = calculation(k[0], result, k[1]);
    }

    setResult(nowResult);

    if (oper === "=") {
      setGt((x) => [...x, nowResult]);
      setBefore([]);
    }
  };
  return <Style onClick={setOper}>{oper}</Style>;
}
