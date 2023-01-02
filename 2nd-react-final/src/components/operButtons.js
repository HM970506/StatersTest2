import { useRecoilState, useRecoilValue } from "recoil";
import { resultSelector, beforeAtom, gtAtom, endAtom } from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";
import calculation from "./calculation";

export default function OperButton({ oper }) {
  const [result, setResult] = useRecoilState(resultSelector);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const [gt, setGt] = useRecoilState(gtAtom);
  const [end, setEnd] = useRecoilState(gtAtom);

  const setOper = () => {
    let nowResult = result;

    if (before.length === 1) {
      //계산중
      if (oper === "=") nowResult = calculation(before[0], result, result);
      //같은 오퍼 연속 클릭
      else if (before[0] !== oper) setBefore([oper]); //다른 오퍼 클릭시 덮어씌움
    } //계산끝
    else if (before.length === 2)
      nowResult = calculation(before[0], before[1], result);

    setResult(nowResult);

    if (oper !== "=") setBefore([oper]); //=아니면 계산중
    else {
      // =맞으면 계산끝
      setGt((x) => [...x, nowResult]);
      setEnd(true);
      setBefore([]);
    }
  };

  return <Style onClick={setOper}>{oper}</Style>;
}
