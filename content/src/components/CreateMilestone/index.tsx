import { useEffect, useState } from "react"
import ReactDOM  from "react-dom";
import { CreateMileStonePopover } from "./Popover";


export const CreateMileStone = () => {
    const [container, setContainer] = useState<Element|null>(null);
    
    useEffect(() => {
        const fileFilterElem = document.querySelector("file-filter");
        if(!fileFilterElem){
            return;
        }

        const createContainer = (id:string) => {
            const div = document.createElement('div');
            div.id = id;
            return div
        }

        const parent = fileFilterElem.parentElement;
        const cont = createContainer('milestone_create');
        parent?.appendChild(cont);
        setContainer(cont);
    }, [])

    if(!container){
        return null;
    }

    return ReactDOM.createPortal(
        <CreateMileStonePopover />
        , container)
}