import { filtersAtom } from "@/atoms/filters";
import { QueryFilterSuffix } from "@/constants";
import { saveFiltersToDb } from "@/services/worker";
import { useAtomValue, useSetAtom } from "jotai"
import { getCurrentPrId } from "@/utils/common";
import { useGlobalAtom } from "./useGlobalAtom";
import { FiltersData } from "@/types/common";


export const useFiltersAtom = () => {
    const filters = useAtomValue(filtersAtom)
    const updateFilters = useSetAtom(filtersAtom);
    const {globalData} = useGlobalAtom()


    // useEffect(() => {
    //     if(Object.keys(filters).length > 0 && !globalData.isViewMode){
    //         saveFiltersToDb(getCurrentPrId(), filters)
    //     }
    // }, [filters, globalData])


    const handleUpdateFilters = (mapping: FiltersData | ((data:FiltersData) => FiltersData), storeInDb=true) => {
        const isCallback = typeof mapping === 'function';
        let currentFilters = {};
        if(isCallback){
            updateFilters((prevData) => {
                const newData = mapping(prevData);
                currentFilters = newData;
                return newData;
            });
        }else{
            currentFilters = mapping;
            updateFilters(mapping);
        }
        
        if(storeInDb && Object.keys(currentFilters).length > 0 && !globalData.isViewMode){
            saveFiltersToDb(getCurrentPrId(), currentFilters)
        }
    }


    const initializeFilters = (mapping:FiltersData) => {
        handleUpdateFilters(mapping, false);
    }

    const createMilestone = (key:string) => {
        handleUpdateFilters((prev) => ({
            ...prev,
            [key]: {}
        }))
    }

    const removeMilestone = (key:string) => {
        let data:FiltersData|undefined;
        handleUpdateFilters((prev) => {
            const newData = {...prev};
            Reflect.deleteProperty(newData, key);
            data=newData;
            return newData
        })
        return data;
    }


    const addFileToMilestone = (mileStone:string,filePath:string, callback?: (data: FiltersData)=> void) => {
        handleUpdateFilters((prev) => {
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
        handleUpdateFilters((prev) => {
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