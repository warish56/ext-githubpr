import { Box, IconButton, Popover, Stack, Typography } from "@mui/material";
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
            gap: '5px'
        }}>
           {!globalData.isViewMode &&
                <IconButton onClick={handleClick}>
                    <LocalOfferIcon 
                    sx={{
                        width: '15px',
                        height: '15px',
                        color:"background.default"
                    }}
                    />
                </IconButton>
            }
             <Typography variant="caption" sx={{color: 'background.default', textTransform: 'capitalize'}}>{currentMileStone}</Typography>
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
                height: '150px',
                overflow: 'auto'
            }}>
                <MilestonesSelect onClose={handleClose} filePath={filePath}/>
            </Stack>
        </Popover>
        </Box>
    )
}