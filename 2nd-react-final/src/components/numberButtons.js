import { useRecoilState } from "recoil";
import { resultSelector, beforeAtom, endAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultSelector);
  const [end, setEnd] = useRecoilState(endAtom);

  const setNumber = () => {
    //길이 초과시 입력x
    if (String(result).includes(".")) {
      if (result.length >= 15) return;
      else if (number === ".") return;
    } else if (!String(result).includes(".") && result.length >= 14) return;

    //결과값 상태인지 확인
    if (end) {
      setResult(number);
      setEnd(false);
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
