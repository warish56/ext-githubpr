import { Metadata } from "next";

export const aboutUsMetaData: Metadata = {
    title: 'About GitHubMilestones',
    description: 'Learn about GitHubMilestones, your browser extension for organizing and reviewing large pull requests. Simplify code reviews with milestone-based filtering and collaboration.',
    
    openGraph: {
      title: 'About GitHub Milestones - Simplify Pull Request Reviews',
      description: 'Discover the team behind GitHub Milestones and our mission to make code reviews faster and more efficient. Built with ❤️ for developers.',
      url: 'https://githubmilestones.com/about',
      siteName: 'GitHubMilestones',
      type: 'website',
      images: [
        {
          url: 'https://githubmilestones.com/og-image-about.jpg', // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: 'GitHubMilestones - About Us',
        },
      ],
    },
  
    keywords: [
      'GitHub Milestones team',
      'pull request review tool',
      'browser extension for GitHub',
      'code review tools',
      'about GitHub Milestones',
      'milestone-based filtering',
      'developer tools',
      'GitHub productivity tools',
      'open source collaboration',
    ],
};