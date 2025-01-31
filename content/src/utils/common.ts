
export const generateRandomId = () => {
    let id='';
    for(let i=0; i<4; i++){
        id += Math.random().toString(36).substring(2, 15);
    }
    return id;
};
