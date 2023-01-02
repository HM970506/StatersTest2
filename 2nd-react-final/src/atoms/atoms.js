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

export const resultSelector = selector({
  key: "resultSelector",
  get: ({ get }) => {
    return get(resultAtom);
  },
  set: ({ set, get }, newValue) => {
    const round = get(roundAtom);
    const digit = get(digitAtom);
    const result = newValue;
    let nowResult = 0;
    console.log("지금 상태는 ", round, digit, result);

    if (round === "F") {
      if (String(result).includes("."))
        nowResult = (resultAtom, String(result).slice(0, 15));
      else nowResult = (resultAtom, String(result).slice(0, 14));
    } else if (round === "CUT") {
      if (result[result.length - 1] === ".") nowResult = result;
      else
        nowResult =
          Math.floor(parseFloat(result) * Math.pow(10, digit)) /
          Math.pow(10, digit);
    } else {
      if (result[result.length - 1] === ".") nowResult = result;
      else
        nowResult =
          Math.round(parseFloat(result) * Math.pow(10, digit)) /
          Math.pow(10, digit);
    }

    console.log(nowResult);
    set(resultAtom, nowResult);
  },
});
