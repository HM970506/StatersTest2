import { useRecoilState } from "recoil";
import { resultAtom, errorAtom } from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";

export default function ExtraButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [error, setError] = useRecoilState(errorAtom);

  const setOper = () => {
    if (oper === "+/-" && result !== "0") setResult(-parseFloat(result));
    if (oper === "√ ") {
      const nowResult = Math.sqrt(parseFloat(result));
      if (isNaN(nowResult)) {
        setResult("0");
        setError(1);
      } else setResult(String(nowResult));
    }
  };

  return <Style onClick={setOper}>{oper}</Style>;
}
