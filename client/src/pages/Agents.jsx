import React, { useState, useEffect } from "react";
import AgentCard from "../components/Cards/AgentCard";
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css'

const Agents = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/api/users`,{ withCredentials: true });
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean-up function to cancel the axios request if the component unmounts
    return () => {
      // You can add cleanup code here if needed
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return (
      <div>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            {/* Header */}
            <div className="w-2/3 h-4 bg-gray-300 rounded mb-2" />
            {/* Body */}
            <div className="w-full h-8 bg-gray-300 rounded mb-2" />
            <div className="w-full h-8 bg-gray-300 rounded mb-2" />
            <div className="w-1/2 h-8 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    );
  }
    else{
    return (
      <div>
        <div>
          {users.map(user => (
           <AgentCard key={user.id} agent={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Agents;
