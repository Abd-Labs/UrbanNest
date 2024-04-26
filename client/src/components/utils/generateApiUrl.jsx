// apiUtils.js

export default function getApiUrl (path)  {
      // Use window.location.origin as domain
      return `${process.env.REACT_APP_API_DOMAIN}${path}`;
    
  };
  