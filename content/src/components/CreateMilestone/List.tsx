import { useFiltersAtom } from "@/hooks/useFiltersAtom"
import { Button, Chip, IconButton, MenuItem, Stack, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { createStylesheet } from "@/utils/common";
import { useRef } from "react";

type props = {
    onCreate: () => void;
    onBack: () => void;
    onMilestoneChange: (milestone:string) => void;
    currentMilestone: string;

}


const stylesheetId = 'milestone_stylesheet'

export const MilestoneList = ({onCreate, onBack, onMilestoneChange, currentMilestone}:props) => {
    const {milestones, filters} = useFiltersAtom();
    const stylesheetRef = useRef<HTMLElement|null>();


    const appendStyles = (style:string) => {
        const stylesheet = document.getElementById(stylesheetId) ?? createStylesheet(stylesheetId);
        stylesheet.innerHTML = style;

        stylesheetRef.current = stylesheet;
        if(!document.getElementById(stylesheetId)){
            document.head.appendChild(stylesheet);
        }
    }

    const clearStyles = () => {
        if(stylesheetRef.current){
            stylesheetRef.current.innerHTML = '';
        }
        onMilestoneChange('');
    }

    const handleMileStoneFilter = (selectedMilestone:string) => {
        onMilestoneChange(selectedMilestone);

        const paths = filters[selectedMilestone];
        const selectors:string[] = [];

        Object.keys(paths).filter(path =>filters[selectedMilestone][path]).forEach((path) => {
            selectors.push(`:not([data-file-path="${path}"])`)
        })
        

        const style = `
            [data-file-path]${selectors.join('')}{
                display: none;
            }
        `

        appendStyles(style);
    }

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
                    <IconButton size="small" onClick={onBack} sx={{
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
                    return <MenuItem selected={currentMilestone === milestone} onClick={() => handleMileStoneFilter(milestone)} key={`${milestone}_${idx}`}>{milestone}</MenuItem>
                })}
            </Stack>
            <Button onClick={onCreate} fullWidth size="small" variant="outlined">Create Milestone</Button>
        </Stack>
    )
}