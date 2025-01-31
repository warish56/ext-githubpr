import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { Button, Chip, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from "react";
import { ListActions } from "./ListActions";
import { useClipboard } from "@/hooks/useClipboard";
import { useGlobalAtom } from "@/hooks/useGlobalAtom";
import { appendStyleSheet, createStyles, getOrCreateStylesheet, getStylesheet } from "@/utils/styles";

type props = {
    onCreate: () => void;
    onClose: () => void;
}



export const MilestoneList = ({onCreate, onClose}:props) => {
    const {milestones, filters,removeMilestone, generateFiltersUrl } = useFiltersAtom();
    const {globalData, setCurrentMileStones, clearSelectedMilestones} = useGlobalAtom();
    const {copyToClipboard} = useClipboard();
    const stylesheetRef = useRef<HTMLElement|null>(getStylesheet());


    const setCssStyles = (milestones:string[]) => {
        const style = createStyles(filters, milestones);
        const styleSheet = getOrCreateStylesheet(style);
        stylesheetRef.current = styleSheet;
        if(!getStylesheet()){
            appendStyleSheet(styleSheet);
        }
    }

    const clearStyles = () => {
        if(stylesheetRef.current){
            stylesheetRef.current.innerHTML = '';
        }
        clearSelectedMilestones();
    }

    const handleMileStoneFilter = (selectedMilestone:string) => {
        setCurrentMileStones([selectedMilestone]);
        setCssStyles([selectedMilestone])
        onClose();
    }

    const handleCopy = () => {
        const url = generateFiltersUrl(globalData.selectedMilestones);
        copyToClipboard(url);
    }


    const isViewMode = globalData.isViewMode;

    return (
        <Stack sx={{
            gap: '10px',
            padding: '10px'
        }}>
            <Stack direction="row" sx={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant="body1">Milestones</Typography>


                <Stack direction="row" sx={{
                    alignItems: 'center',
                    marginLeft: 'auto',
                    gap: '10px'
                }}>
                    <Chip onClick={clearStyles} variant="outlined" size="small" label="Clear"/>
                    <IconButton size="small" onClick={onClose} sx={{
                        alignSelf: 'flex-start'
                    }}>
                        <ClearIcon />
                    </IconButton>
                </Stack>
            </Stack>

            <Stack 
            sx={{gap: '5px', height: '175px', overflow: 'auto'}}
            >
                {milestones.length === 0 && <Typography>Empty Milestones!!</Typography>}
                {milestones.map((milestone, idx) => {
                    return (
                    <MenuItem  
                    selected={globalData.selectedMilestones.includes(milestone)} 
                    onClick={() => handleMileStoneFilter(milestone)} 
                    key={`${milestone}_${idx}`}>
                        <Stack direction="row" sx={{
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            width: '100%'
                        }}>
                            <Typography variant="body2" sx={{textTransform: 'capitalize'}}>{milestone}</Typography>
                            {!isViewMode &&
                                <ListActions 
                                onDelete={() => removeMilestone(milestone)}
                                onCopy={handleCopy}
                                />
                            }
                        </Stack>
                    </MenuItem>
                )
                })}
            </Stack>
            {!isViewMode &&<Button onClick={onCreate} fullWidth size="small" variant="outlined">Create Milestone</Button>}
        </Stack>
    )
}