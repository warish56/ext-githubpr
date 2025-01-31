import { QueryFilterSuffix } from "@/constants";
import { FiltersData } from "@/types/common";


export const getFiltersMappingFromUrl = (url:string) => {
    const {searchParams} = new URL(url);
    const mapping:FiltersData = {};
    for (const [key, value] of searchParams.entries()) {
        if(!key.endsWith(QueryFilterSuffix)){
            continue;
        }
        const filterKey = key.split(QueryFilterSuffix)[0];
        const decodedValue = decodeURIComponent(value);
        mapping[filterKey] = {
            ...(mapping[filterKey] ?? {}), 
            [decodedValue]: true
        };
    }
    return {mapping, isViewMode: searchParams.get('view') === '1'};
}