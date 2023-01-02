import { useRecoilState } from "recoil";
import { resultAtom } from "../atoms/atoms";
import { OperButton as Style } from "../styles/buttons";

export default function OperButton({ oper }) {
  const [result, setResult] = useRecoilState(resultAtom);

  return <Style>{oper}</Style>;
}
