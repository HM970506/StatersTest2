import { useRecoilState } from "recoil";
import { resultSelector, errorAtom, gtAtom } from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";

export default function ExtraButton({ oper }) {
  const [result, setResult] = useRecoilState(resultSelector);
  const [error, setError] = useRecoilState(errorAtom);
  const [gt, setGt] = useRecoilState(gtAtom);

  const setOper = () => {
    if (oper === "+/-" && result !== "0") setResult(-parseFloat(result));
    else if (oper === "√ ") {
      const nowResult = Math.sqrt(parseFloat(result));
      if (isNaN(nowResult)) {
        setResult("0");
        setError(1);
      } else setResult(String(nowResult));
    } else if (oper === "GT") {
      setResult(
        gt.reduce((sum, value) => {
          return sum + parseFloat(value);
        }, 0)
      );
    } else alert("구현 예정입니다.");
  };

  return <Style onClick={setOper}>{oper}</Style>;
}
