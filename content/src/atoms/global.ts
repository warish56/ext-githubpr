import { GlobalData } from "@/types/common";
import { atom } from "jotai";


export const globalAtom = atom<GlobalData>({
    isViewMode: false,
    selectedMilestones: [],
})