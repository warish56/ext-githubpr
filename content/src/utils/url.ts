
const FilterSuffix = '_MS'

export const getFiltersMappingFromUrl = () => {
    const {searchParams} = new URL(window.location.href);
    const mapping:Record<string, Record<string, boolean>> = {};
    for (const [key, value] of searchParams.entries()) {
        if(!key.endsWith(FilterSuffix)){
            continue;
        }
        const filterKey = key.split(FilterSuffix)[0];
        mapping[filterKey] = {
            ...(mapping[filterKey] ?? {}), 
            [value]: true
        };
    }
    return mapping;
}