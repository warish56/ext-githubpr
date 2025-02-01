'use client'

import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, keyframes } from '@mui/material';
import { Code as CodeIcon, ArrowForward as ArrowIcon } from '@mui/icons-material';
import { BrandLogo } from '@/components/BrandLogo';

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

const HeroSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ 
            bgcolor: 'background.paper',
            pt: 10,
            pb: 15,
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(160deg, ${theme.palette.background.default} 30%, ${theme.palette.primary.light} 100%)`
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Brand Logo & Content Column */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            animation: `${fadeIn} 1s ease-out`,
                            mb: 4,
                            position: 'relative',
                            zIndex: 1
                        }}>
                        
                            <BrandLogo />

                            <Typography variant="h1" sx={{ 
                                fontWeight: 800,
                                lineHeight: 1.2,
                                mt: 4,
                                fontSize: '2.5rem',
                                [theme.breakpoints.up('md')]: {
                                    fontSize: '3.5rem',
                                }
                            }}>
                                Code Reviews Made 
                                <Box component="span" sx={{ color: 'primary.main' }}> Effortless</Box>
                            </Typography>

                            <Typography variant="h5" sx={{ 
                                color: 'text.secondary',
                                mt: 3,
                                mb: 4,
                                fontWeight: 400,
                                lineHeight: 1.6
                            }}>
                                Transform giant pull requests into manageable milestones.<br/>
                                Save time and improve code quality with smart filtering.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowIcon />}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        borderRadius: '8px',
                                        boxShadow: theme.shadows[4],
                                        '&:hover': {
                                            boxShadow: theme.shadows[8]
                                        }
                                    }}
                                >
                                    Get Started
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        borderWidth: '2px',
                                        borderRadius: '8px'
                                    }}
                                >
                                    View Demo
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Animated Graphic Column */}
                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                        <Box sx={{
                            position: 'relative',
                            height: '500px',
                            animation: `${float} 4s ease-in-out infinite`
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 60%)`,
                                opacity: 0.2
                            }} />

                            {/* Floating Code Branch Illustration */}
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '400px',
                                height: '400px',
                                bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
                                borderRadius: '16px',
                                boxShadow: 6,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                p:4
                            }}>


                                {/* Simplified PR Interface Visualization */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ 
                                        width: '40px',
                                        height: '40px',
                                        bgcolor: 'primary.main',
                                        borderRadius: '6px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <CodeIcon sx={{ color: 'white' }} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        PR #42: New Feature Implementation
                                    </Typography>
                                </Box>
                                
                                {/* Milestone Filters Visualization */}
                                <Box sx={{ 
                                    display: 'flex',
                                    gap: 1,
                                    flexWrap: 'wrap',
                                    px: 2,
                                    py: 1,
                                    bgcolor: 'background.default',
                                    borderRadius: '6px'
                                }}>
                                    {['Auth System', 'API Endpoints', 'UI Components'].map((label) => (
                                        <Box key={label} sx={{
                                            px: 2,
                                            py: 0.5,
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            borderRadius: '4px',
                                            fontSize: '0.9rem'
                                        }}>
                                            <Typography variant='body2'>{label}</Typography>
                                            
                                        </Box>
                                    ))}
                                </Box>

                                {/* File List Visualization */}
                                <Box sx={{ 
                                    flexGrow: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: '8px',
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1
                                }}>
                                    {['Milestone 1', 'Milestone 2', 'Milestone 3'].map((file) => (
                                        <Box key={file} sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            px: 2,
                                            py: 1,
                                            bgcolor: 'background.default',
                                            borderRadius: '4px'
                                        }}>
                                            <Box sx={{
                                                width: '8px',
                                                height: '8px',
                                                bgcolor: 'primary.main',
                                                borderRadius: '50%'
                                            }} />
                                            <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                                {file}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;