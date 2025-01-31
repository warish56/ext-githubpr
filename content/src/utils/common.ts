
export const generateRandomId = () => {
    let id='';
    for(let i=0; i<4; i++){
        id += Math.random().toString(36).substring(2, 15);
    }
    return id;
};


export const sendMessageToWorker = <T>(message:string, data:Record<string, unknown> = {}) => {
    const appId = chrome.runtime.id;
    const targetLocation = 'service_worker';
    return new Promise<T>((res) => {
        chrome.runtime.sendMessage({appId, type: message, targetLocation, ...data},(response:T) => {
            res(response)
        });
    })
}

export const getCurrentPrId = ()=> {
    const parts = window.location.pathname.split('/')
    return parts[parts.length-2];
}