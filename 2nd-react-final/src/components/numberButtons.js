import { useRecoilState } from "recoil";
import { resultSelector, beforeAtom, gtAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultSelector);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const [end, setEnd] = useRecoilState(gtAtom);

  const setNumber = () => {
    //길이 초과시 입력x
    if (String(result).includes(".")) {
      if (result.length >= 15) return;
      else if (number === ".") return;
    } else if (!String(result).includes(".") && result.length >= 14) return;

    if (end) {
      setResult(number);
      setEnd(false);
    } else {
      if (before.length === 1) {
        setBefore((x) => {
          return [...x, result];
        });
        setResult(number);
      }
      if (before.length === 0) {
        setResult(number);
      } else {
        if (result === "0") {
          if (number !== "00") setResult(number);
          else return;
        } else
          setResult((x) => {
            return x + number;
          });
      }
    }
  };

  return <Style onClick={setNumber}>{number}</Style>;
}
