// apiUtils.js

export default function getApiUrl (path)  {
      // Use window.location.origin as domain
      return `${window.location.origin}${path}`;
    
  };
  