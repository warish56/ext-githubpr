import { Metadata } from "next";

export const termsMetaData: Metadata = {
    title: 'Terms of Service - GitHubMilestones | Usage Guidelines',
    description: 'Terms of use for the GitHubMilestones browser extension. Understand usage guidelines, data handling, and user responsibilities for this privacy-focused tool.',
    
    openGraph: {
      title: 'Terms of Service | GitHubMilestones Browser Extension',
      description: 'Official terms and conditions for GitHubMilestones. Guidelines on usage, local data processing, and user responsibilities.',
      url: 'https://githubmilestones.com/terms', // Replace with your actual domain
      siteName: 'GitHubMilestones',
      type: 'website',
      images: [
        {
          url: '/og-image-terms.jpg', // Add your terms page OG image
          width: 1200,
          height: 630,
          alt: 'GitHubMilestones - Terms of Service',
        },
      ],
    },
  
    keywords: [
      'GitHubMilestones terms',
      'browser extension guidelines',
      'privacy-focused terms',
      'GitHub data handling',
      'local processing extension',
      'code review tool rules',
      'developer tool terms',
      'open source collaboration guidelines',
      'milestone filtering terms',
      'pull request review policies'
    ],
};