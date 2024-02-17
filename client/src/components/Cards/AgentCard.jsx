import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AgentCard = ({ agent }) => {

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg flex shadow-md p-6 mb-4" onClick={()=>{navigate('/agents/show', { state: { agent } });
  }}>
      {/* Profile Image  */}
      <div className="flex flex-row  items-center mr-10">
      {agent && agent.avatar ? (
          <img
            src={agent.avatar}
            alt="Agent Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
        ) : (
          <FaUserCircle className="w-12 h-12 rounded-full mr-4 text-gray-500" />
        )}

      </div>

      {/* Right Part */}
      <div className="flex flex-col ">

        {/* Name  */}
        <div className="flex items-center mb-4 ">
          <div>
            <h2 className="text-2xl font-bold text-gray-500">{agent.name}</h2>
          </div>
        </div>

        
        <div className="flex md:flex-row flex-col md:items-center  text-gray-600 mb-2  ">
          <div className="flex flex-col justify-around mr-10 ">
          <IoMailOutline />  
          <p className="text-gray-600 text-gray text-md ">{agent.email}</p>
          </div>
          <div className="flex flex-col  mr-10">
          <IoLocationOutline />
          <p className="text-gray-600 text-gray text-md" >Lahore, Pakistan</p>
          </div>
          <div className="flex flex-col  mr-10">
          <CiPhone />
          <p>+923070226371</p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AgentCard;
