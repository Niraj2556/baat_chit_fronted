// Environment configuration
const getConfig = () => {
    const hostname = window.location.hostname;
    const isProduction = hostname !== 'localhost' && hostname !== '127.0.0.1';
    
    if (isProduction) {
        return {
            BACKEND_URL: 'https://baat-chit-backend-lovat.vercel.app/',
            ENVIRONMENT: 'production'
        };
    } else {
        return {
            BACKEND_URL: 'http://localhost:3000',
            ENVIRONMENT: 'development'
        };
    }
};

export const ENV_CONFIG = getConfig();