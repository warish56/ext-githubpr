

export const BrandLogo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
            <g transform="translate(20, 15)">
                <circle cx="35" cy="35" r="35" fill="#24292e"/>
                
                <path d="M20 35 L50 35" stroke="#2188ff" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="20" cy="35" r="4" fill="#2188ff"/>
                <circle cx="35" cy="35" r="4" fill="#2188ff"/>
                <circle cx="50" cy="35" r="4" fill="#2188ff"/>
                
                <path d="M20 35 C20 45, 35 45, 35 35" fill="none" stroke="#2188ff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M35 35 C35 50, 50 50, 50 35" fill="none" stroke="#2188ff" strokeWidth="2" strokeLinecap="round"/>
                
                <circle cx="27.5" cy="40" r="2" fill="#28a745"/>
                <circle cx="42.5" cy="43" r="2" fill="#28a745"/>
            </g>
            
            <g transform="translate(100, 30)">
                <text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="24" fill="#24292e">
                GitHub
                </text>
                <text x="80" y="20" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="24" fill="#2188ff">
                Milestones
                </text>
                
                <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="14" fill="#6a737d">
                Organize and review pull requests efficiently
                </text>
            </g>
        </svg>
    )
}