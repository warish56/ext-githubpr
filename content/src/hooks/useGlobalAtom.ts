import { globalAtom } from "@/atoms/global";
import { GlobalData } from "@/types/common";
import { useAtom } from "jotai"


export const useGlobalAtom = () => {
    const [globalData, setGlobalData] = useAtom(globalAtom);
    

    const setCurrentMileStones = (milestones: string[]) => {
        setGlobalData((prev) => ({...prev, selectedMilestones:milestones}) )
    }

    const addToCurrentMileStone = (milestone: string) => {
        let data:(GlobalData | undefined); 
        setGlobalData((prev) => {
            const newGlobalData = {...prev, selectedMilestones:[...prev.selectedMilestones , milestone]};
            data = newGlobalData;
            return newGlobalData
        })
        return data;
    }

    const removeCurrentSelectedMileStones = (milestones: string[]) => {
        let data:(GlobalData | undefined); 
        setGlobalData((prev) => {
            const  newGlobalData = {
            ...prev,
            selectedMilestones: prev.selectedMilestones.filter((milestone) => !milestones.includes(milestone))
        }
        data = newGlobalData;
        return newGlobalData
    })
        return data;
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
        addToCurrentMileStone,
        removeCurrentSelectedMileStones,
        clearSelectedMilestones
    }

}