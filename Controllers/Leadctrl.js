


import HomeLoanModel from "../Models/HomeloanModel.js";
import BusinessloanModel from "../Models/BusinessloanModel.js";
import PersonalLoanModel from "../Models/PersonalLoanModel.js";
import MortgageLoanModel from "../Models/MortgageLoanModel.js";
import GoldLoanModel from "../Models/GoldLoanModel.js";
import CreditCardModel from "../Models/CreditCardModel.js";
import CarLoanModel from "../Models/CarLoanModel.js";
import NewCorrectionPanApplicationModel from "../Models/NewCorrectionPanApplication.js";
import PassportModel from "../Models/PassportModel.js";
import GSTResgistraionModel from "../Models/GSTRegistrationModel.js";
import ShopActModel from "../Models/ShopActModel.js";
import UdyamCertificateModel from "../Models/UdyamCertificationModel.js";
import FoodLisenceModel from "../Models/FoodLisenceModel.js";
import Route from "../Routes/ClientRoute.js";

export const CreateLeadctrlForHomeLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    
    const E_ID = await HomeLoanModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }
    const documentObject = req.files;

    const homeLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      homeLoanData[key] = documentObject[key][0].path;
    }

    const newHomeLoanData = new HomeLoanModel(homeLoanData);

    const savedResponse = await newHomeLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for home loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForBusinessLoanModel = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await BusinessloanModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }
    const documentObject = req.files;

    const businessLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      businessLoanData[key] = documentObject[key][0].path;
    }

    const newBusinessLoanData = new BusinessloanModel(businessLoanData);

    const savedResponse = await newBusinessLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Business loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForPersonalLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await PersonalLoanModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const PersonalLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      PersonalLoanData[key] = documentObject[key][0];
    }

    console.log(PersonalLoanData);

    const newPersonalLoanData = new PersonalLoanModel(PersonalLoanData);

    const savedResponse = await newPersonalLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Personal loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForMortgageLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await MortgageLoanModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }


    const documentObject = req.files;

    const MortgageLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      MortgageLoanData[key] = documentObject[key][0].path;
    }

    const newMortgageLoanData = new MortgageLoanModel(MortgageLoanData);

    const savedResponse = await newMortgageLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Mortgage loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForGoldLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await GoldLoanModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }
    const documentObject = req.files;

    const GoldLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      GoldLoanData[key] = documentObject[key][0].path;
    }

    const newGoldLoanData = new GoldLoanModel(GoldLoanData);

    const savedResponse = await newGoldLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForCreditCard = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await CreditCardModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const CreditCardData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      CreditCardData[key] = documentObject[key][0].path;
    }

    const newCreditCardData = new CreditCardModel(CreditCardData);

    const savedResponse = await newCreditCardData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForCarLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await CarLoanModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const CarLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      CarLoanData[key] = documentObject[key][0].path;
    }

    const newCarLoanData = new CarLoanModel(CarLoanData);

    const savedResponse = await newCarLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForNewCorrectionPanApplication = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await NewCorrectionPanApplicationModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const NewCorrectionPanApplicationData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      NewCorrectionPanApplicationData[key] = documentObject[key][0].path;
    }

    const newNewCorrectionPanApplicationData =
      new NewCorrectionPanApplicationModel(NewCorrectionPanApplicationData);

    const savedResponse = await newNewCorrectionPanApplicationData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForPassport = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await PassportModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const PassportData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      PassportData[key] = documentObject[key][0].path;
    }

    const newPassportData = new PassportModel(PassportData);

    const savedResponse = await newPassportData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForGSTRegistration = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await GSTResgistraionModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const GSTRegistrationData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      GSTRegistrationData[key] = documentObject[key][0].path;
    }

    const newGSTRegistrationData = new GSTResgistraionModel(
      GSTRegistrationData
    );

    const savedResponse = await newGSTRegistrationData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForShopAct = async (req, resp) => {
  try {
    const {
      serviceId,
      clientId,
      loanAmount,
      detailsOfBusiness,
      natureOfBusiness,
    } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await ShopActModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const ShopActData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      DetailsOfBusiness: detailsOfBusiness,
      NatureOfBusiness: natureOfBusiness,
      L_ID: L_ID,
    };

    console.log(ShopActData)

    for (const key in documentObject) {
      ShopActData[key] = documentObject[key][0].path;
    }

    const newShopActData = new ShopActModel(ShopActData);

    const savedResponse = await newShopActData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForUdyamCertificate = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount, businessAdress } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await UdyamCertificateModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const UdyamCertificateData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      BusinessAdress: businessAdress,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      UdyamCertificateData[key] = documentObject[key][0].path;
    }

    const newUdyamCertificateData = new UdyamCertificateModel(
      UdyamCertificateData
    );

    const savedResponse = await newUdyamCertificateData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForFoodLisence = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }
    
    const E_ID = await UdyamCertificateModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    var L_ID= 1000110001;
    if (E_ID != 0) {
      L_ID = E_ID[0].L_ID + 1;
    }

    const documentObject = req.files;

    const FoodLisenceData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
      L_ID: L_ID,
    };

    for (const key in documentObject) {
      FoodLisenceData[key] = documentObject[key][0].path;
    }

    const newFoodLisenceData = new FoodLisenceModel(FoodLisenceData);

    const savedResponse = await newFoodLisenceData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getHomeLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await HomeLoanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await BusinessloanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await PersonalLoanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await MortgageLoanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await GoldLoanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await CreditCardModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCarLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await CarLoanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getNewCorrectionPanApplicationForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await NewCorrectionPanApplicationModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPassportForEmplyoee = async (req, resp) => {
  try {
    const savedMyLead = await PassportModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGSTRegistrationForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await GSTResgistraionModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getShopActForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await ShopActModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getUdyamCertificateForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await UdyamCertificateModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getFoodLisenceForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await FoodLisenceModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};


export const editHomeLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await HomeLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editBusinessLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await BusinessloanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editPersonalLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await PersonalLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editMortgageLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await MortgageLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editGoldLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await GoldLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );
    console.log(updatedResponse);
    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editCreditCardServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await CreditCardModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editCarLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await CarLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editNewCorrectionPanApplication = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await NewCorrectionPanApplicationModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editPassportServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await PassportModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editGSTRegistrationController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await GSTResgistraionModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editShopActController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await ShopActModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editUdyamCertificateController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await UdyamCertificateModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editFoodLisenceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    if (!valueToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "No Files are Given to store" });
    }

    const updatedResponse = await FoodLisenceModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit.path } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

