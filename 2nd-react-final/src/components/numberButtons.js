import { useRecoilState } from "recoil";
import { resultAtom, beforeAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);

  const setNumber = () => {
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
