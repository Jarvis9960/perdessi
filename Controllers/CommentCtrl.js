import CommentModel from "../Models/CommentInLead.js";

export const createCommentForLead = async (req, res) => {
  try {
    const { leadId, comment, leadModel } = req.body;
    // || !leadModel
    if (!leadId || !comment  ) {
      return res
        .status(422)
        .json({ status: false, message: "Please provide leadid or comment" });
    }

    const employee = req.user;

    if (!employee) {
      return res
        .status(401)
        .json({ status: false, message: "User is not authorized" });
    }

    const newComment = new CommentModel({
      LeadId: leadId,
      LeadModel: leadModel,
      Employee: employee,
      Comment: comment,
    });

    const savedResponse = await newComment.save();

    if (savedResponse) {
      return res.status(201).json({
        status: true,
        message: "comment added to lead",
        response: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCommentByLeadid = async (req, res) => {
  try {
    const { leadId } = req.query;

    if (!leadId) {
      return res
        .status(422)
        .json({ status: false, message: "leadid is not given for query" });
    }

    const savedComment = await CommentModel.find({ LeadId: leadId }).populate("Employee");

    if (savedComment < 1) {
      return res
        .status(404)
        .json({ status: false, message: "no comment are given to this lead" });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched comment",
      response: savedComment,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
