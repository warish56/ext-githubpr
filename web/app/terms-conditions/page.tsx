import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { termsMetaData } from '@/constants/MetaData/termsPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = termsMetaData;


const TermsAndConditionsPage = () => {
    return (
        <Box sx={{ 
            bgcolor: 'background.default',
            py: 8,
        }}>
            <Container maxWidth="md">
                {/* Page Title */}
                <Typography variant="h1" sx={{ 
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    mb: 4,
                    textAlign: 'center',
                    color: 'primary.main'
                }}>
                    Terms and Conditions
                </Typography>

                {/* Introduction */}
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Welcome to GitHub Milestones. These Terms and Conditions govern your use of our free browser extension. By installing and using GitHub Milestones from the Chrome Web Store, you agree to these terms in their entirety.
                </Typography>

                {/* Definitions */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    1. Definitions
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    <ul>
                        <li>
                            <strong>&quot;Extension&quot;</strong> refers to the GitHub Milestones browser extension available on the Chrome Web Store.
                        </li>
                        <li>
                            <strong>&quot;User&quot;</strong> refers to anyone who installs or uses the Extension.
                        </li>
                        <li>
                            <strong>&quot;GitHub&quot;</strong> refers to the GitHub platform and its services.
                        </li>
                        <li>
                            <strong>&quot;Milestones&quot;</strong> refers to the labels and categorizations created using our Extension.
                        </li>
                        <li>
                            <strong>&quot;Chrome Web Store&quot;</strong> refers to Google&apos;s official distribution platform for Chrome extensions.
                        </li>
                    </ul>
                </Typography>

                {/* License and Distribution */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    2. License and Distribution
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    GitHub Milestones is provided free of charge to users. By installing the Extension, you receive a:
                    <ul>
                        <li>Free, non-exclusive license to use the Extension</li>
                        <li>Right to install and use the Extension through the Chrome Web Store</li>
                        <li>Right to receive updates when available</li>
                    </ul>
                    The Extension must be obtained only through the official Chrome Web Store. Downloads or installations from other sources are not authorized or supported.
                </Typography>

                {/* Acceptable Use */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    3. Acceptable Use
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    When using GitHub Milestones, you agree to:
                    <ul>
                        <li>Use the Extension in compliance with GitHub&apos;s terms of service</li>
                        <li>Comply with Chrome Web Store&apos;s terms of service</li>
                        <li>Not attempt to modify, reverse engineer, or manipulate the Extension</li>
                        <li>Not use the Extension for any illegal or unauthorized purpose</li>
                        <li>Not interfere with the proper working of the Extension</li>
                        <li>Not attempt to circumvent any limitations or restrictions in the Extension</li>
                    </ul>
                </Typography>

                {/* Extension Functionality */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    4. Extension Functionality
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    GitHub Milestones is designed to:
                    <ul>
                        <li>Create and manage milestones for pull requests</li>
                        <li>Filter pull request files based on assigned milestones</li>
                        <li>Generate shareable URLs for filtered views</li>
                    </ul>
                    While the Extension is provided free of charge, we do not guarantee that it will always be available or error-free. We reserve the right to modify or discontinue any features at any time.
                </Typography>

                {/* Intellectual Property */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    5. Intellectual Property
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    The Extension, including its code, design, and functionality, is protected by intellectual property laws. Users are granted a limited, non-exclusive license to use the Extension for its intended purpose. The free nature of the Extension does not constitute a transfer of any intellectual property rights.
                </Typography>

                {/* Updates and Maintenance */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    6. Updates and Maintenance
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Updates to the Extension will be distributed through the Chrome Web Store. We reserve the right to:
                    <ul>
                        <li>Release updates at our discretion</li>
                        <li>Modify or discontinue features without prior notice</li>
                        <li>Require users to update to the latest version for continued functionality</li>
                    </ul>
                </Typography>

                {/* Disclaimer */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    7. Disclaimer
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    GitHub Milestones is provided &quot;as is&quot; without any warranties. As a free service, we do not guarantee that the Extension will meet your specific requirements or be completely error-free. We are not responsible for any issues arising from your use of the Extension.
                </Typography>

                {/* Limitation of Liability */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    8. Limitation of Liability
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Extension.
                </Typography>

                {/* Changes to Terms */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    9. Changes to Terms
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    We reserve the right to modify these terms at any time. We will notify users of any material changes through the Extension or the Chrome Web Store listing. Continued use of the Extension after such modifications constitutes acceptance of the updated terms.
                </Typography>

                {/* Contact Information */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    10. Contact Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    For any questions regarding these terms, please contact us at:
                    <Box sx={{ mt: 1 }}>
                        <Link href="mailto:mdwarish56@gmail.com" sx={{ color: 'primary.main' }}>
                            mdwarish56@gmail.com
                        </Link>
                    </Box>
                </Typography>
            </Container>
        </Box>
    );
};

export default TermsAndConditionsPage;