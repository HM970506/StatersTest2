import { useRecoilState } from "recoil";
import { resultAtom } from "../atoms/atoms";
import { ClearButton as Style } from "../styles/buttons";

export default function ClearButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);

  const setClear = () => {
    if (oper === "C") {
      if (result.length === 1) setResult("0");
      else setResult(result.slice(0, result.length - 1));
    } else setResult("0");
  };

  return <Style onClick={setClear}>{oper}</Style>;
}
