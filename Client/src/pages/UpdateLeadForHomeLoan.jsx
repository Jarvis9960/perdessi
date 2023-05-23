import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { GrFormEdit } from "react-icons/Gr";

const UpdateLeadForHomeLoan = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [employeeIdentityCard, setEmployeeIdentityCard] = useState(null);
  const [loanApplication, setLoanApplication] = useState(null);
  const [proofOfIdentity, setProofOfIdentity] = useState(null);
  const [proofOfResidency, setProofOfResidency] = useState(null);
  const [permissionOfConstruction, setPermissionOfConstruction] =
    useState(null);
  const [registeredAgreementForSales, setRegisteredAgreementForSales] =
    useState(null);
  const [allotmentletter, setAllotmentletter] = useState(null);
  const [stampedAgreement, setStampedAgreement] = useState(null);
  const [occupancyCertificate, setOccupancyCertificate] = useState(null);
  const [shareCertification, setShareCertification] = useState(null);
  const [maintainanceBill, setMaintainanceBill] = useState(null);
  const [electricityBill, setElectricityBill] = useState(null);
  const [propertyTaxReceipt, setPropertyTaxReceipt] = useState(null);
  const [paymentMadetoBuilderRecept, setPaymentMadetoBuilderRecept] =
    useState(null);
  const [sixMonthBankStatement, setSixMonthBankStatement] = useState(null);
  const [loanAccountStatement, setLoanAccountStatement] = useState(null);
  const [threeMonthSalarySlip, setThreeMonthSalarySlip] = useState(null);
  const [twoYearOfFormsixteenOrItReturn, setTwoYearOfFormsixteenOrItReturn] =
    useState(null);
  const [businessAddressProof, setBusinessAddressProof] = useState(null);
  const [ThreeYearItReturn, setThreeYearItReturn] = useState(null);
  const [businessLisenceDetail, setBusinessLisenceDetail] = useState(null);
  const [TDScertification, setTDScertification] = useState(null);
  const [certificationOfQualification, setcertificationOfQualification] =
    useState(null);
  const [
    approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed,
    setApprovedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed,
  ] = useState(null);
  const [employeeIdentity, setEmployeeIdentity] = useState(false);
  const [loanApp, setLoanApp] = useState(false);
  const [proofOfId, setProofOfId] = useState(false);
  const [residency, setResidency] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [allotment, setAllotment] = useState(false);
  const [stamped, setStamped] = useState(false);
  const [occupancy, setOccupancy] = useState(false);
  const [share, setShare] = useState(false);
  const [bill, setBill] = useState(false);
  const [electBill, setElectBill] = useState(false);
  const [property, setProperty] = useState(false);
  const [plan, setPlan] = useState(false);
  const [builder, setBuilder] = useState(false);
  const [sixMonth, setSixMonth] = useState(false);
  const [accountStatement, setAccountStatement] = useState(false);
  const [threeMonth, setThreeMonth] = useState(false);
  const [itReturn, setItReturn] = useState(false);
  const [businessAd, setBusinessAd] = useState(false);
  const [yearIt, setYearIt] = useState(false);
  const [lisence, setLisence] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tds, setTDS] = useState(false);
  const [qualification, setQualification] = useState(false);
  const [popupdata, setpopupdata] = useState([]);

  useEffect(() => {
    console.log("inside this effect");
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/gethomeloanbyid?homeleadID=${serviceID}`,
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

  console.log(popupdata);

  const editHomeLoanLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(fieldToEdit);
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("employeeIdentityCard", employeeIdentityCard);
      formData.append("loanApplication", loanApplication);
      formData.append("proofOfIdentity", proofOfIdentity);
      formData.append("proofOfResidency", proofOfResidency);
      formData.append("permissionOfConstruction", permissionOfConstruction);
      formData.append(
        "registeredAgreementForSales",
        registeredAgreementForSales
      );
      formData.append("allotmentletter", allotmentletter);
      formData.append("stampedAgreement", stampedAgreement);
      formData.append("occupancyCertificate", occupancyCertificate);
      formData.append("shareCertification", shareCertification);
      formData.append("maintainanceBill", maintainanceBill);
      formData.append("electricityBill", electricityBill);
      formData.append("propertyTaxReceipt", propertyTaxReceipt);
      formData.append("paymentMadetoBuilderRecept", paymentMadetoBuilderRecept);
      formData.append("sixMonthBankStatement", sixMonthBankStatement);
      formData.append("loanAccountStatement", loanAccountStatement);
      formData.append("threeMonthSalarySlip", threeMonthSalarySlip);
      formData.append(
        "twoYearOfFormsixteenOrItReturn",
        twoYearOfFormsixteenOrItReturn
      );
      formData.append("businessAddressProof", businessAddressProof);
      formData.append("ThreeYearItReturn", ThreeYearItReturn);
      formData.append("businessLisenceDetail", businessLisenceDetail);
      formData.append("TDScertification", TDScertification);
      formData.append(
        "certificationOfQualification",
        certificationOfQualification
      );
      formData.append(
        "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed",
        approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed
      );

      const editedResponse = await axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/crm/updatehomeloan",
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

  return (
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
                  onChange={(e) => {
                    setLoanAmount(e.target.value);
                  }}
                  defaultValue={popupdata.LoanAmount}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="relative">
              {popupdata.client && (
                <>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    My Client*
                  </label>
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
                </>
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
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.service && (
              <>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Service*
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  defaultValue={popupdata.service.service_name}
                  readOnly
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("employeeIdentityCard") && (
              <img
                src={`http://localhost:5000/${popupdata.employeeIdentityCard
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
              Employee Identity Card*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setEmployeeIdentity(!employeeIdentity)}
            >
              <GrFormEdit />
            </p>
            {employeeIdentity && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setEmployeeIdentityCard(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "employeeIdentityCard");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("loanApplication") && (
              <img
                src={`http://localhost:5000/${popupdata.loanApplication
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Loan Application*
            </label>
            <p className="cursor-pointer" onClick={() => setLoanApp(!loanApp)}>
              <GrFormEdit />
            </p>
            {loanApp && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setLoanApplication(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "loanApplication");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("proofOfIdentity") && (
              <img
                src={`http://localhost:5000/${popupdata.proofOfIdentity
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
              onClick={() => setProofOfId(!proofOfId)}
            >
              <GrFormEdit />
            </p>
            {proofOfId && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProofOfIdentity(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "proofOfIdentity");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("proofOfResidency") && (
              <img
                src={`http://localhost:5000/${popupdata.proofOfResidency
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Proof Of Residency*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setResidency(!residency)}
            >
              <GrFormEdit />
            </p>
            {residency && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setProofOfResidency(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "proofOfResidency");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("permissionOfConstruction") && (
              <img
                src={`http://localhost:5000/${popupdata.permissionOfConstruction
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
              Permission Of Construction*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setConstruction(!construction)}
            >
              <GrFormEdit />
            </p>
            {construction && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPermissionOfConstruction(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "permissionOfConstruction");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("registeredAgreementForSales") && (
              <img
                src={`http://localhost:5000/${popupdata.registeredAgreementForSales
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Registered Agreement For Sales*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setAgreement(!agreement)}
            >
              <GrFormEdit />
            </p>
            {agreement && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setRegisteredAgreementForSales(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "registeredAgreementForSales");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("allotmentletter") && (
              <img
                src={`http://localhost:5000/${popupdata.allotmentletter
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
              Allotment Letter*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setAllotment(!allotment)}
            >
              <GrFormEdit />
            </p>
            {allotment && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setAllotmentletter(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "allotmentletter");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("stampedAgreement") && (
              <img
                src={`http://localhost:5000/${popupdata.stampedAgreement
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Stamped Agreement*
            </label>
            <p className="cursor-pointer" onClick={() => setStamped(!stamped)}>
              <GrFormEdit />
            </p>
            {stamped && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setStampedAgreement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "stampedAgreement");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("occupancyCertificate") && (
              <img
                src={`http://localhost:5000/${popupdata.occupancyCertificate
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
              Occupancy Certificate*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setOccupancy(!occupancy)}
            >
              <GrFormEdit />
            </p>
            {occupancy && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setOccupancyCertificate(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "occupancyCertificate");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("shareCertification") && (
              <img
                src={`http://localhost:5000/${popupdata.shareCertification
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Share Certification*
            </label>
            <p className="cursor-pointer" onClick={() => setShare(!share)}>
              <GrFormEdit />
            </p>
            {share && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setShareCertification(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "shareCertification");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("maintainanceBill") && (
              <img
                src={`http://localhost:5000/${popupdata.maintainanceBill
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
              Maintainance Bill*
            </label>
            <p className="cursor-pointer" onClick={() => setBill(!bill)}>
              <GrFormEdit />
            </p>
            {bill && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setMaintainanceBill(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "maintainanceBill");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("electricityBill") && (
              <img
                src={`http://localhost:5000/${popupdata.electricityBill
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Electricity Bill*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setElectBill(!electBill)}
            >
              <GrFormEdit />
            </p>
            {electBill && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setElectricityBill(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "electricityBill");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("propertyTaxReceipt") && (
              <img
                src={`http://localhost:5000/${popupdata.propertyTaxReceipt
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
              Property Tax Receipt*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setProperty(!property)}
            >
              <GrFormEdit />
            </p>
            {property && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPropertyTaxReceipt(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "propertyTaxReceipt");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty(
              "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed"
            ) && (
              <img
                src={`http://localhost:5000/${popupdata.approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Approved Plan Copy Registered Development Agreement Of The Builder
              Conveyance Deed*
            </label>
            <p className="cursor-pointer" onClick={() => setPlan(!plan)}>
              <GrFormEdit />
            </p>
            {plan && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setApprovedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed(
                      e.target.files[0]
                    );
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(
                      e,
                      "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed"
                    );
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("paymentMadetoBuilderRecept") && (
              <img
                src={`http://localhost:5000/${popupdata.paymentMadetoBuilderRecept
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
              Payment Made To Builder Recept*
            </label>
            <p className="cursor-pointer" onClick={() => setBuilder(!builder)}>
              <GrFormEdit />
            </p>
            {builder && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPaymentMadetoBuilderRecept(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "paymentMadetoBuilderRecept");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("sixMonthBankStatement") && (
              <img
                src={`http://localhost:5000/${popupdata.sixMonthBankStatement
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Six Month Bank Statement*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setSixMonth(!sixMonth)}
            >
              <GrFormEdit />
            </p>
            {sixMonth && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setSixMonthBankStatement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "sixMonthBankStatement");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("loanAccountStatement") && (
              <img
                src={`http://localhost:5000/${popupdata.loanAccountStatement
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
              Loan AccountStatement*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setAccountStatement(!accountStatement)}
            >
              <GrFormEdit />
            </p>
            {accountStatement && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setLoanAccountStatement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "loanAccountStatement");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("threeMonthSalarySlip") && (
              <img
                src={`http://localhost:5000/${popupdata.threeMonthSalarySlip
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Three Month Salary Slip*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setThreeMonth(!threeMonth)}
            >
              <GrFormEdit />
            </p>
            {threeMonth && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setThreeMonthSalarySlip(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "threeMonthSalarySlip");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("twoYearOfFormsixteenOrItReturn") && (
              <img
                src={`http://localhost:5000/${popupdata.twoYearOfFormsixteenOrItReturn
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
              Two Year Of Form sixteen Or It Return*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setItReturn(!itReturn)}
            >
              <GrFormEdit />
            </p>
            {itReturn && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setTwoYearOfFormsixteenOrItReturn(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "twoYearOfFormsixteenOrItReturn");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("businessAddressProof") && (
              <img
                src={`http://localhost:5000/${popupdata.businessAddressProof
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Address Proof*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setBusinessAd(!businessAd)}
            >
              <GrFormEdit />
            </p>
            {businessAd && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setBusinessAddressProof(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "businessAddressProof");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ThreeYearItReturn") && (
              <img
                src={`http://localhost:5000/${popupdata.ThreeYearItReturn.split(
                  "public"
                )[1].substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Three YearIt Return*
            </label>
            <p className="cursor-pointer" onClick={() => setYearIt(!yearIt)}>
              <GrFormEdit />
            </p>
            {yearIt && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setThreeYearItReturn(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "ThreeYearItReturn");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("businessLisenceDetail") && (
              <img
                src={`http://localhost:5000/${popupdata.businessLisenceDetail
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Lisence Detail*
            </label>
            <p className="cursor-pointer" onClick={() => setLisence(!lisence)}>
              <GrFormEdit />
            </p>
            {lisence && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setBusinessLisenceDetail(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "businessLisenceDetail");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("TDScertification") && (
              <img
                src={`http://localhost:5000/${popupdata.TDScertification.split(
                  "public"
                )[1].substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              TDS Certification*
            </label>
            <p className="cursor-pointer" onClick={() => setTDS(!tds)}>
              <GrFormEdit />
            </p>
            {tds && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setTDScertification(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "TDScertification");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("certificationOfQualification") && (
              <img
                src={`http://localhost:5000/${popupdata.certificationOfQualification
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Certification Of Qualification*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setQualification(!qualification)}
            >
              <GrFormEdit />
            </p>
            {qualification && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setcertificationOfQualification(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "certificationOfQualification");
                  }}
                />
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateLeadForHomeLoan;
