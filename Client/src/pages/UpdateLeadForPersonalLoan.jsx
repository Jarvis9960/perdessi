import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { GrFormEdit } from "react-icons/Gr";

const Personal = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("Select a client");
  const [loading, setLoading] = useState(false);
  // const [zip, setZip] = useState("");
  // const [ view, setview ] = useState(false)
  const [SalariedProofOfIdentity, setSalariedProofOfIdentity] = useState(null);
  const [SalariedTwoPassportPhoto, setPassport] = useState(null);
  const [SelfEmployeedProofofIdentity, setSEIndentity] = useState(null);
  const [SalariedProofOfResidence, setSalariedProofOfResidency] =
    useState(null);
  const [SelfEmployeedProofofResidence, setseResidence] = useState(null);
  const [SelfEmployeedIncomeProof, setIncome] = useState(null);
  const [SalariedThreeMonthsBankStatement, setBankStatement] = useState(null);
  // const [sixbankStatement, setSixBankStatement] = useState(null);
  const [employment, setEmployment] = useState("");
  const [SalariedThreeMonthSalarySlip, setThreesalaryslip] = useState(null);
  const [SelfEmployeedSixMonthBankStatement, setSeSixBankStatement] =
    useState(null);
  const [SelfEmployeedProofofContinuityofBusiness, setBusiness] =
    useState(null);
  const [SelfEmployeedOfficeAddressProof, setAddressproof] = useState(null);
  const [popupdata, setpopupdata] = useState("");
  const [identity, setIdentity] = useState(false);
  const [resident, setResident] = useState(false);
  const [threeMonths, setThreeMonths] = useState(false);
  const [monthSalary, setMonthSalary] = useState(false);
  const [pass, setPass] = useState(false);
  const [proof, setProof] = useState(false);
  const [proofIncome, setProofIncome] = useState(false);
  const [sixMon, setSixMon] = useState(false);
  const [office, setOffice] = useState(false);
  const [continuity, setContinuity] = useState(false);

  console.log(loading);

  useEffect(() => {
    console.log("inside this effect");
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getpersonalloanbyuid?personalLoanId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        setpopupdata(res.data.response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [serviceID, loading]);

  const editPersonalLoanLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(fieldToEdit);
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("SalariedProofOfIdentity", SalariedProofOfIdentity);
      formData.append("SalariedProofOfResidence", SalariedProofOfResidence);
      formData.append(
        "SalariedThreeMonthsBankStatement",
        SalariedThreeMonthsBankStatement
      );
      formData.append(
        "SalariedThreeMonthSalarySlip",
        SalariedThreeMonthSalarySlip
      );
      formData.append("SalariedTwoPassportPhoto", SalariedTwoPassportPhoto);
      formData.append(
        "SelfEmployeedProofofIdentity",
        SelfEmployeedProofofIdentity
      );
      formData.append(
        "SelfEmployeedProofofResidence",
        SelfEmployeedProofofResidence
      );
      formData.append("SelfEmployeedIncomeProof", SelfEmployeedIncomeProof);
      formData.append(
        "SelfEmployeedSixMonthBankStatement",
        SelfEmployeedSixMonthBankStatement
      );
      formData.append(
        "SelfEmployeedOfficeAddressProof",
        SelfEmployeedOfficeAddressProof
      );
      formData.append(
        "SelfEmployeedProofofContinuityofBusiness",
        SelfEmployeedProofofContinuityofBusiness
      );

      const editedResponse = await axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/crm/updatepersonalloan",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (editedResponse.data.status) {
        setLoading(false);
        console.log("image updated");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  console.log(popupdata);
  console.log(serviceID);

  return (
    <>
      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => {
            handleLeadForm(e);
          }}
          className="w-full max-w-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              {popupdata && (
                <>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Loan Amount*
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="number"
                    placeholder=""
                    onChange={() => {
                      setLoanAmount();
                    }}
                    defaultValue={popupdata.LoanAmount}
                  />
                </>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                My Client*
              </label>
              <div className="relative">
                {popupdata && (
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                    onChange={(e) => {
                      setLoanAmount(e.target.value);
                    }}
                    defaultValue={popupdata.client.first_name}
                    readOnly
                  />
                )}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Client Type*
              </label>
              <div className="relative">
                <select
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => {
                    setEmployment(e.target.value);
                  }}
                >
                  <option value="Select a client" selected>
                    Select a client
                  </option>
                  <option key="" value="Salaried">
                    Salaried
                  </option>
                  <option key="" value="Self Employed">
                    Self Employed
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Service*
              </label>
              {popupdata && (
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  defaultValue={popupdata.service.service_name}
                  readOnly
                />
              )}
            </div>
          </div>
          {employment === "Select a client" ? (
            ""
          ) : (
            <div>
              {employment === "Salaried" ? (
                <div>
                  <h3 className="my-5 block uppercase tracking-wide text-gray-700 text-xl underline font-bold">
                    Salaried
                  </h3>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty("SalariedProofOfIdentity") && (
                        <img
                          src={`http://localhost:5000/${popupdata.SalariedProofOfIdentity.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Proof Of Identity*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setIdentity(!identity)}
                      >
                        <GrFormEdit />
                      </p>
                      {identity && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setSalariedProofOfIdentity(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SalariedProofOfIdentity"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty("SalariedProofOfResidence") && (
                        <img
                          src={`http://localhost:5000/${popupdata.SalariedProofOfResidence.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Proof Of Residence*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setResident(!resident)}
                      >
                        <GrFormEdit />
                      </p>
                      {resident && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            name="residence"
                            placeholder="Albuquerque"
                            onChange={(e) =>
                              setSalariedProofOfResidency(e.target.files[0])
                            }
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SalariedProofOfResidence"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SalariedThreeMonthsBankStatement"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SalariedThreeMonthsBankStatement.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Three Months Bank Statement*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setThreeMonths(!threeMonths)}
                      >
                        <GrFormEdit />
                      </p>
                      {threeMonths && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setBankStatement(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SalariedThreeMonthsBankStatement"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SalariedThreeMonthSalarySlip"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SalariedThreeMonthSalarySlip.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Three Month Salary Slip*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setMonthSalary(!monthSalary)}
                      >
                        <GrFormEdit />
                      </p>
                      {monthSalary && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setThreesalaryslip(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SalariedThreeMonthSalarySlip"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty("SalariedTwoPassportPhoto") && (
                        <>
                          {popupdata.SalariedTwoPassportPhoto.map((curr) => {
                            return (
                              <>
                                <img
                                  src={`http://localhost:5000/${curr.path
                                    .split("public")[1]
                                    .substring(1)}`}
                                  alt=""
                                  srcset=""
                                />
                              </>
                            );
                          })}
                        </>
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Two Passport Photo*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setPass(!pass)}
                      >
                        <GrFormEdit />
                      </p>
                      {pass && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setPassport(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SalariedTwoPassportPhoto"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="my-5 block uppercase tracking-wide text-gray-700 text-xl underline font-bold">
                    Self Employeed
                  </h3>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SelfEmployeedProofofIdentity"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SelfEmployeedProofofIdentity.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Proof Of Indentity*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setProof(!proof)}
                      >
                        <GrFormEdit />
                      </p>
                      {proof && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setSEIndentity(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SelfEmployeedProofofIdentity"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SelfEmployeedProofofResidence"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SelfEmployeedProofofResidence.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Proof Of Residence*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setResident(!resident)}
                      >
                        <GrFormEdit />
                      </p>
                      {resident && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            name="residence"
                            placeholder="Albuquerque"
                            onChange={(e) => setseResidence(e.target.files[0])}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SelfEmployeedProofofResidence"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty("SelfEmployeedIncomeProof") && (
                        <img
                          src={`http://localhost:5000/${popupdata.SelfEmployeedIncomeProof.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Income Proof*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setProofIncome(!proofIncome)}
                      >
                        <GrFormEdit />
                      </p>
                      {proofIncome && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setIncome(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SelfEmployeedIncomeProof"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SelfEmployeedSixMonthBankStatement"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SelfEmployeedSixMonthBankStatement.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Six Month Bank Statement*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setSixMon(!sixMon)}
                      >
                        <GrFormEdit />
                      </p>
                      {sixMon && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setSeSixBankStatement(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SelfEmployeedSixMonthBankStatement"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SelfEmployeedOfficeAddressProof"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SelfEmployeedOfficeAddressProof.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Office Address Proof*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setOffice(!office)}
                      >
                        <GrFormEdit />
                      </p>
                      {office && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setAddressproof(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SelfEmployeedOfficeAddressProof"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      {popupdata.hasOwnProperty(
                        "SelfEmployeedProofofContinuityofBusiness"
                      ) && (
                        <img
                          src={`http://localhost:5000/${popupdata.SelfEmployeedProofofContinuityofBusiness.path
                            .split("public")[1]
                            .substring(1)}`}
                          alt=""
                          srcset=""
                        />
                      )}
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        Proof Of Continuity Of Business*
                      </label>
                      <p
                        className="cursor-pointer"
                        onClick={() => setContinuity(!continuity)}
                      >
                        <GrFormEdit />
                      </p>
                      {continuity && (
                        <>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="file"
                            placeholder="Albuquerque"
                            onChange={(e) => {
                              setBusiness(e.target.files[0]);
                            }}
                          />
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material/24/submit-progress--v2.png"
                            alt="submit-progress--v2"
                            onClick={(e) => {
                              editPersonalLoanLead(
                                e,
                                "SelfEmployeedProofofContinuityofBusiness"
                              );
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Personal;
