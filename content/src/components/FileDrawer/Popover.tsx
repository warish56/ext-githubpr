import { Box, Button, Popover, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { MilestonesSelect } from "../Inputs/MilestonesSelect";
import { useFiltersAtom } from "@/hooks/useFiltersAtom";
import { useGlobalAtom } from "@/hooks/useGlobalAtom";

type props = {
    filePath: string;
}
export const SelectMileStonePopover = ({filePath}:props) => {
    const {filters} = useFiltersAtom();
    const {globalData} = useGlobalAtom();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();  
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);
    const currentMileStone = Object.keys(filters).find(key => filters[key]?.[filePath]) ?? '';


    return (
        <Box sx={{
           
        }}>

        <Stack direction="row" sx={{
            alignItems: 'center',
            gap: '5px',
            minHeight: '31px'
        }}>
           {!globalData.isViewMode &&
                <Tooltip title="Select milestone">
                    <Button 
                    onClick={handleClick}
                    disabled={Object.keys(filters).length === 0}
                    variant="text" 
                    sx={{
                        color: 'currentcolor'
                    }}
                    startIcon={ 
                        <LocalOfferIcon sx={{
                            width: '15px',
                            height: '15px',
                        }}/>
                    }>
                        {currentMileStone && <Typography variant="caption" sx={{textTransform: 'capitalize'}}>{currentMileStone}</Typography>   }             
                    </Button>
                </Tooltip>
            }
            {globalData.isViewMode && currentMileStone && <Typography variant="caption" sx={{textTransform: 'capitalize'}}>{currentMileStone}</Typography> }
        </Stack>

        <Popover
        id="milestone_create_popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        >
            <Stack sx={{
                width: '100px',
                maxHeight: '150px',
                overflow: 'auto',
                padding: '10px'
            }}>
                <MilestonesSelect currentMilestone={currentMileStone} onClose={handleClose} filePath={filePath}/>
            </Stack>
        </Popover>
        </Box>
    )
}