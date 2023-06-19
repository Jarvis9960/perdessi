import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Tableempolyee from "./Tableempolyee";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Allemployees = () => {
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const [number, setnumber] = useState();
  const [loandetail, setloandetail] = useState([]);
  let role = localStorage.getItem("role");
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
      if (role === "employee") {
        navigate("/login");
      }
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  // searching _
  const Searchbynum = async () => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getemployeebyIdNum?employeeId=${number}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data) {
          console.log(res.data.fetchdata);
          setloandetail(res.data.fetchdata);
        }
      })
      .catch((err) => {
        console.log("inside the catch");
        console.log(err.data.response.message);
      });
  };


  const length = loandetail;

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
            <div className="flex items-center">
                <div className="flex border border-purple-200 rounded w-full">
                  <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Empolyee ID"
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                  />
                  <button className="px-4 text-white bg-blue-500 border-l rounded "
                    onClick={() => {
                      Searchbynum();
                    }}>
                    Search
                  </button>
                  <button className="px-4 text-white bg-green-500 border-l rounded "
                    onClick={() => {setloandetail(undefined)}}>
                    Reset
                  </button>
                </div>
              </div>
            <button onClick={()=>{navigate("/addemployee")}} className="bg-blue-500 mx-2 p-2 text-white my-5">
              Add Empolyee
            </button>
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <Tableempolyee loandetail ={loandetail} length={length}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Allemployees;
