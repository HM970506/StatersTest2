import { useRecoilState } from "recoil";
import { resultAtom, beforeAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);

  const setNumber = () => {
    if (before.length !== 1) {
      if (result === "0" && number !== "00") setResult(number);
      else
        setResult((x) => {
          return x + number;
        });
    } else {
      setBefore((x) => {
        return [...x, result];
      });
      setResult(number);
    }
  };

  return <Style onClick={setNumber}>{number}</Style>;
}