// UPDATE SUCCESS, FAILED AND PANDING CONTROLLER
export const editHomeLoanServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await HomeLoanModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editBusinessLoanServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await BusinessloanModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editPersonalLoanServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await PersonalLoanModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editMortgageLoanServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await MortgageLoanModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editGoldLoanServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await GoldLoanModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );
    console.log(updatedResponse);
    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editCreditCardServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await CreditCardModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editCarLoanServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await CarLoanModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editNewCorrectionPanApplicationFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await NewCorrectionPanApplicationModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editPassportServiceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await PassportModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editGSTRegistrationControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await GSTResgistraionModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editShopActControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await ShopActModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editUdyamCertificateControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await UdyamCertificateModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editFoodLisenceControllerFPS = async (req, res) => {
  try {
    const {LoanId} = req.query
    const updatedResponse = await FoodLisenceModel.findByIdAndUpdate(
      LoanId,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};


export const getHomeLoanLeadById = async (req, res) => {
  try {
    const { homeleadID } = req.query;

    if (!homeleadID) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedHomeLoan = await HomeLoanModel.findById(homeleadID).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedHomeLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedHomeLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanById = async (req, res) => {
  try {
    const { personalLoanId } = req.query;

    if (!personalLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedPersonalLoan = await PersonalLoanModel.findById(
      personalLoanId
    ).populate(["service", "client", "employee"]);

    if (!savedPersonalLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedPersonalLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanById = async (req, res) => {
  try {
    const { businessLoanId } = req.query;

    if (!businessLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedBusinessLoan = await BusinessloanModel.findById(
      businessLoanId
    ).populate(["service", "client", "employee"]);

    if (!savedBusinessLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedBusinessLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanById = async (req, res) => {
  try {
    const { mortgageLoanId } = req.query;

    if (!mortgageLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedMortgageLoan = await MortgageLoanModel.findById(
      mortgageLoanId
    ).populate(["service", "client", "employee"]);

    if (!savedMortgageLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedMortgageLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanById = async (req, res) => {
  try {
    const { goldLoanId } = req.query;

    if (!goldLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedGoldLoan = await GoldLoanModel.findById(goldLoanId).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedGoldLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedGoldLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardById = async (req, res) => {
  try {
    const { creditCardId } = req.query;

    if (!creditCardId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedCreditCard = await CreditCardModel.findById(
      creditCardId
    ).populate(["service", "client", "employee"]);

    if (!savedCreditCard) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedCreditCard,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCarLoanById = async (req, res) => {
  try {
    const { carLoanId } = req.query;

    if (!carLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedCarLoan = await CarLoanModel.findById(carLoanId).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedCarLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedCarLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getNewCorrectionPanApplicationbyId = async (req, res) => {
  try {
    const { newCorrectionPanApplicationId } = req.query;

    if (!newCorrectionPanApplicationId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedNewCcrrectionPanApplication =
      await NewCorrectionPanApplicationModel.findById(
        newCorrectionPanApplicationId
      ).populate(["service", "client", "employee"]);

    if (!savedNewCcrrectionPanApplication) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedNewCcrrectionPanApplication,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPassportById = async (req, res) => {
  try {
    const { passportById } = req.query;

    if (!passportById) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedPassport = await PassportModel.findById(passportById).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedPassport) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedPassport,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGSTRegistrationById = async (req, res) => {
  try {
    const { GSTRegistrationId } = req.query;

    if (!GSTRegistrationId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedGSTResgistration = await GSTResgistraionModel.findById(
      GSTRegistrationId
    ).populate(["service", "client", "employee"]);

    if (!savedGSTResgistration) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedGSTResgistration,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getShopActById = async (req, res) => {
  try {
    const { shopActId } = req.query;

    if (!shopActId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedShopAct = await ShopActModel.findById(shopActId).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedShopAct) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedShopAct,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getUdyamCertificateById = async (req, res) => {
  try {
    const { UdyamCertificateId } = req.query;

    if (!UdyamCertificateId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedUdyamCertificate = await UdyamCertificateModel.findById(
      UdyamCertificateId
    ).populate(["service", "client", "employee"]);

    if (!savedUdyamCertificate) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedUdyamCertificate,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getFoodLisencebyId = async (req, res) => {
  try {
    const { foodlisenceById } = req.query;

    if (!foodlisenceById) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedFoodLisence = await FoodLisenceModel.findById(
      foodlisenceById
    ).populate(["service", "client", "employee"]);

    if (!savedFoodLisence) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedFoodLisence,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

// get leads by mobile number

export const getHomeLoanLeadByMobileNo = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedHomeLoan = await HomeLoanModel.find({ employee: req.user._id })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedHomeLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedBusinessLoan = await BusinessloanModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedBusinessLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedPersonalLoan = await PersonalLoanModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedPersonalLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedMortgageLoan = await MortgageLoanModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedMortgageLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedMortgageLoan = await GoldLoanModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedMortgageLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardByMobile = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedCreditCard = await CreditCardModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedCreditCard.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCarLoanByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedCarLoan = await CarLoanModel.find({ employee: req.user._id })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedCarLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getNewCorrectionPanApplicationbyMobileNumber = async (
  req,
  res
) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedNewCcrrectionPanApplication =
      await NewCorrectionPanApplicationModel.find({ employee: req.user._id })
        .populate(["service", "client", "employee"])
        .exec();

    const matchingEmployee = savedNewCcrrectionPanApplication.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPassportByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedPassport = await PassportModel.find({ employee: req.user._id })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedPassport.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGSTRegistrationByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedGSTResgistration = await GSTResgistraionModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedGSTResgistration.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getShopActByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedShopAct = await ShopActModel.find({ employee: req.user._id })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedShopAct.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getUdyamCertificateByMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedUdyamCertificate = await UdyamCertificateModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedUdyamCertificate.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getFoodLisencebyMobileNumber = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedFoodLisence = await FoodLisenceModel.find({
      employee: req.user._id,
    })
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedFoodLisence.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

// get lead for admin

export const getHomeLoanForAdmin = async (req, res) => {
  try {
    const savedHomeLoan = await HomeLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedHomeLoan < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedHomeLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanForAdmin = async (req, res) => {
  try {
    const savedBusinessLoan = await BusinessloanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedBusinessLoan < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedBusinessLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanForAdmin = async (req, res) => {
  try {
    const savedPersonalLoan = await PersonalLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedPersonalLoan < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedPersonalLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanForAdmin = async (req, res) => {
  try {
    const savedMortgageLoan = await MortgageLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedMortgageLoan < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedMortgageLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanForAdmin = async (req, res) => {
  try {
    const savedGoldLoan = await GoldLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedGoldLoan < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedGoldLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardForAdmin = async (req, res) => {
  try {
    const savedCreditCard = await CreditCardModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedCreditCard < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedCreditCard,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCarLoanByForAdmin = async (req, res) => {
  try {
    const savedCarLoan = await CarLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedCarLoan < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedCarLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getNewCorrectionPanApplicationForAdmin = async (req, res) => {
  try {
    const savedNewCorrectionPanApplication =
      await NewCorrectionPanApplicationModel.find({})
        .populate(["service", "client", "employee"])
        .exec();

    if (savedNewCorrectionPanApplication < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedNewCorrectionPanApplication,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGSTRegistrationByForAdmin = async (req, res) => {
  try {
    const savedGSTRegistration = await GSTResgistraionModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedGSTRegistration < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedGSTRegistration,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPassportForAdmin = async (req, res) => {
  try {
    const savedPassport = await PassportModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedPassport < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedPassport,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getShopActForAdmin = async (req, res) => {
  try {
    const savedShopAct = await ShopActModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedShopAct < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedShopAct,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getUdyamCertificateForAdmin = async (req, res) => {
  try {
    const savedUdyamCertificate = await UdyamCertificateModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedUdyamCertificate < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedUdyamCertificate,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getFoodLisenceForAdmin = async (req, res) => {
  try {
    const savedFoodLisence = await FoodLisenceModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    if (savedFoodLisence < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no data found in database" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: savedFoodLisence,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

// get lead by mobile number to admin

export const getHomeLoanLeadByMobileNoForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedHomeLoan = await HomeLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedHomeLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedBusinessLoan = await BusinessloanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedBusinessLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedPersonalLoan = await PersonalLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedPersonalLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedMortgageLoan = await MortgageLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedMortgageLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedMortgageLoan = await GoldLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedMortgageLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardByMobileForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedCreditCard = await CreditCardModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedCreditCard.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCarLoanByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedCarLoan = await CarLoanModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedCarLoan.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getNewCorrectionPanApplicationbyMobileNumberForAdmin = async (
  req,
  res
) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedNewCcrrectionPanApplication =
      await NewCorrectionPanApplicationModel.find({})
        .populate(["service", "client", "employee"])
        .exec();

    const matchingEmployee = savedNewCcrrectionPanApplication.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPassportByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedPassport = await PassportModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedPassport.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGSTRegistrationByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedGSTResgistration = await GSTResgistraionModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedGSTResgistration.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getShopActByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedShopAct = await ShopActModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedShopAct.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getUdyamCertificateByMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedUdyamCertificate = await UdyamCertificateModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedUdyamCertificate.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getFoodLisencebyMobileNumberForAdmin = async (req, res) => {
  try {
    const { mobileNo } = req.query;

    if (!mobileNo) {
      return res.status(422).json({
        status: false,
        message: "mobile number is not giving in query",
      });
    }

    const queryString = mobileNo.toString();
    const regex = new RegExp(queryString, "i");

    const savedFoodLisence = await FoodLisenceModel.find({})
      .populate(["service", "client", "employee"])
      .exec();

    const matchingEmployee = savedFoodLisence.filter((curr) => {
      let mobileNumber = curr.client.phone;
      if (regex.test(mobileNumber)) {
        return curr;
      }
    });

    if (matchingEmployee.length < 1) {
      return res
        .status(201)
        .json({ status: false, message: "There is no data with this number" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched data",
      response: matchingEmployee,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferHomeLoanLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await HomeLoanModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferBusinessLoanLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await BusinessloanModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferPersonalLoanLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await PersonalLoanModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferMortgageLoanLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await MortgageLoanModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferGoldLoanLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await GoldLoanModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferCreditCardLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    console.log(leadId, employeeId)

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await CreditCardModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferCarLoanLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await CarLoanModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferGSTLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await GSTResgistraionModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferPassportLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await PassportModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferNewCorrectionPanApplicatonLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await NewCorrectionPanApplicationModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferShopActLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await ShopActModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferUdyamCertificate = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await UdyamCertificateModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const transferFoodLisenceLead = async (req, res) => {
  try {
    const { leadId, employeeId } = req.query;

    if (!leadId || !employeeId) {
      return res.status(422).json({
        status: false,
        message: "leadId or employeeId is not given to transfer",
      });
    }

    const transferLead = await FoodLisenceModel.updateOne(
      { _id: leadId },
      { $set: { employee: employeeId } }
    );

    if (transferLead.acknowledged) {
      return res.status(201).json({
        status: false,
        message: "successfully transferred lead to another employee",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
