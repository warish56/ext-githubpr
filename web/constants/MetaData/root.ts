import type { Metadata } from 'next';

export const RootMetaData: Metadata = {
  // Basic Metadata
  title: 'GitHubMilestones - Simplify Pull Request Reviews',
  description: 'Organize and review GitHub pull requests efficiently with milestone-based filtering. Streamline code reviews and collaborate better with GitHub Milestones.',

  // Open Graph
  openGraph: {
    title: 'GitHubMilestones - Simplify Pull Request Reviews',
    description: 'Organize and review GitHub pull requests efficiently with milestone-based filtering. Streamline code reviews and collaborate better with GitHub Milestones.',
    url: 'https://githubmilestones.com', // Replace with your actual domain
    siteName: 'GitHubMilestones',
    images: [
      {
        url: '/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'GitHubMilestones - Simplify Pull Request Reviews',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'GitHubMilestones - Simplify Pull Request Reviews',
    description: 'Organize and review GitHub pull requests efficiently with milestone-based filtering. Streamline code reviews and collaborate better with GitHubMilestones.',
    images: ['/twitter-image.png'], // Replace with your actual Twitter card image URL
    creator: '@githubmilestones', // Replace with your Twitter handle if you have one
  },

  // Additional Metadata
  keywords: [
    'GitHubMilestones',
    'pull request review tool',
    'GitHub browser extension',
    'code review tools',
    'milestone-based filtering',
    'developer tools',
    'GitHub productivity tools',
    'open source collaboration',
    'GitHub pull request organizer',
    'code review efficiency',
    'GitHub workflow tools',
    'browser extension for GitHub',
    'developer productivity',
    'GitHub code review',
    'streamline pull requests',
  ],

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional tags
  alternates: {
    canonical: 'https://githubmilestones.com', // Replace with your actual domain
  },

  category: 'technology',

  // App specific metadata
  applicationName: 'GitHubMilestones',
  generator: 'GitHubMilestones',

  authors: [
    { name: 'GitHubMilestones Team' },
  ],
};