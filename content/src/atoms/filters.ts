import { atom } from "jotai";

type state = Record<string|number, Record<string, boolean>>;

export const filtersAtom = atom<state>({})