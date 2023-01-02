import { useRecoilState } from "recoil";
import { resultAtom, beforeAtom, memoryAtom, errorAtom } from "../atoms/atoms";
import { ClearButton as Style } from "../styles/buttons";

export default function ClearButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);
  const [before, setBefore] = useRecoilState(beforeAtom);
  const [memort, setMemory] = useRecoilState(memoryAtom);
  const [error, setError] = useRecoilState(errorAtom);

  const setClear = () => {
    setResult("0");
    setError(0);

    if (oper === "AC") {
      setBefore([]);
      setMemory([]);
    }
  };

  return <Style onClick={setClear}>{oper}</Style>;
}
