import React from "react";
import { useNavigate } from "react-router-dom";

const Profiledetail = ({ Profiledata }) => {
  const url =
    "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/04/pinterest__tbhjessica-%E2%98%BC-%E2%98%BE%E2%99%A1.png?w=1024&ssl=1";
  const navigate = useNavigate();
  const change_into_date = (dte) => {
    const data = new Date(dte);
    const newdate = data.toLocaleDateString();
    // console.log(data.toLocaleDateString());
    return newdate;
  };

  console.log(Profiledata);

  return (
    <>
      {Profiledata ? (
        <div className="grid grid-rows-2 pt-8 pl-10 h-full bg-gradient-to-br from-cyan-300 via-cyan-400 to-gray-200">
          <div className="backdrop-blur-md grid gap-24 grid-cols-2">
            <div className="grid gap-4 grid-cols-2">
              <img className="rounded-xl " src={url} alt="Profile"></img>
              <div>
                <h3 className="font-bold text-2xl uppercase">
                  {Profiledata.first_name} {Profiledata.last_name}
                </h3>
                <p className="font-bold uppercase">{Profiledata.role}</p>
                <p className="font-semibold">Team: {Profiledata.Team}</p>
                <p className="font-semibold">
                  Date of Joining: {change_into_date(Profiledata.joiningdate)}
                </p>
                <p className="font-semibold">{Profiledata.CompanyName}</p>
              </div>
            </div>
            <div className=" pl-3 h-44">
              {/* <p>Phone: {Profiledata.EmployeeId.MobileNo}</p> */}
              <p className="font-semibold">Email: {Profiledata.email}</p>
              <p className="font-semibold">
                Birthday: {change_into_date(Profiledata.dob)}
              </p>
              <p className="font-semibold">Address: {Profiledata.address}</p>
              <p className="font-semibold">Gender: {Profiledata.gender}</p>
              <p className="font-semibold">Aadhar No: {Profiledata.adharno}</p>
              <p className="font-semibold">Report to: {Profiledata.reportto}</p>
            </div>
          </div>
          <div className="backdrop-blur-md extra-information-div -mt-4 pb-4 grid grid-rows-2 grid-cols-2">
            <div className="">
              <h5 className="font-bold text-2xl uppercase">
                Personal information
              </h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold">Nationality:</p>
                  <p className="font-semibold">Religion:</p>
                  <p className="font-semibold">Marital Status:</p>
                </div>
                <div className="">
                  <p className="font-semibold">{Profiledata.nationality}</p>
                  <p className="font-semibold">{Profiledata.religion}</p>
                  <p className="font-semibold">{Profiledata.MartialStatus}</p>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-2xl uppercase">
                Emergency Contacts
              </h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="font-semibold">Relationship</p>
                  <p className="font-semibold">Phone</p>
                </div>
                <div className="">
                  <p className="font-semibold">
                    {Profiledata.emergencyContactName}
                  </p>
                  <p className="font-semibold">
                    {Profiledata.emergencyContactRelationship}
                  </p>
                  <p className="font-semibold">
                    {Profiledata.EmergencyContactNumber}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-2xl uppercase">Bank information</h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold">Account Holder Name</p>
                  <p className="font-semibold">Bank Account No</p>
                  <p className="font-semibold">IFSC Code</p>
                  <p className="font-semibold">Pan Number</p>
                </div>
                <div className="">
                  <p className="font-semibold">{Profiledata.BankName}</p>
                  <p className="font-semibold">{Profiledata.BankAccNo}</p>
                  <p className="font-semibold">{Profiledata.IFSCcode}</p>
                  <p className="font-semibold">{Profiledata.PanNo}</p>
                </div>
              </div>
            </div>
            {Profiledata.role === "employee" ? (
              <p>Admin can update only</p>
            ) : (
              <div>
                <button
                  onClick={() => {
                    navigate(`/update`);
                  }}
                  className="rounded-full bg-violet-500 p-3 text-white font-semibold"
                >
                  Update Profile
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        processing
      )}
    </>
  );
};

export default Profiledetail;
