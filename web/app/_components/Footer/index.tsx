import React from 'react';
import { Box, Typography, Grid, Container, Link } from '@mui/material';
import { Email, Twitter, LinkedIn } from '@mui/icons-material';
import { BrandLogo } from '@/components/BrandLogo';
import NextLink from 'next/link';


type linkProps = {
    url: string;
    children: React.ReactNode
}
const LinkItem = ({url, children}:linkProps) => {
    return (
        <Box sx={{ 
            '& a':{
                color: 'text.secondary', 
                '&:hover': { color: 'primary.main' }, 
                textDecoration: 'none' 
            }

        }}>
            <NextLink href={url} >
                <Typography variant='body2'>{children}</Typography>
            </NextLink>
        </Box>
    )
}

const Footer = () => {
    return (
        <Box sx={{ 
            bgcolor: 'background.paper',
            borderTop: `1px solid black`,
            borderTopColor: "divider",
            py: 8,
            color: 'text.primary'
        }}>
            <Container maxWidth="lg">
                <Grid container columnSpacing={2}  rowSpacing={6} sx={{
                    justifyContent: 'center',
                    justifyItems: 'center'
                }}>
                    {/* Brand Logo & Description */}
                    <Grid item xs={12} lg={4} sx={{
                        justifyItems: 'center',
                        '& a': {
                            display: 'block',
                            width: `min(100%, 400px)`,
                            height: '100%'
                        }
                        
                    }}>
                        <NextLink href="/">
                            <BrandLogo />
                        </NextLink>
                    </Grid>

                    {/* About Us */}
                    <Grid item xs={12} md={3} lg={2}>
                        <Typography variant="h3" sx={{ 
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            mb: 2,
                        }}>
                           Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <LinkItem url="/about">
                                About
                            </LinkItem>
                        </Box>
                    </Grid>

                    {/* Privacy Policy */}
                    <Grid item xs={12} md={3} lg={2}>
                        <Typography variant="h3" sx={{ 
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            mb: 2,
                        }}>
                            Policies
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <LinkItem url="/privacy-policy">
                                Privacy Policy
                            </LinkItem>
                            <LinkItem url="/terms-conditions">
                                Terms and conditions
                            </LinkItem>
                        </Box>
                    </Grid>

                    {/* Contact Us */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Typography variant="h3" sx={{ 
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            mb: 2,
                        }}>
                            Contact Us
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Email sx={{ color: 'text.secondary' }} />
                                <LinkItem url="mailto:mdwarish56@gmail.com">
                                    mdwarish56@gmail.com
                                </LinkItem>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Link>
                                    <Twitter fontSize="medium" />
                                </Link>
                                <Link>
                                    <LinkedIn fontSize="medium" />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright Notice */}
                <Typography variant="body2" sx={{ 
                    color: 'text.secondary',
                    mt: 6,
                    pt: 4,
                    borderTop: `1px solid black`,
                    borderTopColor: "divider",
                    textAlign: 'center',
                }}>
                    © {new Date().getFullYear()} GitHub Milestones. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;