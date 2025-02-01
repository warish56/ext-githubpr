'use client'

import React from 'react';
import { Box, Typography, Container, Grid, Avatar, keyframes, useTheme } from '@mui/material';
import {
    Code as CodeIcon,
    Security as SecurityIcon,
    Group as GroupIcon,
    ThumbUp as ThumbUpIcon,
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



const AboutUsPage = () => {
    const theme = useTheme();

    return (
        <Box sx={{ 
            bgcolor: 'background.default',
            py: 8,
        }}>
            <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" sx={{ 
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    mb: 4,
                    textAlign: 'center',
                    animation: `${fadeIn} 1s ease-out`,
                    color: 'primary.main'
                }}>
                    About Us
                </Typography>

                {/* Introduction */}
                <Typography variant="body1" sx={{ 
                    mb: 6,
                    textAlign: 'center',
                    maxWidth: '800px',
                    mx: 'auto',
                    animation: `${fadeIn} 1s ease-out 0.2s`,
                    color: 'text.secondary'
                }}>
                    Welcome to <strong>GitHub Milestones</strong>, a browser extension designed to simplify the process of reviewing large pull requests on GitHub. Our mission is to make code reviews faster, more efficient, and less overwhelming for developers and teams.
                </Typography>

                {/* Our Story Section */}
                <Box sx={{ 
                    bgcolor: 'background.paper',
                    borderRadius: '16px',
                    p: 6,
                    mb: 8,
                    boxShadow: theme.shadows[4],
                    animation: `${fadeIn} 1s ease-out 0.4s`,
                }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" sx={{ 
                                fontSize: '1.75rem',
                                fontWeight: 600,
                                mb: 2,
                                color: 'text.primary'
                            }}>
                                Our Story
                            </Typography>
                            <Typography variant="body1" sx={{ 
                                color: 'text.secondary',
                                mb: 4,
                            }}>
                                GitHub Milestones was born out of a simple yet powerful idea: <strong>large pull requests don’t have to be a headache.</strong> As developers ourselves, we’ve experienced the frustration of reviewing hundreds of files in a single pull request. Breaking it down into smaller PRs isn’t always an option, so we created GitHub Milestones to help.
                            </Typography>
                            <Typography variant="body1" sx={{ 
                                color: 'text.secondary',
                            }}>
                                Our extension allows you to organize pull requests into milestones, filter files by those milestones, and share focused views with reviewers. It’s a lightweight, privacy-focused tool that works seamlessly within your browser—no data collection, no OAuth, no hassle.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    bgcolor: 'background.default',
                                    borderRadius: '16px',
                                    p: 4,
                                    textAlign: 'center',
                                    animation: `${float} 6s ease-in-out infinite`,
                                }}
                            >
                                <CodeIcon sx={{ fontSize: 100, color: 'primary.main' }} />
                                <Typography variant="h4" sx={{ 
                                    fontWeight: 600,
                                    mt: 2,
                                    color: 'text.primary'
                                }}>
                                    Built for Developers
                                </Typography>
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                }}>
                                    By developers, for developers.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Our Values Section */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 4,
                    textAlign: 'center',
                    animation: `${fadeIn} 1s ease-out 0.6s`,
                    color: 'text.primary'
                }}>
                    Our Values
                </Typography>
                <Grid container spacing={6} sx={{ mb: 12 }}>
                    {[
                        {
                            icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
                            title: 'Privacy First',
                            description: 'We don’t collect, store, or transmit any data. Everything happens locally in your browser.',
                        },
                        {
                            icon: <ThumbUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
                            title: 'User-Centric Design',
                            description: 'We prioritize simplicity and ease of use, so you can focus on what matters—writing great code.',
                        },
                        {
                            icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
                            title: 'Community-Driven',
                            description: 'We listen to feedback from developers like you to continuously improve the extension.',
                        },
                    ].map((value, index) => (
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
                                    animation: `${fadeIn} 1s ease-out ${index * 0.2 + 0.6}s`,
                                }}
                            >
                                <Box sx={{ mb: 3 }}>
                                    {value.icon}
                                </Box>
                                <Typography variant="h3" sx={{ 
                                    fontWeight: 600,
                                    mb: 2,
                                    fontSize: '1.5rem',
                                    color: 'text.primary'
                                }}>
                                    {value.title}
                                </Typography>
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}>
                                    {value.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Meet the Team Section */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 4,
                    textAlign: 'center',
                    animation: `${fadeIn} 1s ease-out 0.8s`,
                    color: 'text.primary'
                }}>
                    Meet the Team
                </Typography>
                <Grid container spacing={6} sx={{ mb: 8 }}>
                    {[
                        {
                            name: 'Md Warish Ali Ansari',
                            role: 'Founder & Developer',
                            avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHkhvzL1T8wsw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676726889150?e=1743638400&v=beta&t=fSMmKOSIwVsW3vOgYYB6EQhSvhK0-PSI7_kPq2C4dEY',
                        },                        
                    ].map((member, index) => (
                        <Grid item xs={12}  key={index}>
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
                                    animation: `${fadeIn} 1s ease-out ${index * 0.2 + 0.8}s`,
                                }}
                            >
                                <Avatar
                                    src={member.avatar}
                                    alt={member.name}
                                    sx={{ 
                                        width: 100,
                                        height: 100,
                                        mx: 'auto',
                                        mb: 3,
                                    }}
                                />
                                <Typography variant="h3" sx={{ 
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: '1.5rem',
                                    color: 'text.primary'
                                }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                }}>
                                    {member.role}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
};

export default AboutUsPage;