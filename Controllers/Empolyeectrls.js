import { employeeModel } from "../Models/EmpolyeeModel.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const getallemployee = async (req, resp) => {
  try {
    const fetchdata = await employeeModel.find({}).sort({'createdAt': 'desc'}).select("-password");
    resp.status(200).send({
      fetchdata: fetchdata,
    });
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Customer Data Not Fatched Yet",
      fetchdata,
    });
  }
};

export const getEmpolyeeID = async (req, resp) => {
  try {
    const fetchdata = await employeeModel
      .findOne({ _id: req.user._id })
      .select("-password");
    resp.status(200).send({
      fetchdata: fetchdata,
    });
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Customer Data Not Fatched Yet",
      fetchdata,
    });
  }
};

export const getEmpolyeebyNum = async (req, resp) => {
  try {
    
    const { employeeId } = req.query;

    if (!employeeId) {
      return resp
        .status(422)
        .json({ status: false, message: "Empolyee ID is not giving" });
    }
    const fetchdata = await employeeModel
      .findOne({ employeeid : employeeId })
      .select("-password");
    resp.status(200).send({
      fetchdata: fetchdata,
    });
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Customer Data Not Fatched Yet",
      fetchdata,
    });
  }
};

export const getEmpolyeeIDforadmin = async (req, resp) => {
  try {
    const fetchdata = await employeeModel
      .findOne({ _id: req.params.id })
      .select("-password");
    resp.status(200).send({
      fetchdata: fetchdata,
    });
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Customer Data Not Fatched Yet",
      fetchdata,
    });
  }
};

export const addemployee = async (req, resp) => {
  try {
    const already = await employeeModel.findOne({ email: req.body.email });
    if (already) {
      resp.status(200).send({
        success: false,
        message: "Empolyee exist",
      });
    } else {
      if (req.body.password) {
        // Hashing password
        let passw = req.body.password;
        const hashedPassword = await bcrypt.hash(passw, 10);
        req.body.password = hashedPassword;
      } else {
        let passw = "perdessi123";
        const hashedPassword = await bcrypt.hash(passw, 10);
        req.body.password = hashedPassword;
      }
      const E_ID = await employeeModel.find({}).sort({'createdAt': 'desc'}).select("-password");
      req.body.employeeid= E_ID[0].employeeid + 1;

      const Createdata = await employeeModel.create(req.body);
      resp.status(200).send({
        success: true,
        message: "Empolyee Created",
        Createdata,
      });
    }
  } catch (error) {
    console.log(error);
    resp.status(500).send({
      success: false,
      message: "Empolyee Not Created Yet",
    });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.query;

    if (!employeeId) {
      return res
        .status(422)
        .json({ status: false, message: "employee id not given" });
    }

    const savedEmployee = await employeeModel.findById(employeeId);

    if (!savedEmployee) {
      return res
        .status(422)
        .json({
          status: false,
          message: "There is no data present in database",
        });
    }

    return res
      .status(201)
      .json({
        status: true,
        message: "successfully fetched employee",
        response: savedEmployee,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(501)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const employeelogin = async (req, resp) => {
  try {
    //  checking your exist or not
    const user = await employeeModel.findOne({ email: req.body.email });
    if (!user) {
      return resp.status(422).json({
        success: false,
        message: "Email not exist",
      });
    }

    // password compare or not
    const compare = await bcrypt.compare(req.body.password, user.password);
    if (!compare) {
      return resp.status(422).json({
        success: false,
        message: "Incorrect password or email",
      });
    }

    const expireTokenDate = new Date();
    expireTokenDate.setDate(expireTokenDate.getDate() + 1);

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    return resp.status(201).json({
      success: true,
      message: "Login successfully",
      role: user.role,
      Token: {
        usertoken: token,
        expiry: expireTokenDate,
      },
    });
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "API is not Working",
    });
  }
};

export const updatepass = async (req, resp) => {
  try {
    const passw = req.body.password;
    const hashedPassword = await bcrypt.hash(passw, 10);
    req.body.password = hashedPassword;

    const password = await employeeModel.findByIdAndUpdate(
      { _id: req.params.id },
      { password: req.body.password }
    );

    if (password) {
      resp.status(200).send({
        success: true,
        message: "password updated",
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "API is not Working",
    });
  }
};
export const updateempolyeedata = async (req, resp) => {
  console.log(req.body)
  try {
    const already = await employeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (already) {
      return resp.status(200).send({
        Succes: true,
        already,
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Data Not Fatched",
    });
  }
};
