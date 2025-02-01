import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { Button, Chip, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from "react";
import { ListActions } from "./ListActions";
import { useGlobalAtom } from "@/hooks/useGlobalAtom";
import { appendStyleSheet, createStyles, getOrCreateStylesheet, getStylesheet } from "@/utils/styles";
import { FiltersData, GlobalData } from "@/types/common";
import { EmptyList } from "./EmptyList";

type props = {
    onCreate: () => void;
    onClose: () => void;
}



export const MilestoneList = ({onCreate, onClose}:props) => {
    const {milestones, filters, removeMilestone } = useFiltersAtom();
    const {globalData, addToCurrentMileStone, clearSelectedMilestones, removeCurrentSelectedMileStones} = useGlobalAtom();
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

    const handleMileStoneSelection = (selectedMilestone:string) => {
        let newGlobalData:GlobalData|undefined;

        if(globalData.selectedMilestones.includes(selectedMilestone)){
            /**
             * If clicked on the same milestone then remove it from the filters
             */
            newGlobalData = removeCurrentSelectedMileStones([selectedMilestone]);
            
        }else{
            newGlobalData = addToCurrentMileStone(selectedMilestone);
        }

        onDataUpdate(filters, newGlobalData?.selectedMilestones);
        onClose();
    }

    const handleClearStyles = () => {
        onClose();
        setTimeout(clearStyles, 100)
    }


    const onDataUpdate = (filters:FiltersData, milestones?:string[]) => {
        setTimeout(() => {
            /**
             * If every milestone is deleted or the selectedmilestones become empty then clear any applied styles
             */
            const latestMilestones =  milestones ?? globalData.selectedMilestones
            if(Object.keys(filters).length === 0 || latestMilestones.length === 0){
                clearStyles();
            }else{
                setCssStyles(filters, latestMilestones);
            }
        }, 100)
    }


    const handleDelete = (milestone:string) => {
        // removing from filters mapping
        const latestFilters = removeMilestone(milestone);
        // removing from selected milestones
        const latestGlobalData = removeCurrentSelectedMileStones([milestone]);
        onDataUpdate(latestFilters ?? {}, latestGlobalData?.selectedMilestones);
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
                {milestones.length === 0 && <EmptyList/>}
                {milestones.map((milestone, idx) => {
                    const totalSelectedFiles = Object.values(filters[milestone] ?? {}).filter(Boolean).length;
                    return (
                    <MenuItem  
                    selected={globalData.selectedMilestones.includes(milestone)} 
                    onClick={() => handleMileStoneSelection(milestone)} 
                    key={`${milestone}_${idx}`}>
                        <Stack direction="row" sx={{
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            width: '100%'
                        }}>
                            <Typography variant="body2" sx={{textTransform: 'capitalize'}}>{`${milestone} ${totalSelectedFiles > 0 ? `(${totalSelectedFiles})` : ''}`}</Typography>
                            {!isViewMode &&
                                <ListActions 
                                onDelete={() => handleDelete(milestone)}
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