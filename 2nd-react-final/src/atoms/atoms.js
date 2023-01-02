import { atom, selector } from "recoil";

export const beforeAtom = atom({
  key: "before",
  default: [],
});

export const memoryAtom = atom({
  key: "memory",
  default: [],
});

export const errorAtom = atom({
  key: "error",
  default: 0,
});

export const roundAtom = atom({
  key: "round",
  default: "F",
});

export const digitAtom = atom({
  key: "digit",
  default: "4",
});

export const resultAtom = atom({
  key: "result",
  default: "0",
});

//셀렉터로는 후처리만 되네... 전처리를 하고싶은데...!
export const resultSelector = selector({
  key: "resultSelector",
  get: ({ get }) => {
    const result = get(resultAtom);
    return result;
  },
  set: ({ set, input, get }) => {
    const round = get(roundAtom);
    const digit = get(digitAtom);
    const result = get(resultAtom);
    let nowResult = 0;
    console.log("지금 상태는 ", round, digit, result);

    if (round === "F") {
      if (String(result).includes("."))
        nowResult = (resultAtom, String(result).slice(0, digit + 1));
      else nowResult = (resultAtom, String(result).slice(0, digit));
    } else if (round === "CUT") {
      nowResult =
        (resultAtom,
        Math.floor(parseFloat(result) * Math.pow(10, digit)) /
          Math.pow(10, digit));
      //버림
    } else {
      nowResult = (resultAtom, parseFloat(result).toFixed(digit));
      //반올림
    }

    console.log(nowResult);
    set(resultAtom, nowResult);
  },
});
