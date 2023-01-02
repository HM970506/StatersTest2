import { useRecoilState } from "recoil";
import { resultAtom } from "../atoms/atoms";
import { NumberButton as Style } from "../styles/buttons";

export default function NumberButton({ number }) {
  const [result, setResult] = useRecoilState(resultAtom);

  const setNumber = () => {
    if (result === "0" && number !== "00") setResult(number);
    else
      setResult((x) => {
        return x + number;
      });
  };

  return <Style onClick={setNumber}>{number}</Style>;
}
