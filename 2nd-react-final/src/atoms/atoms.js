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

export const kAtom = atom({
  key: "",
  default: [],
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

export const gtAtom = atom({
  key: "gt",
  default: "0",
});

export const endAtom = atom({
  key: "end",
  default: false,
});

export const resultSelector = selector({
  key: "resultSelector",
  get: ({ get }) => {
    return get(resultAtom);
  },
  set: ({ set, get }, newValue) => {
    const round = get(roundAtom);
    const digit = get(digitAtom);
    const result = newValue === "." ? "0." : newValue;
    let nowResult = 0;

    if (round === "F") {
      if (String(result).includes("."))
        nowResult = (resultAtom, String(result).slice(0, 15));
      else nowResult = (resultAtom, String(result).slice(0, 14));
    } else {
      if (digit === "ADD2") {
        //이거 어떻게 하냐
      } else {
        if (result[result.length - 1] === ".") nowResult = result;

        if (round === "CUT")
          nowResult =
            Math.floor(parseFloat(result) * Math.pow(10, digit)) /
            Math.pow(10, digit);
        else
          nowResult =
            Math.round(parseFloat(result) * Math.pow(10, digit)) /
            Math.pow(10, digit);
      }
    }

    if (isNaN(nowResult) || nowResult === "Infinity") {
      set(resultAtom, "0");
      set(errorAtom, true);
    } else set(resultAtom, nowResult);
  },
});
