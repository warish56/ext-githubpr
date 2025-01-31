import { IconButton, Stack } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

type props = {
    onDelete: () => void;
    onCopy: () => void;
}

export const ListActions = ({onDelete, onCopy}:props) => {
    return(
        <Stack direction="row" sx={{
            alignItems: 'center',
        }}>
            <IconButton onClick={(e) => {
                e.stopPropagation();
                onCopy()
            }} size="small">
                <ContentCopyIcon sx={{width:'15px', height:'15px'}}/>
            </IconButton>

            <IconButton onClick={(e) => {
                 e.stopPropagation();
                onDelete();
            }} size="small">
                <DeleteIcon sx={{width:'15px', height:'15px'}}/>
            </IconButton>
        </Stack>
    )
}