import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { getFiltersMappingFromUrl } from "@/utils/url";
import { useLayoutEffect } from "react";
import { FileDrawer } from "../FileDrawer";
import { CreateMileStone } from "../CreateMilestone";
import { useGlobalAtom } from "@/hooks/useGlobalAtom";
import { appendStyleSheet } from "@/utils/styles";
import { getOrCreateStylesheet } from "@/utils/styles";
import { createStyles } from "@/utils/styles";
import { FiltersData } from "@/types/common";


export const MileStones = () => {
    const { initializeFilters} = useFiltersAtom();
    const {setViewMode, setCurrentMileStones} = useGlobalAtom();


    /**
     * Setting the initial styles fon page load
     */
    const setCssStyles = (filters:FiltersData) => {
        const style = createStyles(filters, Object.keys(filters));
        const styleSheet = getOrCreateStylesheet(style);
        appendStyleSheet(styleSheet);
    }

    useLayoutEffect(() => {
        const {mapping, isViewMode} = getFiltersMappingFromUrl(window.START_URL ?? window.location.href)
        setViewMode(isViewMode);
        initializeFilters(mapping);
        setCurrentMileStones(Object.keys(mapping));
        const hasAnyFilters = Object.keys(mapping).length > 0;
        if(isViewMode && hasAnyFilters){
            setCssStyles(mapping);
        }
    }, [])

    return (
        <>
            <FileDrawer />
            <CreateMileStone />
        </>
    )
}