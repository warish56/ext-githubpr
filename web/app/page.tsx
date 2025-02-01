import React from 'react';
import { Box} from '@mui/material';
import HeroSection from './_components/HeroSection';
import KeyFeaturesSection from './_components/KeyFeatures';
import HowItWorksSection from './_components/HowItWorks';
import WhatUsersAreSayingSection from './_components/Testimonial';

const MarketingPage = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <KeyFeaturesSection />

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* Testimonials Section */}
            <WhatUsersAreSayingSection />

            {/* CTA Section */}
            {/* <Box sx={{ bgcolor: 'background.paper', py: 10, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
                        Ready to Simplify Your Workflow?
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ fontWeight: 600, px: 5, py: 1.5 }}
                        startIcon={<CodeIcon />}
                    >
                        Get Started Now
                    </Button>
                </Container>
            </Box> */}
        </Box>
    );
};

export default MarketingPage;