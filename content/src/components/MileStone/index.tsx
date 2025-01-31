import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { getFiltersMappingFromUrl } from "@/utils/url";
import { useEffect } from "react";
import { FileDrawer } from "../FileDrawer";
import { CreateMileStone } from "../CreateMilestone";


export const MileStones = () => {
    const { initializeFilters} = useFiltersAtom();

    useEffect(() => {
        const mapping = getFiltersMappingFromUrl()
        initializeFilters(mapping);
    }, [])

    return (
        <>
            <FileDrawer />
            <CreateMileStone />
        </>
    )
}