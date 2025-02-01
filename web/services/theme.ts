import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        dark: string;
    }

    interface TypeText {
        dark: string;
        link: string;
        default: string;
    }

    interface ZIndex {
        popper: number;
    }

    interface Palette {
        gray: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
        };
    }

    interface PaletteOptions {
        gray: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
        }
    }

    interface ZIndexOptions {
        popper: number;
    }
}

// Common palette values
const commonPalette = {
    zIndex: {
        popper: 100000,
    },
    shape: {
        borderRadius: 6,
    },
};

// Light theme palette
const lightPalette = {
    mode: 'light',
    primary: {
        main: '#2DA44E', // GitHub's green
        light: '#46954A',
        dark: '#1F883D',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#0969DA', // GitHub's blue
        light: '#218BFF',
        dark: '#0550AE',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#FFFFFF',
        paper: '#F6F8FA', // GitHub's subtle gray background
        dark: '#1C2128'
    },
    text: {
        primary: '#1F2328', // GitHub's primary text
        secondary: '#656D76', // GitHub's secondary text
        dark: '#E6EDF3',
        default: '#1F2328',
        link: "#0969DA",
    },
    action: {
        hover: '#F3F4F6',
        selected: '#E9EEF2',
        disabled: '#8C959F',
    },
    divider: '#D0D7DE',
    gray: {
        100: '#F6F8FA',
        200: '#E9EEF2',
        300: '#D0D7DE',
        400: '#8C959F',
        500: '#656D76',
        600: '#424A53',
        700: '#1F2328'
    }
};

// Dark theme palette
const darkPalette = {
    mode: 'dark',
    primary: {
        main: '#3FB950', // GitHub's dark mode green
        light: '#46954A',
        dark: '#238636',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#58A6FF', // GitHub's dark mode blue
        light: '#79C0FF',
        dark: '#1F6FEB',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#0D1117', // GitHub's dark mode background
        paper: '#161B22', // GitHub's dark mode elevated background
        dark: '#010409'
    },
    text: {
        primary: '#E6EDF3', // GitHub's dark mode primary text
        secondary: '#7D8590', // GitHub's dark mode secondary text
        dark: '#E6EDF3',
        default: '#E6EDF3',
        link: "#58A6FF", // GitHub's dark mode link blue
    },
    action: {
        hover: '#21262D', // GitHub's dark mode hover state
        selected: '#30363D', // GitHub's dark mode selected state
        disabled: '#484F58', // GitHub's dark mode disabled state
    },
    divider: '#30363D', // GitHub's dark mode border color
    gray: {
        100: '#161B22',
        200: '#21262D',
        300: '#30363D',
        400: '#484F58',
        500: '#7D8590',
        600: '#C9D1D9',
        700: '#E6EDF3'
    }
};

// Common component overrides
const components = {
    MuiIconButton: {
        styleOverrides: {
            root: {
                minWidth: 0,
                width: 'auto',
                '&:hover': {
                    border: 'none',
                    color: 'inherit'
                }
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                width: 'auto',
                textTransform: 'none',
                fontWeight: 600,
                variants: [
                    {
                        props: { variant: 'contained' },
                        style: {
                            '&:hover': {
                                color: `var(--variant-containedColor)`,
                                backgroundColor: `var(--variant-containedBg)`,
                            }
                        },
                    },
                    {
                        props: { variant: 'outlined' },
                        style: {
                            '&:hover': {
                                border: '1px solid currentColor'
                            },
                        },
                    },
                ],
                '&:hover': {
                    border: 'none'
                },
                minWidth: 0,
            }
        }
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: ({ theme }) => ({
                '&': {
                    backgroundColor: theme.palette.background.dark,
                    color: theme.palette.text.dark,
                    ...theme.typography.body2,
                    padding: '8px',
                }
            })
        }
    },
    // Dark mode specific overrides
    MuiPaper: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundImage: 'none', // Remove default paper elevation in dark mode
                ...(theme.palette.mode === 'dark' && {
                    boxShadow: '0 0 0 1px #30363D', // GitHub-style border in dark mode
                })
            })
        }
    }
};

// Common typography settings
const typography = {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
    h1: {
        fontSize: '20px',
        fontWeight: 600,
    },
    h2: {
        fontSize: '16px',
        fontWeight: 600,
    },
    h3: {
        fontSize: '14px',
        fontWeight: 600,
    },
    body1: {
        fontSize: '14px',
        lineHeight: 1.5,
    },
    body2: {
        fontSize: '12px',
        lineHeight: 1.5,
    },
    caption: {
        fontSize: '12px',
        lineHeight: 1.5,
    },
};

// Create themes
export const lightTheme = createTheme({
    ...commonPalette,
    palette: lightPalette,
    typography,
    components,
});

export const darkTheme = createTheme({
    ...commonPalette,
    palette: darkPalette,
    typography,
    components,
});