import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { Button, Chip, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from "react";
import { ListActions } from "./ListActions";
import { useClipboard } from "@/hooks/useClipboard";
import { useGlobalAtom } from "@/hooks/useGlobalAtom";
import { appendStyleSheet, createStyles, getOrCreateStylesheet, getStylesheet } from "@/utils/styles";
import { FiltersData } from "@/types/common";

type props = {
    onCreate: () => void;
    onClose: () => void;
}



export const MilestoneList = ({onCreate, onClose}:props) => {
    const {milestones, filters,removeMilestone, generateFiltersUrl } = useFiltersAtom();
    const {globalData, setCurrentMileStones, clearSelectedMilestones, removeCurrentMileStones} = useGlobalAtom();
    const {copyToClipboard} = useClipboard();
    const stylesheetRef = useRef<HTMLElement|null>(getStylesheet());


    const setCssStyles = (filters: FiltersData, milestones:string[]) => {
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
        onClose();
    }

    const handleMileStoneFilter = (selectedMilestone:string) => {
        if(globalData.selectedMilestones.includes(selectedMilestone)){
            removeCurrentMileStones([selectedMilestone]);
            setTimeout(clearStyles, 100)
        }else{
            setCurrentMileStones([selectedMilestone]);
            setTimeout(() => {
                setCssStyles(filters,[selectedMilestone])
            }, 100)

        }
        onClose();
    }

    const handleCopy = (milestone:string) => {
        const url = generateFiltersUrl([milestone]);
        copyToClipboard(url);
    }

    const handleClearStyles = () => {
        onClose();
        setTimeout(clearStyles, 100)
    }


    const onDataUpdate = (filters:FiltersData, milestone:string) => {
        if(globalData.selectedMilestones.length === 0){
            return;
        }
        setTimeout(() => {
            setCssStyles(filters, [milestone]);
        }, 100)
    }


    const handleDelete = (milestone:string) => {
        removeMilestone(milestone, (d) => onDataUpdate(d, milestone))
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
                    {(globalData.selectedMilestones.length > 0) && <Chip onClick={handleClearStyles} variant="outlined" size="small" label="Clear"/>}
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
                            <Typography variant="body2" sx={{textTransform: 'capitalize'}}>{`${milestone} (${Object.values(filters[milestone] ?? {}).length})`}</Typography>
                            {!isViewMode &&
                                <ListActions 
                                onDelete={() => handleDelete(milestone)}
                                onCopy={() => handleCopy(milestone)}
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