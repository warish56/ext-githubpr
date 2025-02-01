import { FiltersData } from "@/types/common";

export const STYLESHEET_ID = 'milestone_stylesheet'



export const createStylesheet = (id:string) => {
    const stylesheet = document.createElement('style');
    stylesheet.id = id;
    return stylesheet;
}


export const getStylesheet = () => {
    return document.getElementById(STYLESHEET_ID);
}

export const getOrCreateStylesheet = (style:string) => {
    const stylesheet = getStylesheet() ?? createStylesheet(STYLESHEET_ID);
    stylesheet.innerHTML = style;
    return stylesheet;
}


export const appendStyleSheet = (stylesheet:HTMLElement) => {
        document.head.appendChild(stylesheet);
}

export const createStyles = (filters: FiltersData, selectedMilestones: string[]) => {
    const selectors:string[] = [];

    selectedMilestones.forEach((selectedMilestone: string) => {
        const paths = filters[selectedMilestone];
        Object.keys((paths ?? {})).filter(path =>filters[selectedMilestone][path]).forEach((path) => {
            selectors.push(`:not([data-file-path="${path}"])`)
        })
    })


    const style = `
        [data-file-path]${selectors.join('')}{
            display: none;
        }
    `

    return style;
}