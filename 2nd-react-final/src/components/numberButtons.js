import { useRecoilState, useRecoilValue } from "recoil";
import { resultAtom, beforeAtom, roundAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const round = useRecoilValue(roundAtom);

  const setNumber = () => {
    if (String(result).includes(".") && result.length >= round + 1) return;
    else if (!String(result).includes(".") && result.length >= round) return;

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
