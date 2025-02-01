import { Metadata } from "next";

export const privacyPolicyMetaData: Metadata = {
    title: 'Privacy Policy - GitHubMilestones | Data Protection & Security',
    description: 'Our commitment to your privacy. GitHubMilestones does not collect, store, or transmit any data. Learn how we ensure your GitHub workflow remains private and secure.',
    
    openGraph: {
      title: 'Privacy Policy | GitHubMilestones Browser Extension',
      description: 'GitHubMilestones processes data locally in your browser—no data collection, storage, or transmission. Read our transparent privacy guidelines.',
      url: 'https://githubmilestones.com/privacy-policy', // Replace with your actual domain
      siteName: 'GitHubMilestones',
      type: 'website',
      images: [
        {
          url: '/og-image-privacy.jpg', // Add your privacy policy OG image
          width: 1200,
          height: 630,
          alt: 'GitHubMilestones - Privacy Policy',
        },
      ],
    },
  
    keywords: [
      'GitHubMilestones privacy',
      'no data collection extension',
      'local data processing',
      'GitHub workflow privacy',
      'browser extension security',
      'pull request tool privacy',
      'code review data protection',
      'open source privacy',
      'no API data handling',
      'GitHub extension security'
    ],
};