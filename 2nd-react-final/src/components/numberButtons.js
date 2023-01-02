import { useRecoilState } from "recoil";
import { resultSelector, beforeAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultSelector);
  const [before, setBefore] = useRecoilState(beforeAtom);

  const setNumber = () => {
    if (String(result).includes(".")) {
      if (result.length >= 15) return;
      else if (number === ".") return;
    } else if (!String(result).includes(".") && result.length >= 14) return;

    if (before.length === 1) {
      setBefore((x) => {
        return [...x, result];
      });
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
  };

  return <Style onClick={setNumber}>{number}</Style>;
}
