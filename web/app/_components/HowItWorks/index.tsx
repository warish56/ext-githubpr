'use client'

import React from 'react';
import { Box, Typography, Container, keyframes, useTheme, Stack } from '@mui/material';
import {
    FilterList as FilterIcon,
    Share as ShareIcon,
    Visibility as VisibilityIcon,
} from '@mui/icons-material';


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HowItWorksSection = () => {
    const theme = useTheme();

    const steps = [
        {
            icon: <FilterIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: 'Create Milestones',
            description: 'Define milestones for your pull request, such as "Feature A" or "Bug Fixes."',
        },
        {
            icon: <VisibilityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: 'Assign Milestones to Files',
            description: 'Tag each file in the pull request with the appropriate milestone.',
        },
        {
            icon: <ShareIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: 'Filter and Share',
            description: 'Filter files by milestones and share the filtered view with reviewers.',
        },
    ];

    return (
        <Box sx={{ 
            bgcolor: 'background.default',
            py: 10,
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Container maxWidth="lg">
                {/* Section Title */}
                <Typography variant="h2" sx={{ 
                    textAlign: 'center',
                    mb: 6,
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    [theme.breakpoints.up('md')]: {
                        fontSize: '3rem',
                    }
                }}>
                    How It Works
                </Typography>

                {/* Timeline Layout */}
                <Box sx={{ 
                    position: 'relative',
                    maxWidth: '800px',
                    mx: 'auto',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '100%',
                        bgcolor: 'primary.main',
                        [theme.breakpoints.down('sm')]: {
                            left: '20px',
                        },
                    },
                }}>
                    {steps.map((step, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 6,
                                position: 'relative',
                                animation: `${fadeIn} 0.5s ease-out ${index * 0.2}s`,
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'column',
                                    textAlign: 'center',
                                },
                            }}
                        >
                            

                            {/* Step Content */}
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: '16px',
                                    p: 4,
                                    boxShadow: theme.shadows[4],
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: theme.shadows[8],
                                    },
                                    [theme.breakpoints.up('md')]: {
                                        width: '45%',
                                        ml: index % 2 === 0 ? '0' : 'auto',
                                        mr: index % 2 === 0 ? 'auto' : '0',
                                        textAlign: index % 2 === 0 ? 'right' : 'left',
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        width: '100%',
                                        textAlign: 'center',
                                    },
                                }}
                            >
                                <Stack direction="row" sx={{
                                    alignItems: 'flex-start',
                                    gap: '10px',
                                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                                }}>
                                    <Typography variant="h3" sx={{ 
                                        fontWeight: 600,
                                        mb: 2,
                                        fontSize: '1.5rem',
                                        order: index % 2 === 0 ? 0 : 1
                                    }}>
                                        {step.title}
                                    </Typography>
                                    <Box sx={{
                                        order: index % 2 === 0 ? 1 : 0,
                                        '& svg': {
                                            width : '40px',
                                            height: '40px',
                                            transform: `translateY(-5px)`
                                        }
                                    }}>
                                        {step.icon}
                                    </Box>
                                </Stack>
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}>
                                    {step.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>

            {/* Background Gradient */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.light} 0%, transparent 60%)`,
                opacity: 0.1,
                zIndex: -1,
            }} />
        </Box>
    );
};

export default HowItWorksSection;