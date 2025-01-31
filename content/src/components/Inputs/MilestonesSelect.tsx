import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { MenuItem } from "@mui/material"

type props = {
    filePath: string;
    onClose: () => void;
}

export const MilestonesSelect = ({
    filePath,
    onClose
}:props) => {
    const {filters, addFileToMilestone} = useFiltersAtom();
    const milestones = Object.keys(filters);

    const handleSelect = (milestone: string) => {
        addFileToMilestone(milestone, filePath);
        onClose();
    };
    return milestones.map((milestone, idx) => {
        return <MenuItem onClick={() => handleSelect(milestone)} key={`${milestone}_${idx}`} value={milestone}>{milestone}</MenuItem>
    })
        
}

        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}