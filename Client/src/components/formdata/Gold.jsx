import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ClientAdminContext, ClientListContext } from "../../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Gold = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceId, service },
  } = location;
  const role = localStorage.getItem("role");
  const { clientState } = useContext(ClientListContext);
  const { clientAdminState } = useContext(ClientAdminContext);
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [Aadharcard, setAadharcard] = useState(null);
  const [Pancard, setPancard] = useState(null);
  const [Aadharcardpreview, setAadharcardpreview] = useState(null);
  const [Pancardpreview, setPancardpreview] = useState(null);

  useEffect(() => {
    if(role === "admin"){
     setClientData(clientAdminState.clientAdmin.already);
    }else if (clientState.isError === false) {
     setClientData(clientState.clients.clients);
    }
  }, [])

  const handleLeadForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('clientId', client);
      formData.append('loanAmount', LoanAmount);
      formData.append('serviceId', serviceId);
      formData.append('Aadharcard', Aadharcard);
      formData.append('Pancard', Pancard);

      const leadApiCall = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/crm/createleadforGoldloan',
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(leadApiCall);

      // Display success toast
      toast.success('Lead created successfully!');
    } catch (error) {
      console.log(error);

      // Display error toast
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to create lead. Please try again.');
      }
    }
  };


  const handleAadharCard = (e1) => {
    const file = e1.target.files[0];
    setAadharcard(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAadharcardpreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePanCard = (e2) => {
    const file = e2.target.files[0];
    setPancard(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPancardpreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(loanAmount, client, gender, mobile, DOB, pan, zip);
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
              placeholder="Jane"
              onChange={(e) => {
                setLoanAmount(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              My Client*
            </label>
            <div className="relative">
              <select
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select a client
                </option>
                {clientData &&
                  clientData.map((client) => {
                    return (
                      <>
                        <option key={client._id} value={client._id}>
                          {client.first_name}
                        </option>
                      </>
                    );
                  })}
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Service*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              defaultValue={service}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="aadharcard-input">
      Aadhar Card*
    </label>
    <button
     className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onClick={() => {
        document.getElementById('aadharcard-input').click();
      }}
    >
      Upload file
    </button> 
    <input
      className="hidden"
      id="aadharcard-input"
      type="file"
      placeholder=""
      onChange={handleAadharCard}
    />
    {Aadharcardpreview && (
      <div>
        <p>Aadhar Card Preview:</p>
        <img
          src={Aadharcardpreview}
          alt="Aadhar Card Preview"
          style={{ maxWidth: '100%', marginTop: '10px' }}
        />
      </div>
    )}
  </div>

  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pancard-input">
      Pan Card*
    </label>
    <button
      className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onClick={() => {
        document.getElementById('pancard-input').click();
      }}
    >
      Upload file
    </button>
    <input
      className="hidden"
      id="pancard-input"
      type="file"
      placeholder=""
      onChange={handlePanCard}
    />
    {Pancardpreview && (
      <div>
        <p>Pan Card Preview:</p>
        <img
          src={Pancardpreview}
          alt="Pan Card Preview"
          style={{ maxWidth: '100%', marginTop: '10px' }}
        />
      </div>
    )}
  </div>
</div>

        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Gold;
