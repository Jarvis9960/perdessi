import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../partials/actions/FilterButton";
import Datepicker from "../partials/actions/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Banner from "../partials/Banner";
import Innerdashborad from "./Innerdashborad";
import MyleadTable from "./MyleadTable";
import axios from "axios";

function AllLeadtable() {
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const { service } = useParams();
  const [loandetail, setloandetail] = useState([]);

  //   *********__________Login Token Expiry__________***********
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();
  let role = localStorage.getItem("role");

  const FetchLoaddetail = async (service) => {
    if (service === "personal loan") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getpersonalloanforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.response);
        setloandetail(res.data.response);
      });
    }
    if (service === "Business Loan") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getbusinessloanforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Mortgage  Loan") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getmortgageloanforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Home  Loan") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/gethomeloanforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Home Loan Balance Transfer") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/gethomeloanforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Gold Loan") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getgoldloanforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Credit Card") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getcreditcardforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "New Correction Pan application") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getnewcorrectionpanapplicationforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Shop Act") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getshopactforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "passport") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getpassportforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "GST registration application") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getGSTRegistrationforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "UDYAM Registration") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getudyamcertificateforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Car Loan") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getcarloanforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
    if (service === "Food Lisence") {
      console.log("personal loan is riunning");
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/crm/getfoodlisenceforadmin",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res.data.savedLeads);
        setloandetail(res.data.savedLeads);
      });
    }
  };

  console.log(loandetail);
  // console.log(typeof loandetail);

  useEffect(() => {
    console.log(service);
    if (!tokenData) {
      navigate("/login");
    } else {
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      FetchLoaddetail(service);
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
              <MyleadTable loandetail={loandetail} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AllLeadtable;