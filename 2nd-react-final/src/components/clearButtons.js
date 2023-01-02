import { useRecoilState } from "recoil";
import { resultAtom, beforeAtom, memoryAtom, errorAtom } from "../atoms/atoms";
import { ClearButton as Style } from "../styles/buttons";

export default function ClearButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const [memort, setMemory] = useRecoilState(memoryAtom);
  const [error, setError] = useRecoilState(errorAtom);

  const setClear = () => {
    if (oper === "▶") {
      if (result.length > 1) setResult(result.slice(0, result.length - 1));
      else setResult("0");
    } else {
      setResult("0");
      setError(0);

      if (oper === "AC") {
        setBefore([]);
        setMemory([]);
      }
    }
  };

  return <Style onClick={setClear}>{oper}</Style>;
}
