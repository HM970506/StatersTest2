import { memoryAtom, resultSelector, beforeAtom } from "../atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { MButton as Style } from "../styles/buttons";
import calculation from "./calculation";

export default function MButtons({ oper }) {
  const [memory, setMemory] = useRecoilState(memoryAtom);
  const before = useRecoilValue(beforeAtom);
  const [result, setResult] = useRecoilState(resultSelector);

  const setOper = () => {
    let nowValue = "";
    if (before.length === 2)
      nowValue = calculation(before[0], before[1], result);
    else if (before.length === 1)
      nowValue = calculation(before[0], result, result);
    else nowValue = result;
    setResult(nowValue);

    if (oper === "-") {
      setMemory((x) => {
        return [...x, String(-parseFloat(nowValue))];
      });
    } else if (oper === "+") {
      setMemory((x) => {
        return [...x, String(parseFloat(nowValue))];
      });
    } else if (oper === "R") {
      setResult(
        memory.reduce((sum, value) => {
          return sum + parseFloat(value);
        }, 0)
      );
    } else if (oper === "C") {
      setMemory([]);
    }
  };

  return <Style onClick={setOper}>M{oper}</Style>;
}
