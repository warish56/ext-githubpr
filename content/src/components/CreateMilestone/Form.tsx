import { Button, IconButton, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFiltersAtom } from "@/hooks/useFiltersAtom";

type props = {
    onBack : () => void
}
export const Form = ({onBack}:props) => {
    const {createMilestone} = useFiltersAtom();
    const [value ,setValue] = useState('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value.trim()){
            return;
        }
        createMilestone(value);
        onBack();
    }
    return(
        <Stack component="form" onSubmit={handleSubmit} sx={{
            gap: '10px',
            padding: '10px',
        }}>
            <Stack direction="row" sx={{
                alignItems: 'center',
                gap: '10px'
            }}>
                <IconButton size="small" onClick={onBack} sx={{
                    alignSelf: 'flex-start'
                }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="body1">Create Milestone</Typography>
            </Stack>
            <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Enter milestone name" 
                variant="outlined"
                required
             />
            <Button type="submit" variant="contained">Create</Button>
        </Stack>
    )
}