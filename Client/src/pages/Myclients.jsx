import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Tableclient from "./Tableclient";
import { Link, useNavigate } from "react-router-dom";


const Myclient = () => {
  const navigate = useNavigate();
  const [view, setview] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [number, setnumber] = useState();
  const [loandetail, setloandetail] = useState([]);
  const [authScreen, setAuthScreen] = useState(true);
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  // searching _
  const Searchbynum = async () => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getclientbyNumber?phone=${number}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.status) {
          console.log(res.data.response);
          setloandetail(res.data.response);
        }
      })
      .catch((err) => {
        console.log("inside the catch");
        console.log(err.data.response.message);
      });
  };

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
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
    );
  }
  return (
    <>
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
                    placeholder="Search by Number"
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                  />
                  <button
                    className="px-4 text-white bg-blue-500 border-l rounded "
                    onClick={() => {
                      Searchbynum();
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigate("/addclient")}
                className="bg-blue-500 mx-2 p-2 text-white my-5"
              >
                Add Client
              </button>
              {loandetail === "There is no data with this number" ? (
                <>
                  <div className="w-10/12 bg-red-400 text-center h-fit rounded-2xl">
                    <h1 className="py-10 px-10 text-5xl text-white">
                      NO DATA FOUND
                    </h1>
                  </div>
                </>
              ) : (
                <div className="sm:flex sm:justify-between sm:items-center mb-8">
                  <Tableclient loandetail={loandetail} />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Myclient;
