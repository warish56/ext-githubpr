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
import { getFiltersFromDb } from "@/services/worker";
import { getCurrentPrId } from "@/utils/common";


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

        const init = async () => {
            const dbMapping = await getFiltersFromDb(getCurrentPrId());
            const urlMapping = getFiltersMappingFromUrl(window.START_URL ?? window.location.href);
            const isViewMode = urlMapping.isViewMode;
            const mapping = isViewMode ? urlMapping.mapping : (dbMapping.data.result?.mapping ?? {});
            setViewMode(isViewMode);
            initializeFilters(mapping);
            const hasAnyFilters = Object.keys(mapping).length > 0;
            if(isViewMode && hasAnyFilters){
                setCssStyles(mapping);
                setCurrentMileStones(Object.keys(mapping));
            }
        }

        init();

    }, [])


    return (
        <>
            <FileDrawer />
            <CreateMileStone />
        </>
    )
}