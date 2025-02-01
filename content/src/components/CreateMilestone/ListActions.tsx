import { IconButton, Stack, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

type props = {
    onDelete: () => void;
}

export const ListActions = ({onDelete}:props) => {
    return(
        <Stack direction="row" sx={{
            alignItems: 'center',
        }}>
            <Tooltip title="Delete milestone">
                <IconButton onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }} size="small">
                    <DeleteIcon sx={{width:'15px', height:'15px'}}/>
                </IconButton>
            </Tooltip>
        </Stack>
    )
}