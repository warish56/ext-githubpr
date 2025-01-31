import { filtersAtom } from "@/atoms/filters";
import { QueryFilterSuffix } from "@/constants";
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

    const removeMilestone = (key:string) => {
        updateFilters((prev) => {
            const newData = {...prev};
            Reflect.deleteProperty(newData, key);
            return newData
        })
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

    const generateFiltersUrl = (selectedMilestones: string[]) => {
        const currentUrl = new URL(window.location.href);
        const searchParams = currentUrl.searchParams;
        selectedMilestones.forEach((milestone) => {
            const paths = Object.keys(filters[milestone]).filter(key => filters[milestone][key]);
            paths.forEach((path) => {
                searchParams.append(`${milestone}${QueryFilterSuffix}`, encodeURIComponent(path)) 
            })
        })
        searchParams.append('view','1')
        return currentUrl.href;
    }


    return {
        filters,
        milestones: Object.keys(filters),
        initializeFilters,
        createMilestone,
        removeMilestone,
        addFileToMilestone,
        generateFiltersUrl
    }

}