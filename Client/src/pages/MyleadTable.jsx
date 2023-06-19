import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MyleadTable = ({ loandetail, length }) => {
  const [view, setview] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [authScreen, setAuthScreen] = useState(true);

  const url =
    "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/04/pinterest__tbhjessica-%E2%98%BC-%E2%98%BE%E2%99%A1.png?w=1024&ssl=1";

  let tokenData = localStorage.getItem("token");
  let role = localStorage.getItem("role");
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
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);

  const handlenavigate = useNavigate();

  // Function for Fetch Data in Pop
  const Fetchpopdata = async (id, serviceName) => {
    console.log(`Pop is Working for this is ${id}`);
    console.log(serviceName);
    try {
      if (serviceName === "personal loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getpersonalloanbyuid?personalLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Mortgage  Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getmortgageloanbyid?mortgageLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Business Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getbusinessloanbyid?businessLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Home  Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/gethomeloanbyid?homeleadID=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Business Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getbusinessloanbyid?businessLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Mortgage  Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getmortgageloanbyid?mortgageLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Home  Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/gethomeloanbyid?homeleadID=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Gold Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getgoldloanbyid?goldLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Credit Card") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getcreditcardbyid?creditCardId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "New Correction Pan application") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getnewcorrectionpanapplication?newCorrectionPanApplicationId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Shop Act") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getshopactbyid?shopActId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Passport") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getpassportbyid?passportById=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "GST registration application") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getGSTregistrationbyid?GSTRegistrationId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "UDYAM Registration") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getudyamcertificatebyid?UdyamCertificateId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Car Loan") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getcarloanbyid?carLoanId=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      if (serviceName === "Food Lisence") {
        await axios({
          method: "get",
          url: `http://localhost:5000/api/v1/crm/getfoodlisencebyid?foodlisenceById=${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res.data.response);
          setpopupdata(res.data.response);
        });
      }
      popupdata ? setview(true) : setview(false);
    } catch (error) {
      console.log(error);
    }
  };

  const change_into_date = (dte) => {
    const data = new Date(dte);
    const newdate = data.toLocaleDateString();
    // console.log(data.toLocaleDateString());
    return newdate;
  };

  const renderImage = (propsData) => {
    console.log(propsData);
    if (propsData.service.service_name === "personal loan") {
      return Object.entries(propsData).map(([key, value]) => {
        if (
          key === "service" ||
          key === "client" ||
          key === "employee" ||
          key === "isFailed" ||
          key === "isPending" ||
          key === "isSuccess" ||
          key === "createdAt" ||
          key === "updatedAt" ||
          key === "L_ID"
        ) {
          return null;
        } else {
          return Object.entries(value).map(([keyOne, valueOne]) => {
            if (keyOne === "path") {
              let url = valueOne.split("public")[1].substring(1);
              return (
                <div className="w-72 ">
                  <h1 className="pb-2">{`${key} :-`}</h1>
                  <img
                    className="w-72"
                    src={`http://localhost:5000/${url}`}
                    alt=""
                    srcset=""
                  />
                </div>
              );
            }
            if (Array.isArray(value)) {
              return value.map((curr) => {
                return (
                  <div className="w-72 ">
                    <h1 className="pb-2">{`${curr.fieldname} :-`}</h1>
                    <img
                      className="w-72"
                      src={`http://localhost:5000/${curr.path
                        .split("public")[1]
                        .substring(1)}`}
                      alt=""
                      srcset=""
                    />
                  </div>
                );
              });
            }
          });
        }
      });
    } else {
      return Object.entries(propsData).map(([key, value]) => {
        if (
          key === "service" ||
          key === "client" ||
          key === "employee" ||
          key === "_id" ||
          key === "__v" ||
          key === "LoanAmount" ||
          key === "isFailed" ||
          key === "isPending" ||
          key === "isSuccess" || 
          key === "createdAt" ||
          key === "updatedAt" ||
          key === "L_ID"
        ) {
          return null;
        } else {
          return (
            <div>
              <h1>{`${key} :-`}</h1>
              <img
                className="w-72"
                src={`http://localhost:5000/${value.split("public")[1].substring(1)}`}
                alt=""
                srcset=""
              />
            </div>
          );
        }
      });
    }
  };

  console.log(loandetail);

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
      {/* Data  */}
      {length == undefined || length > 0 ? (
        <>
          <div className="w-10/12 bg-red-400 text-center h-fit rounded-2xl">
            <h1 className="py-10 px-10 text-5xl text-white">NO DATA FOUND</h1>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap flex-row gap-4 w-full justify-justify-evenly">
            {loandetail &&
              loandetail.map((e, id) => {
                return (
                  <div key={e._id} style={{width:"320px"}} >
                    <div className="w-full rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto">
                      <div className="rounded-t-xl bg-blue-200 border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                        <h4 className="mb-2 text-xl  font-medium leading-tight text-neutral-900 dark:text-neutral-70">
                          {e.service.service_name}
                        </h4>
                      </div>
                      <div className="p-6">
                        <h5 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Name : {"  "}
                          {e.client.first_name} {e.client.last_name}
                        </h5>
                        <h5 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          city : {"  "}
                          {e.client.city}
                        </h5>
                        <h5 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Email : {"  "}
                          {e.client.email}
                        </h5>
                        <h5 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Phone Number : {"  "}
                          {e.client.phone}
                        </h5>
                        <h5 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Aadhar Number : {"  "}
                          {e.client.aadhar}
                        </h5>
                        <h5 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          PAN Number : {"  "}
                          {e.client.pan}
                        </h5>
                        <div className="flex my-3">
                          <button
                            type="button"
                            className="inline-block rounded bg-blue-300 px-6 pb-2  mr-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={() => {
                              Fetchpopdata(e._id, e.service.service_name);
                              // setview(true);
                            }}
                          >
                            View
                          </button>
                          <Link
                            to={`/updatelead/${e.service.service_name}`}
                            state={{ serviceID: e._id }}
                          >
                            <button
                              type="button"
                              className="inline-block rounded bg-blue-300 mx-3 px-6 pb-2 mr-3 pt-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Update
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="inline-block rounded bg-blue-300 mx-4 ml-2 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            Update
                          </button>
                        </div>
                        <button
                          type="button"
                          className="inline-block rounded bg-blue-300 mx-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Delete
                        </button>
                        {role == "admin" ? (
                          <Link
                            to={`/transferlead/${e.service.service_name}`}
                            state={{
                              service: e.service.service_name,
                              serviceID: e._id,
                              number: e.client.phone,
                              employee:
                                e.employee.first_name + e.employee.last_name,
                              empolyeeID: e.employee._id,
                            }}
                          >
                            <button
                              type="button"
                              className=" w-10/12 inline-block rounded bg-blue-300 mx-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Transfer Lead
                            </button>
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"></div>
                    </div>
                    {/* <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"></div> */}
                  </div>
                );
              })}
          </div>
        </>
      )}
      {/* LOAN detail POP-UP */}
      {view ? (
        <>
          {
            <div className="bg-gradient-to-br from-violet-600 via-violet-400 to-gray-600 h-full w-11/12 z-20  top-24 left-10 rounded-2xl popup">
              <div className="pt-8 pl-10 h-fit w-full text-white">
                <div className="backdrop-blur-md h-52 grid gap-20 grid-cols-3">
                  <div className="grid gap-4 ">
                    <div>
                      <h3 className="font-bold text-2xl uppercase">
                        client details
                      </h3>
                      <p className="font-bold uppercase">
                        Client Name: {popupdata.client.first_name}{" "}
                        {popupdata.client.last_name}
                      </p>
                      <p className="font-semibold">
                        Email: {popupdata.client.email}
                      </p>
                      <p className="font-semibold">
                        {/* Date of Joining: {change_into_date()} */}
                      </p>
                      <p className="font-semibold">Address: {}</p>
                      <p className="font-semibold">
                        Mobile No: {popupdata.client.phone}
                      </p>
                      <p className="font-semibold">
                        Aadhar No: {popupdata.client.aadhar}
                      </p>
                      <p className="font-semibold uppercase">
                        PAN No: {popupdata.client.pan}
                      </p>
                      <p className="font-semibold uppercase">
                        Gender: {popupdata.client.gender}
                      </p>
                      <p className="font-semibold uppercase">
                        DOB: {change_into_date(popupdata.client.dob)}
                      </p>
                    </div>
                  </div>
                  <div className=" pl-3 ">
                    <h3 className="font-bold text-2xl uppercase">
                      empolyee details
                    </h3>
                    <p className="font-semibold uppercase">
                      name: {popupdata.employee.first_name}{" "}
                      {popupdata.employee.last_name}
                    </p>
                    <p className="font-semibold uppercase">
                      {/* Birthday: {} */}
                    </p>
                    <p className="font-semibold uppercase">
                      phone no: {popupdata.employee.number}
                    </p>
                    <p className="font-semibold uppercase">
                      report to: {popupdata.employee.reportto}
                    </p>
                    <p className="font-semibold uppercase">
                      joining date:{" "}
                      {change_into_date(popupdata.employee.joiningdate)}
                    </p>
                    <p className="font-semibold">
                      Religion: {popupdata.employee.religion}
                    </p>
                    <p className="font-semibold">
                      Marital Status: {popupdata.employee.martialStatus}
                    </p>
                  </div>
                </div>
                <div className="backdrop-blur-md extra-information-div mt-10 pb-4 grid grid-rows-2 grid-cols-2">
                  <div className="">
                    <h5 className="font-bold text-2xl uppercase">
                      loan information
                    </h5>
                    <div className="grid grid-cols-2">
                      <div>
                        <p className="font-semibold">Amount:</p>
                        <p className="font-semibold"></p>
                        <p className="font-semibold"></p>
                      </div>
                      <div className="">
                        <p className="font-semibold">{popupdata.LoanAmount}</p>
                        <p className="font-semibold">{}</p>
                        <p className="font-semibold">{}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  <h5 className="font-bold text-2xl uppercase">
                    all Documents
                  </h5>
                  <div className="grid grid-cols-3 gap-4 p-3 w-full">
                    {renderImage(popupdata)}
                  </div>
                </div>
                <div className="my-4">
                  <button
                    onClick={() => {
                      setview(false);
                    }}
                    className="rounded-full bg-cyan-300 p-3 text-white font-semibold"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          }
        </>
      ) : (
        <></>
      )}

      {/* Above Code is for POP_UP */}
    </>
  );
};

export default MyleadTable;
