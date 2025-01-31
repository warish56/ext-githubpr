import { atom } from "jotai";

type state = {
    id: string;
    name: string;
}
export const milestonesAtom = atom<state[]>([]);