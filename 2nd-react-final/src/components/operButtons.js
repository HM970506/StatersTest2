import { useRecoilState, useRecoilValue } from "recoil";
import { resultAtom, beforeAtom, roundAtom } from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";

export default function OperButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const round = useRecoilValue(roundAtom);

  const calculation = (oper, a, b) => {
    console.log(a, oper, b);
    let nowResult = 0;
    if (oper === "+") nowResult = parseFloat(a) + parseFloat(b);
    else if (oper === "-") nowResult = parseFloat(a) - parseFloat(b);
    else if (oper === "/") nowResult = parseFloat(a) / parseFloat(b);
    else if (oper === "x") nowResult = parseFloat(a) * parseFloat(b);

    if (String(nowResult).includes("."))
      nowResult = String(nowResult).slice(0, round + 1);
    else nowResult = String(nowResult).slice(0, round);

    return nowResult;
  };

  const setOper = () => {
    if (before.length === 1) {
      //비정상계산
      if (oper === "=") setResult(calculation(before[0], result, result));
      else if (before[0] !== oper) setBefore([oper]);
    } else if (before.length === 2)
      //정상계산
      setResult(calculation(before[0], before[1], result));

    if (oper !== "=") setBefore([oper]);
    else setBefore([]);
  };

  return <Style onClick={setOper}>{oper}</Style>;
}
