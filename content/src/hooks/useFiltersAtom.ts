import { filtersAtom } from "@/atoms/filters";
import { useAtom } from "jotai"


export const useFiltersAtom = () => {
    const [filters, updateFilters] = useAtom(filtersAtom);

    const initializeFilters = (mapping:Record<string, Record<string, boolean>>) => {
        updateFilters(mapping)
    }

    const createMilestone = (key:string) => {
        updateFilters((prev) => ({
            ...prev,
            [key]: {}
        }))
    }

    const addFileToMilestone = (mileStone:string,filePath:string) => {
        updateFilters((prev) => {

            const oldData = {...prev};
            Object.values(oldData).forEach(records => {
                delete records[filePath];
            })

            return {
                ...oldData,
                [mileStone]: {
                    ...oldData[mileStone], 
                    [filePath]: true
                }
            }

        })
    } 


    return {
        filters,
        milestones: Object.keys(filters),
        initializeFilters,
        createMilestone,
        addFileToMilestone
    }

}