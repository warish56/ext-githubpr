import { atom } from "jotai";

type state = {
    isViewMode: boolean;
    selectedMilestones: string[];
}

export const globalAtom = atom<state>({
    isViewMode: false,
    selectedMilestones: []
})