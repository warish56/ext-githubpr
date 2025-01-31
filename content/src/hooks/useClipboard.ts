import { useSnackbar } from "./useSnackbar"


export const useClipboard = () => {
    const {showSnackbar} = useSnackbar();

    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text).then(() => {
            showSnackbar({message:'Copied Successfully', type:'succes'})
        })
    }
    return {
        copyToClipboard
    }
}