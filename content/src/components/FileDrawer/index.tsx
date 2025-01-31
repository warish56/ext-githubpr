import { useEffect, useState, Fragment } from "react"
import ReactDOM  from "react-dom";
import { SelectMileStonePopover } from "./Popover";


type fileData = {
    userId: string;
    pullRequestId: string;
    file: {
        extension: string;
        path: string;
        fileCount: string;
    }
}

type FileItem = {
    container: Element;
    payload: fileData
}

export const FileDrawer = () => {
    const [visible, setVisible] = useState(true);
    const [fileItems, setFileItems] = useState<FileItem[]>([]);

    useEffect(() => {
        const diffContainer = document.getElementById('diff-layout-component');

        if(!diffContainer){
            return;
        }

        const observer = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === "attributes") {
                    if(mutation.attributeName === 'class'){
                        if(mutation.target.className.includes('hx_Layout--sidebar-hidden')){
                            setVisible(false);
                        }else{
                            setVisible(true);
                        }
                    }
                }
              }
        });

        observer.observe(diffContainer, {
            attributes: true
        });

        return () => {
            observer.disconnect();
        }
    }, [])


    useEffect(() => {
        if(!visible){
            return;
        }
        const result = []
        const allFileItems = document.querySelectorAll("[id*=file-tree-item-diff]");


        const createContainer = (id:string) => {
            const div = document.createElement('div');
            div.id = id;
            div.style.cssText ="position:absolute; right:30px;"
            return div;
        }

        for(const fileItem of allFileItems){
            const data = fileItem.dataset.hydroClickPayload;
            const value = JSON.parse(data);
            const payload = value.payload;
            const container = createContainer(payload.data.path)
            const divToAppend = fileItem.querySelector('a')?.lastElementChild;
            divToAppend?.insertAdjacentElement('beforebegin', container)
            fileItem.style.position = 'relative';
            result.push({
                container,
                payload: {
                    userId: payload.user_id,
                    pullRequestId: payload.pull_request_id,
                    file: {
                        extension: payload.data.extension,
                        path: payload.data.path,
                        fileCount: payload.data.file_count
                    }
                }

            })
        }
        
        setFileItems(result)
    }, [visible])


    if(!visible){
        return null;
    }

    return fileItems.map((data) => {
        return (
            <Fragment key={data.payload.file.path}>
                {ReactDOM.createPortal( <SelectMileStonePopover filePath={data.payload.file.path} /> ,data.container)}
            </Fragment>
        )
    })

}