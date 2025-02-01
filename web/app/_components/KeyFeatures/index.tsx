'use client'

import React from 'react';
import { Box, Typography, Grid, Container, keyframes, useTheme } from '@mui/material';
import {
    FilterList as FilterIcon,
    Share as ShareIcon,
    Visibility as VisibilityIcon,
    Code as CodeIcon,
    Timeline as TimelineIcon,
    GroupWork as GroupWorkIcon,
} from '@mui/icons-material';

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const KeyFeaturesSection = () => {
    const theme = useTheme();

    const features = [
        {
            icon: <FilterIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Milestone Creation',
            description: 'Create custom milestones to organize your pull request files. Assign milestones to files for better categorization.',
        },
        {
            icon: <VisibilityIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Filter by Milestones',
            description: 'Easily filter files based on milestones. Focus only on the files that matter for a specific review.',
        },
        {
            icon: <ShareIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Share Filtered Views',
            description: 'Share a filtered URL with reviewers to streamline the review process.',
        },
        {
            icon: <TimelineIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Track Progress',
            description: 'Monitor the progress of each milestone and ensure timely completion of tasks.',
        },
        {
            icon: <GroupWorkIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Collaborate Efficiently',
            description: 'Enable seamless collaboration by assigning milestones to specific team members.',
        },
        {
            icon: <CodeIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Developer-Friendly',
            description: 'Designed for developers, with intuitive controls and seamless GitHub integration.',
        },
    ];

    return (
        <Box sx={{ 
            bgcolor: 'background.default',
            py: 20,
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Container maxWidth="lg">
                {/* Section Title */}
                <Typography variant="h2" sx={{ 
                    textAlign: 'center',
                    mb: 6,
                    fontWeight: 700,
                    fontSize: {
                        md: '3rem',
                        xs:'2.5rem'
                    },
                }}>
                    Key Features
                </Typography>

                {/* Features Grid */}
                <Grid container spacing={12} sx={{}}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: '16px',
                                    p: 4,
                                    textAlign: 'center',
                                    height: '100%',
                                    boxShadow: theme.shadows[4],
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: theme.shadows[8],
                                    },
                                    animation: `${fadeIn} 0.5s ease-out ${index * 0.2}s`,
                                }}
                            >
                                {/* Icon with Floating Animation */}
                                <Box sx={{ 
                                    mb: 3,
                                    animation: `${float} 4s ease-in-out infinite`,
                                }}>
                                    {feature.icon}
                                </Box>

                                {/* Feature Title */}
                                <Typography variant="h3" sx={{ 
                                    fontWeight: 600,
                                    mb: 2,
                                    fontSize: '1.5rem',
                                }}>
                                    {feature.title}
                                </Typography>

                                {/* Feature Description */}
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
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

export default KeyFeaturesSection;