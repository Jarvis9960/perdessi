import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import BarChart from "../components/graphs/BarChart";
import ShapeChart from "../components/graphs/ShapeGraph";
import LoanInfoCard from "../utils/LoanInfoCard";
import DashboardData from "../components/DashboardData";
import AllleadGraph from "../components/AllleadGraph";
import MistableEmp from "../components/MistableEmp";
import { useContext } from "react";
import axios from "axios";
import { ClientAdminContext, ClientListContext } from "../Context/ClientList";
import MistableReport from "../components/MistableReport";
import Selector from "./Selector";
import CustomSelect from "./CustomSelect";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const [searchOption, setSearchOption] = useState(false);

  const { clientState } = useContext(ClientListContext);
  const { clientAdminState } = useContext(ClientAdminContext);
  const [data, setData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [misdata, setMisData] = useState([]);
  const [mistabledata, setMisTableData] = useState([]);
  const [empId, setEmpId] = useState();
  const [employee, setEmployee] = useState();
  const [clientData, setClientData] = useState("");
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  let tokenData = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  let tokenExpiry;
  let token;
  if (tokenData) {
    // tokenExpiry = JSON.parse(tokenData).expiry;
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  const fetchData = (value) => {
    if (arr.length == 0) {

      setArr()
    }
    else {

    }
    fetch("http://localhost:5000/api/v1/crm/getallemployee")
  }
  useEffect(() => {
    // Get all data count
    (async function() {
      await axios.get("http://localhost:5000/api/v1/crm/getallemployee").then((res) => {
        console.log(res.data.fetchdata);
        setData(res.data.fetchdata);
        setEmpId(res.data.fetchdata);
      });
    })();


    // MIS lead data for MIS download
    axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getmisreportofleads`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      setMisData(res.data.response);
    });


    // MIS Table data fetch of all Count and Amount
    axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getmistabledata`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data.data);
      setMisTableData(res.data.data)
    });

    // Role verification
    if (role === "admin") {
      setClientData(clientAdminState.clientAdmin.already);
    } else if (clientState.isError === false) {
      setClientData(clientState.clients.clients);
    }

    // token verification
    if (!tokenData) {
      navigate("/login");
    } else {
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      console.log(token);
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);

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

  console.log(data);
  console.log(employee);
  console.log(mistabledata);
  console.log("EmpId", empId);

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
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
              <DashboardData />
            </div>

            <div className="sm:flex sm:justify-between sm:items-center mb-8 overflow-x-scroll">
              {role === "admin" ? <MistableEmp misdata={misdata} /> : <></>}
            </div>
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {role === "admin" ? <MistableReport mistabledata={mistabledata} /> : <></>}
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto my-5">
              <h1 className="font-bold text-2xl underline">
                All Leads Analysis Details:-
              </h1>
              <div className="mt-5">
                {/* <div className="">
                  <input type="date" name="" id="" />
                  <input type="date" name="" id="" />
                  <button className="bg-slate-500 text-white p-2 mx-2">
                    Search
                  </button>
                </div> */}
                {role === "admin" ? (
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setEmployee(e.target.value);
                    }}
                  >
                    <option selected>select Employee</option>
                    {data.map((e, id) => {
                      return (
                        <>
                          <option key={e._id} value={e._id} >
                            {e.first_name || e.firstName}
                          </option>
                        </>
                      );
                    })}
                  </select>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <AllleadGraph
              className="overflow-x-scroll w-full"
              employee={employee}
            />

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <Innerdashborad />
            </div>
          </div>

          <div className="sm:flex sm:justify-between sm:items-center mb-8 overflow-x-scroll">
            {role === "admin" ? <MistableEmp misdata={misdata} /> : <></>}
          </div>
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {role === "admin" ? <MistableReport /> : <></>}
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto my-5">
            <h1 className="font-bold text-2xl underline">
              All Leads Analysis Details:-
            </h1>
            {/* <div className="mt-5">
              {/* <div className="">
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />
                <button className="bg-slate-500 text-white p-2 mx-2">
                  Search
                </button>
              </div> */}
              {/* {role === "admin" ? ( 
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setEmployee(e.target.value);
                  }}
                >
                  <option selected>select Employee</option>
                  {data.map((e, id) => {
                    return (
                      <>
                        <option key={e._id} value={e._id} >
                          {e.first_name || e.firstName}
                        </option>
                      </>
                    );
                  })}
                </select>
              ) : (
                <></>
              )}
            </div> */}
          </div>
          <Selector/>
          {/* <CustomSelect/> */}
          <br/>
          <AllleadGraph
            className="overflow-x-scroll w-full"
            employee={employee}
          />

          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            <Innerdashborad />
          </div>
        </div>
      </main>
      {/* <LoanInfoCard />
      <BarChart />
      <ShapeChart /> */}
    </div>
  </div>
  );
}

export default Dashboard;
