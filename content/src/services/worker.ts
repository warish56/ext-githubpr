import { BG_ACTIONS } from "@/constants"
import { FiltersData } from "@/types/common"
import { WorkerResponse } from "@/types/worker"
import { sendMessageToWorker } from "@/utils/common"


export const saveFiltersToDb = (prId:string, mapping:FiltersData) => {
     return sendMessageToWorker<WorkerResponse<null>>(BG_ACTIONS.BG_SAVE_QUERY, {prId, mapping})
}

export const getFiltersFromDb  = (prId:string) => {
    return  sendMessageToWorker<WorkerResponse<{result:{mapping:FiltersData}}>>(BG_ACTIONS.BG_GET_QUERY, {prId})
}