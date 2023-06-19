import HomeLoanModel from "../Models/HomeloanModel.js";
import BusinessLoanModel from "../Models/BusinessloanModel.js";
import PersonalLoanModel from "../Models/PersonalLoanModel.js";
import MortgageLoanModel from "../Models/MortgageLoanModel.js";
import GoldLoanModel from "../Models/GoldLoanModel.js";
import CreditCardModel from "../Models/CreditCardModel.js";
import CarLoanModel from "../Models/CarLoanModel.js";
import GSTLoanModel from "../Models/GSTRegistrationModel.js";
import NewCorrectionPanApplicationModel from "../Models/NewCorrectionPanApplication.js";
import PassportModel from "../Models/PassportModel.js";
import ShopActModel from "../Models/ShopActModel.js";
import UdyamCertificateModel from "../Models/UdyamCertificationModel.js";
import FoodLisenceModel from "../Models/FoodLisenceModel.js";
import { employeeModel } from "../Models/EmpolyeeModel.js";

export const dashboardForTotolNumberofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofDocumentForAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({}).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find(
      {}
    ).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find(
      {}
    ).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find(
      {}
    ).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({}).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find(
      {}
    ).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({}).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({}).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find(
      {}
    ).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({}).countDocuments();
    const savedShopActDocument = await ShopActModel.find({}).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find(
      {}
    ).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find(
      {}
    ).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofSuccessDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isSuccess: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isSuccess: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isSuccess: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofFailedDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isFailed: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isFailed: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isFailed: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isFailed: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isFailed: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isFailed: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isFailed: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofPendingDocumentForAdmin = async (
  req,
  res
) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      isPending: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      isPending: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      isPending: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        isPending: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      isPending: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      isPending: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      isPending: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberSuccessofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isSuccess: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isSuccess: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberFailedofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isFailed: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isFailed: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberPendingofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isPending: true,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isPending: true,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const totalLeadForParticularEmployee = async (req, res) => {
  try {
    const { currentUserId } = req.query;

    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }

    if (!currentUserId) {
      return res
        .status(401)
        .json({ status: false, message: "No Id is present to query" });
    }

    const homeLoanLeadCount = await HomeLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const businessLoanLeadCount = await BusinessLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const personalLoanLeadCount = await PersonalLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const mortgageLoanLeadCount = await MortgageLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const goldLoanLeadCount = await GoldLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const creditLoanLeadCount = await CreditCardModel.find({
      employee: currentUserId,
    }).countDocuments();
    const carLoanLeadCount = await CarLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const gstLoanLeadCount = await GSTLoanModel.find({
      employee: currentUserId,
    }).countDocuments();
    const passportLoanLeadCount = await PassportModel.find({
      employee: currentUserId,
    }).countDocuments();
    const newCorrectionPanApplicationCount =
      await NewCorrectionPanApplicationModel.find({
        employee: currentUserId,
      }).countDocuments();
    const shopActLeadCount = await ShopActModel.find({
      employee: currentUserId,
    }).countDocuments();
    const udyamCertificateLoanLeadCount = await UdyamCertificateModel.find({
      employee: currentUserId,
    }).countDocuments();
    const foodLisenceLoanLeadCount = await FoodLisenceModel.find({
      employee: currentUserId,
    }).countDocuments();

    return res.status(202).json({
      status: true,
      message: "successfully fetched lead count for particular employee",
      homeLoanLeadCount,
      businessLoanLeadCount,
      personalLoanLeadCount,
      mortgageLoanLeadCount,
      creditLoanLeadCount,
      goldLoanLeadCount,
      carLoanLeadCount,
      gstLoanLeadCount,
      passportLoanLeadCount,
      newCorrectionPanApplicationCount,
      shopActLeadCount,
      udyamCertificateLoanLeadCount,
      foodLisenceLoanLeadCount,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const totalMISreport = async (req, res) => {
  try {
    // For All Lead 
    const homeLoanLeadCount = await HomeLoanModel.find({}).countDocuments();
    const businessLoanLeadCount = await BusinessLoanModel.find({}).countDocuments();
    const personalLoanLeadCount = await PersonalLoanModel.find({}).countDocuments();
    const mortgageLoanLeadCount = await MortgageLoanModel.find({}).countDocuments();
    const goldLoanLeadCount = await GoldLoanModel.find({}).countDocuments();
    const creditLoanLeadCount = await CreditCardModel.find({}).countDocuments();
    const carLoanLeadCount = await CarLoanModel.find({}).countDocuments();
    const gstLoanLeadCount = await GSTLoanModel.find({}).countDocuments();
    const passportLoanLeadCount = await PassportModel.find({}).countDocuments();
    const newCorrectionPanApplicationCount =
      await NewCorrectionPanApplicationModel.find({
      }).countDocuments();
    const shopActLeadCount = await ShopActModel.find({}).countDocuments();
    const udyamCertificateLoanLeadCount = await UdyamCertificateModel.find({}).countDocuments();
    const foodLisenceLoanLeadCount = await FoodLisenceModel.find({}).countDocuments();

// For Total Amount76

    let hLLA = await HomeLoanModel.find({})
      let homeLoanLeadAmout = 0
      for (let index = 0; index < hLLA.length; index++) {
        homeLoanLeadAmout = homeLoanLeadAmout + hLLA[index].LoanAmount;
      }
    let BLLA = await BusinessLoanModel.find({})
    let businessLoanLeadAmout = 0
    for (let index = 0; index < BLLA.length; index++) {
      businessLoanLeadAmout = businessLoanLeadAmout + BLLA[index].LoanAmount;
    }

    let PLLA = await PersonalLoanModel.find({})
    let personalLoanLeadAmout = 0
    for (let index = 0; index < PLLA.length; index++) {
      personalLoanLeadAmout = personalLoanLeadAmout + PLLA[index].LoanAmount;
    }

    let MLLA = await MortgageLoanModel.find({})
    let mortgageLoanLeadAmout = 0
    for (let index = 0; index < MLLA.length; index++) {
      mortgageLoanLeadAmout = mortgageLoanLeadAmout + MLLA[index].LoanAmount;
    }

    let GLLA = await GoldLoanModel.find({})
    let goldLoanLeadAmout = 0
    for (let index = 0; index < GLLA.length; index++) {
      goldLoanLeadAmout = goldLoanLeadAmout + GLLA[index].LoanAmount;
    }

    let CLLA = await CreditCardModel.find({})
    let creditLoanLeadAmout = 0
    for (let index = 0; index < CLLA.length; index++) {
      creditLoanLeadAmout = creditLoanLeadAmout + CLLA[index].LoanAmount;
    }

    let CLA = await CarLoanModel.find({})
    let carLoanLeadAmout = 0
    for (let index = 0; index < CLA.length; index++) {
      carLoanLeadAmout = carLoanLeadAmout + CLA[index].LoanAmount;
    }
    let GLA = await GSTLoanModel.find({})
    let gstLoanLeadAmout = 0
    for (let index = 0; index < GLA.length; index++) {
      gstLoanLeadAmout = gstLoanLeadAmout + GLA[index].LoanAmount;
    }

    let PLA = await PassportModel.find({})
    let passportLoanLeadAmout = 0
    for (let index = 0; index < PLLA.length; index++) {
      passportLoanLeadAmout = passportLoanLeadAmout + PLLA[index].LoanAmount;
    }
    let NCPA = await NewCorrectionPanApplicationModel.find({})
    let newCorrectionPanApplication = 0
    for (let index = 0; index < NCPA.length; index++) {
      newCorrectionPanApplication = newCorrectionPanApplication + NCPA[index].LoanAmount;
    }

    let SALA = await ShopActModel.find({})
    let shopActLeadAmout = 0
    for (let index = 0; index < SALA.length; index++) {
      shopActLeadAmout = shopActLeadAmout + SALA[index].LoanAmount;
    }
    let UCLA = await UdyamCertificateModel.find({})
    let udyamCertificateLoanLeadAmout = 0
    for (let index = 0; index < UCLA.length; index++) {
      udyamCertificateLoanLeadAmout = udyamCertificateLoanLeadAmout + UCLA[index].LoanAmount;
    }
    let FLLA = await FoodLisenceModel.find({})
    let foodLisenceLoanLeadAmout = 0
    for (let index = 0; index < FLLA.length; index++) {
      foodLisenceLoanLeadAmout = foodLisenceLoanLeadAmout + FLLA[index].LoanAmount;
    }
    

    return res.status(202).json({
      status: true,
      message: "successfully fetched lead count for particular employee",
      data: {
        homeLoan : { homeLoanLeadCount, homeLoanLeadAmout },
        businessLoan : { businessLoanLeadCount, businessLoanLeadAmout },
        personalLoan : { personalLoanLeadCount, personalLoanLeadAmout },
        mortgageLoan : { mortgageLoanLeadCount, mortgageLoanLeadAmout },
        creditLoan : { creditLoanLeadCount, creditLoanLeadAmout },
        goldLoan : { goldLoanLeadCount, goldLoanLeadAmout },
        carLoan : { carLoanLeadCount, carLoanLeadAmout },
        gstLoan : { gstLoanLeadCount, gstLoanLeadAmout },
        passportLoan : { passportLoanLeadCount, passportLoanLeadAmout },
        newCorrectionPanApplica : { newCorrectionPanApplicationCount, newCorrectionPanApplication },
        shopAct : { shopActLeadCount, shopActLeadAmout },
        udyamCertificateLoan : { udyamCertificateLoanLeadCount, udyamCertificateLoanLeadAmout },
        foodLisenceLoan : { foodLisenceLoanLeadCount, foodLisenceLoanLeadAmout },
      }
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const totalEmployeeAndLead = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }

    const totalEmployee = await employeeModel.find({

    });
    const totalEmployeeCount = await employeeModel.find({

    }).countDocuments();

    let misObject = [];

    for (let index = 0; index < totalEmployee.length; index++) {
      const homeLoanLeadCount = await HomeLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const businessLoanLeadCount = await BusinessLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const personalLoanLeadCount = await PersonalLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const mortgageLoanLeadCount = await MortgageLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const goldLoanLeadCount = await GoldLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const creditLoanLeadCount = await CreditCardModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const carLoanLeadCount = await CarLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const gstLoanLeadCount = await GSTLoanModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const passportLoanLeadCount = await PassportModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const newCorrectionPanApplicationCount =
        await NewCorrectionPanApplicationModel.find({
          employee: totalEmployee[index]._id,
        }).countDocuments();
      const shopActLeadCount = await ShopActModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const udyamCertificateLoanLeadCount = await UdyamCertificateModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();
      const foodLisenceLoanLeadCount = await FoodLisenceModel.find({
        employee: totalEmployee[index]._id,
      }).countDocuments();

      const newobj = {
        employeeName: `${totalEmployee[index].first_name} ${totalEmployee[index].last_name}`,
        employee_Id: `${totalEmployee[index].employeeid}`,
        homeLoanLeadCount: homeLoanLeadCount,
        businessLoanLeadCount: businessLoanLeadCount,
        personalLoanLeadCount: personalLoanLeadCount,
        mortgageLoanLeadCount: mortgageLoanLeadCount,
        goldLoanLeadCount: goldLoanLeadCount,
        creditLoanLeadCount: creditLoanLeadCount,
        passportLoanLeadCount: passportLoanLeadCount,
        carLoanLeadCount: carLoanLeadCount,
        gstLoanLeadCount: gstLoanLeadCount,
        udyamCertificateLoanLeadCount: udyamCertificateLoanLeadCount,
        shopActLeadCount: shopActLeadCount,
        foodLisenceLoanLeadCount: foodLisenceLoanLeadCount,
        newCorrectionPanApplicationCount: newCorrectionPanApplicationCount,
      };

      misObject.push(newobj);
    }

    if (misObject.length < 1) {
      return res.status(404).json({
        status: false,
        message: "No data is present to sent as a response",
      });
    }

    return res.status(202).json({
      status: true,
      message: "sucessfully fetched mis report",
      response: misObject,
      totalEmployeeCount: totalEmployeeCount,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
