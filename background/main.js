import { ActionTypes } from "./constants.js";
import { clearFilters, getFilters, saveFilters } from "./filters.js";



const handleQueryMessages = async (message, sendResponse) => {
    try{
        if(message.type === ActionTypes.BG_GET_QUERY){
            const result = await getFilters(message.prId);
            sendResponse({success: true, data:{result} });
        }
        if(message.type === ActionTypes.BG_SAVE_QUERY){
            await saveFilters(message.prId, message.mapping);
            sendResponse({success: true });
        }
    }catch(err){
        console.error("Error in handling Query",err)
        sendResponse({success: false, error:err});
    }
}

/**
 * Listening to incoming messages
 */


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    const appId = chrome.runtime.id;
    const myLocation = 'service_worker';

      // only messages from  our extension can be accepted
    if( message?.appId !== appId || message?.targetLocation !== myLocation){
        return;
    }

    if([ActionTypes.BG_GET_QUERY, ActionTypes.BG_SAVE_QUERY].includes(message.type)){
        handleQueryMessages(message, sendResponse);
        return true;
    }
  
})


/**
 *  Listening on Action btn clicked
 */
chrome.action.onClicked.addListener((tab) => {
});
