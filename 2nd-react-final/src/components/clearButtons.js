import { useRecoilState } from "recoil";
import { resultAtom, beforeAtom, memoryAtom } from "../atoms/atoms";
import { ClearButton as Style } from "../styles/buttons";

export default function ClearButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const [memort, setMemory] = useRecoilState(memoryAtom);

  const setClear = () => {
    if (oper === "C") {
      if (result.length === 1) setResult("0");
      else setResult("0");
    } else {
      setResult("0");
      setBefore([]);
      setMemory([]);
    }
  };

  return <Style onClick={setClear}>{oper}</Style>;
}
