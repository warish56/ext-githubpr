import { globalAtom } from "@/atoms/global";
import { useAtom } from "jotai"


export const useGlobalAtom = () => {
    const [globalData, setGlobalData] = useAtom(globalAtom);
    

    const setCurrentMileStones = (milestones: string[]) => {
        setGlobalData((prev) => ({...prev, selectedMilestones:milestones}) )
    }

    const removeCurrentMileStones = (milestones: string[]) => {
        setGlobalData((prev) => ({
            ...prev,
            selectedMilestones: prev.selectedMilestones.filter((milestone) => !milestones.includes(milestone))
        }) )
    }

    const clearSelectedMilestones = () => {
        setGlobalData((prev) => ({...prev, selectedMilestones:[]}) )
    }

    const setViewMode = (status:boolean) => {
        setGlobalData((prev) => ({...prev, isViewMode:status}) )
    }

    return {
        globalData,
        setViewMode,
        setCurrentMileStones,
        removeCurrentMileStones,
        clearSelectedMilestones
    }

}