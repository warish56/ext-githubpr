import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { useGlobalAtom } from "@/hooks/useGlobalAtom";
import { FiltersData } from "@/types/common";
import { appendStyleSheet, createStyles } from "@/utils/styles";
import { getStylesheet } from "@/utils/styles";
import { getOrCreateStylesheet } from "@/utils/styles";
import { MenuItem, Typography } from "@mui/material"

type props = {
    filePath: string;
    currentMilestone:string;
    onClose: () => void;
}

export const MilestonesSelect = ({
    filePath,
    currentMilestone,
    onClose
}:props) => {
    const {filters, addFileToMilestone, removeFileFromMilestone} = useFiltersAtom();
    const {globalData} = useGlobalAtom();
    const milestones = Object.keys(filters);


    const setCssStyles = (filters: FiltersData, milestones:string[]) => {
        const style = createStyles(filters, milestones);
        const styleSheet = getOrCreateStylesheet(style);
        if(!getStylesheet()){
            appendStyleSheet(styleSheet);
        }
    }

    const isPathAlreadyPresentInMilestone = (milestone: string, filePath: string) => {
        return !!filters[milestone]?.[filePath]
    }

    const onDataUpdate = (filters:FiltersData, milestone:string) => {
        if(globalData.selectedMilestones.length === 0){
            return;
        }
        setTimeout(() => {
            setCssStyles(filters, [milestone]);
        }, 100)
    }

    const handleSelect = (milestone: string) => {
        if(isPathAlreadyPresentInMilestone(milestone, filePath)){
            removeFileFromMilestone(milestone, filePath, (d) => onDataUpdate(d, milestone));
        }else{
            addFileToMilestone(milestone, filePath, (d) => onDataUpdate(d, milestone));
        }
        onClose();
    };

    return milestones.map((milestone, idx) => {
        return (
        <MenuItem 
        onClick={() => handleSelect(milestone)} 
        key={`${milestone}_${idx}`}
        value={milestone}
        selected={milestone === currentMilestone}
        >
         <Typography variant="body2" sx={{textTransform: 'capitalize'}}>{milestone}</Typography>
        </MenuItem>)
    })
        
}

        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}