import React, { useState, useEffect } from "react";
import AgentCard from "../components/Cards/AgentCard";
import axios from 'axios';

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        {users.map(user => (
         <AgentCard key={user.id} agent={user} />
        ))}
      </div>
    </div>
  );
};

export default Agents;
