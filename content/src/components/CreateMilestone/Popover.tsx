import { Box, Button, IconButton, Popover, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { MilestoneList } from "./List";
import { Form } from "./Form";
import { useGlobalAtom } from "@/hooks/useGlobalAtom";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useClipboard } from "@/hooks/useClipboard";
import { useFiltersAtom } from "@/hooks/useFiltersAtom";


export const CreateMileStonePopover = () => {
    const {globalData} = useGlobalAtom();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [currentView, setCurrentView] = useState<'list'|'form'>('list');
    const {copyToClipboard} = useClipboard();
    const {generateFiltersUrl} = useFiltersAtom();



    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleBack = () => {
        setCurrentView('list');
    }

    const handleCreate = () => {
        setCurrentView('form');
    }

    const handleCopy = () => {
        const url = generateFiltersUrl(globalData.selectedMilestones);
        copyToClipboard(url);
    }


    const open = Boolean(anchorEl);
    const selectedMilestones = globalData.selectedMilestones;

    return (
        <Box>
        <Stack direction="row" sx={{
            gap: '10px',
            alignItems: 'center'
        }}>
            <Tooltip title="Filter milestones">
                <Button 
                onClick={handleClick}
                variant="text" 
                startIcon={ 
                    <LocalOfferIcon sx={{
                        width: '15px',
                        height: '15px',
                    }}/>
                }>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize'}}>{selectedMilestones.length > 0 ?  selectedMilestones.join(',') : 'Select Milestone'}</Typography>
                </Button>
            </Tooltip>


            {!globalData.isViewMode && globalData.selectedMilestones.length > 0 &&
                <Tooltip title="Copy selected milestones url">
                    <IconButton onClick={handleCopy} size="small">
                        <ContentCopyIcon sx={{width:'15px', height:'15px'}}/>
                    </IconButton>
                </Tooltip>
            }

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
                width: '232px'
            }}>
                {currentView === 'list' ? <MilestoneList onClose={handleClose}  onCreate={handleCreate}/> : <Form onBack={handleBack} />}
            </Stack>
        </Popover>
        </Box>
    )
}