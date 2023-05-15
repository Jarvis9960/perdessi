import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Updateallempolyeeform from "../components/Updateallempolyeeform";

const Updateallempolyee = () => {
  const navigate = useNavigate();
  const [Profiledata, setProfiledata] = useState({});
  const [authScreen, setAuthScreen] = useState(true);
  const {id} = useParams();
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  
  const fetchid= async()=>{
    const response = await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getEmpolyeeIDforadmin/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    console.log(response);
    if (response) {
      setProfiledata(response.data.fetchdata)
    //   console.log(response.data.fetchdata)
    //   console.log(Profiledata)
    }
  }

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      
      fetchid();
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (authScreen) {
    return (
      <div className="lds-roller-container">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );;
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <Updateallempolyeeform Profiledata={Profiledata} id={id} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Updateallempolyee;
