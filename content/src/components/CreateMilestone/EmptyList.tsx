import {Box,  Stack, Typography } from "@mui/material"
import OpenBoxImage from "@/assets/open_box.svg?react";



export const EmptyList = () => {
    return (
        <Stack sx={{
            gap: '10px',
            alignItems: 'center',
            paddingTop: '15px'

        }}>
            <Box sx={{
                '& svg': {
                    width: '100px',
                    height: '100px',
                    fill: 'currentColor'
                }
            }}>
            <OpenBoxImage />
            </Box>
            <Typography variant="body1">Empty Milestones!!</Typography>
        </Stack>
    )
}