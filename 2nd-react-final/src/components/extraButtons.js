import { useRecoilState } from "recoil";
import { resultAtom } from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";

export default function ExtraButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);

  const setOper = () => {
    if (result !== "0") setResult(-parseFloat(result));
  };

  return <Style onClick={setOper}>{oper}</Style>;
}
