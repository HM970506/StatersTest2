import { atom } from "recoil";

export const resultAtom = atom({
  key: "result",
  default: "0",
});

export const beforeAtom = atom({
  key: "before",
  default: [],
});

export const memoryAtom = atom({
  key: "memory",
  default: [],
});
