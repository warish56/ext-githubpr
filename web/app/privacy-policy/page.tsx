import React from 'react';
import { Box, Typography, Container, Link, } from '@mui/material';
import { privacyPolicyMetaData } from '@/constants/MetaData/privacyPolicy';
import { Metadata } from 'next';


export const metadata: Metadata = privacyPolicyMetaData;


const PrivacyPolicyPage = () => {

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
                    Privacy Policy
                </Typography>

                {/* Introduction */}
                <Typography variant="body1" sx={{
                     mb: 4 , 
                     color: 'text.secondary'
                    }}>
                    At <strong>GitHub Milestones</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our browser extension. By using GitHub Milestones, you agree to the terms outlined in this policy.
                </Typography>

                {/* Information We Do Not Collect */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    1. Information We Do Not Collect
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    GitHub Milestones is designed with your privacy in mind. Here’s what we <strong>do not</strong> collect:
                    <ul>
                        <li>
                            <strong>No GitHub Account Data:</strong> We do not access your GitHub account, request OAuth permissions, or interact with GitHub’s API.
                        </li>
                        <li>
                            <strong>No Personal Data:</strong> We do not collect or store any personal information, such as your name, email, or GitHub credentials.
                        </li>
                        <li>
                            <strong>No Sensitive Data:</strong> We do not access or store sensitive information, such as private repositories or confidential code.
                        </li>
                    </ul>
                </Typography>

                {/* Information We Access */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    2. Information We Access
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    GitHub Milestones interacts only with the data visible on the screen (DOM elements) of the GitHub pull request page. Here’s what we access:
                    <ul>
                        <li>
                            <strong>Pull Request Data:</strong> We read the titles, files, and labels of pull requests to enable milestone-based filtering.
                        </li>
                        <li>
                            <strong>Public Repository Data:</strong> We interact only with data from public repositories that is already visible to you on the GitHub interface.
                        </li>
                    </ul>
                    <strong>Important:</strong> All data access is limited to the current browser session. We do not store, transmit, or share any of this data.
                </Typography>

                {/* How We Use the Accessed Data */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    3. How We Use the Accessed Data
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    The data we access is used solely to provide the functionality of GitHub Milestones:
                    <ul>
                        <li>To create and manage milestones for pull requests.</li>
                        <li>To filter and display files based on selected milestones.</li>
                        <li>To generate shareable URLs for filtered views.</li>
                    </ul>
                    <strong>Note:</strong> All processing happens locally in your browser. No data leaves your device.
                </Typography>

                {/* Data Security */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    4. Data Security
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Since GitHub Milestones does not collect, store, or transmit any data, there is no risk of data breaches or unauthorized access. All data interactions are confined to your browser session and are discarded when you close the tab or refresh the page.
                </Typography>

                {/* Your Rights */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    5. Your Rights
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Since we do not collect or store any data, there is no need for data access, correction, or deletion requests. You can control your experience with GitHub Milestones by:
                    <ul>
                        <li>Enabling or disabling the extension in your browser.</li>
                        <li>Refreshing the page to clear any temporary data processed by the extension.</li>
                    </ul>
                </Typography>

                {/* Changes to This Policy */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    6. Changes to This Policy
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through the extension or via email. Your continued use of GitHub Milestones after any changes constitutes your acceptance of the updated policy.
                </Typography>

                {/* Contact Us */}
                <Typography variant="h2" sx={{ 
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary'
                }}>
                    7. Contact Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;