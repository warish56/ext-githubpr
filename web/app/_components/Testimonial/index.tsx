'use client'

import React from 'react';
import { Box, Typography, Grid, Container, Avatar, keyframes, useTheme } from '@mui/material';
import {
    Star as StarIcon,
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

const testimonials = [
    {
        name: 'John Doe',
        role: 'Senior Developer',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 5,
        comment: 'GitHub Milestones has revolutionized how we handle large pull requests. Highly recommended!',
    },
    {
        name: 'Jane Smith',
        role: 'Engineering Manager',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 5,
        comment: 'The filtering and sharing features are incredibly intuitive and save us so much time.',
    },
    {
        name: 'Alex Johnson',
        role: 'Open Source Contributor',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        rating: 5,
        comment: 'Every developer should use GitHub Milestones to streamline their workflow.',
    },
];

const WhatUsersAreSayingSection = () => {
    const theme = useTheme();

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
                    fontSize: '2.5rem',
                    [theme.breakpoints.up('md')]: {
                        fontSize: '3rem',
                    }
                }}>
                    What Users Are Saying
                </Typography>

                {/* Testimonials Grid */}
                <Grid container rowSpacing={12} columnSpacing={2}>
                    {testimonials.map((testimonial, index) => (
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
                                {/* User Avatar */}
                                <Avatar
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    sx={{ 
                                        width: 80,
                                        height: 80,
                                        mx: 'auto',
                                        mb: 3,
                                        animation: `${float} 4s ease-in-out infinite`,
                                    }}
                                />

                                {/* User Name and Role */}
                                <Typography variant="h3" sx={{ 
                                    fontWeight: 600,
                                    mb: 1,
                                    fontSize: '1.5rem',
                                }}>
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                    mb: 3,
                                }}>
                                    {testimonial.role}
                                </Typography>

                                {/* Rating */}
                                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} sx={{ color: 'primary.main', fontSize: 24 }} />
                                    ))}
                                </Box>

                                {/* Testimonial Comment */}
                                <Typography variant="body1" sx={{ 
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}>
                                    {testimonial.comment}
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

export default WhatUsersAreSayingSection;