import { useState, useEffect } from 'react';
import axios from 'axios';
import generateApiUrl from '../components/utils/generateApiUrl'
const usePropertyData = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertiesData = async () => {
      try {
        const apiUrl = generateApiUrl('/api/properties/');
        const response = await axios.get(apiUrl, { withCredentials: true });
        const { properties, totalPages, currentPage } = response.data; // Extract properties, totalPages, and currentPage from response
        setPropertiesData(properties); // Set propertiesData state with extracted properties
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties data:', error);
        setLoading(false);
      }
    };

    fetchPropertiesData();

    // Cleanup function can be added here if needed

  }, []);

  return { propertiesData, loading }; // Return propertiesData and loading state
};

export default usePropertyData;
