import { milestonesAtom } from "@/atoms/milestones"
import { generateRandomId } from "@/utils/common";
import { useAtom } from "jotai"


export const useMilestoneAtom = () => {
    const [milestones, setMilestones] = useAtom(milestonesAtom);

    const addMilestones = (name:string) => {
        setMilestones((prev) => [...prev, {name, id:generateRandomId()}])
    }


    const removeMilestones = (id:string) => {
        setMilestones((prev) => prev.filter(milestone => milestone.id !== id))
    }

    return {
        addMilestones,
        removeMilestones,
        milestones,

    }
}