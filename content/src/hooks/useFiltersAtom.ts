import { filtersAtom } from "@/atoms/filters";
import { QueryFilterSuffix } from "@/constants";
import { saveFiltersToDb } from "@/services/worker";
import { useAtomValue, useSetAtom } from "jotai"
import { useEffect } from "react";
import { getCurrentPrId } from "@/utils/common";
import { useGlobalAtom } from "./useGlobalAtom";
import { FiltersData } from "@/types/common";


export const useFiltersAtom = () => {
    const filters = useAtomValue(filtersAtom)
    const updateFilters = useSetAtom(filtersAtom);
    const {globalData} = useGlobalAtom()


    useEffect(() => {
        if(Object.keys(filters).length > 0 && !globalData.isViewMode){
            saveFiltersToDb(getCurrentPrId(), filters)
        }
    }, [filters, globalData])

    const initializeFilters = (mapping:Record<string, Record<string, boolean>>) => {
        updateFilters(mapping)
    }

    const createMilestone = (key:string) => {
        updateFilters((prev) => ({
            ...prev,
            [key]: {}
        }))
    }

    const removeMilestone = (key:string, callback?: (data: FiltersData)=> void) => {
        updateFilters((prev) => {
            const newData = {...prev};
            Reflect.deleteProperty(newData, key);
            callback?.(newData)
            return newData
        })
    }


    const addFileToMilestone = (mileStone:string,filePath:string, callback?: (data: FiltersData)=> void) => {
        updateFilters((prev) => {
            const oldData = {...prev};
            Object.values(oldData).forEach(records => {
                delete records[filePath];
            })
            const newData = {
                ...oldData,
                [mileStone]: {
                    ...oldData[mileStone], 
                    [filePath]: true
                }
            }
            callback?.(newData)
            return newData;

        })
    } 

    const removeFileFromMilestone = (mileStone:string,filePath:string, callback?: (data: FiltersData)=> void) => {
        updateFilters((prev) => {
            const oldData = {...prev};
            const newData =  {
                ...oldData,
                [mileStone]: {
                    ...oldData[mileStone], 
                    [filePath]: false
                }
            }
            callback?.(newData);
            return newData;
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
        removeFileFromMilestone,
        generateFiltersUrl
    }

}