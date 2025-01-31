import { Box, IconButton, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { MilestoneList } from "./List";
import { Form } from "./Form";



export const CreateMileStonePopover = () => {
    const [currentMilestone, setCurrentMilestone] = useState('');
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [currentView, setCurrentView] = useState<'list'|'form'>('list');



    const handleMilestoneChange = (milestone: string) => {
        setCurrentMilestone(milestone);
    }

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

    const open = Boolean(anchorEl);

    return (
        <Box>
        <Stack direction="row" sx={{
            gap: '10px',
            alignItems: 'center'
        }}>
            <IconButton onClick={handleClick}>
                <LocalOfferIcon sx={{
                    width: '15px',
                    height: '15px',
                    color:"background.default"
                }}/>
            </IconButton>
            <Typography variant="body2" sx={{color: 'background.default'}}>{currentMilestone}</Typography>
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
                {currentView === 'list' ? <MilestoneList currentMilestone={currentMilestone} onMilestoneChange={handleMilestoneChange} onBack={handleClose}  onCreate={handleCreate}/> : <Form onBack={handleBack} />}
            </Stack>
        </Popover>
        </Box>
    )
}