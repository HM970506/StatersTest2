import { roundAtom, digitAtom } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export default function RoundingSelector() {
  const [round, setRound] = useRecoilState(roundAtom);
  const [digit, setDigit] = useRecoilState(digitAtom);
  const roundChange = (e) => {
    if (e.target.checked) setRound(e.target.value);
  };

  const digitChange = (e) => {
    if (e.target.checked) setDigit(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="radio"
          name="rounding"
          defaultChecked
          value="F"
          onChange={roundChange}
        />
        F
        <input
          type="radio"
          name="rounding"
          value="CUT"
          onChange={roundChange}
        />
        CUT
        <input
          type="radio"
          name="rounding"
          value="5/4"
          onChange={roundChange}
        />
        5/4
      </div>

      <div>
        <input
          type="radio"
          onChange={digitChange}
          name="digits"
          value="4"
          defaultChecked
        />
        4
        <input type="radio" onChange={digitChange} name="digits" value="3" />
        3
        <input type="radio" onChange={digitChange} name="digits" value="2" />
        2
        <input type="radio" onChange={digitChange} name="digits" value="1" />
        1
        <input type="radio" onChange={digitChange} name="digits" value="0" />
        0
        <input type="radio" onChange={digitChange} name="digits" value="ADD2" />
        ADD2
      </div>
    </>
  );
}
