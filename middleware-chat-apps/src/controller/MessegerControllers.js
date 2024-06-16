
const { Messegers } = require("../../models");

exports.index = async (req, res) => {
  res.json({
    status: 200,
    message: "prefix for end-point messenger",
  });
};

exports.createData = async (req, res) => {
  const payloadData = req.body;
  try {
    const results = await Messegers.create(payloadData);
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "error creating message",
      },
      errors: error.errors,
    });
  }
};

const { Sequelize, sequelize, Users } = require("../../models");

// Example handling error in getAll function
exports.getAll = async (req, res) => {
  try {
    const results = await Messegers.findAll({
      include: [
        { model: Users, as: "Sender" },
        { model: Users, as: "Receiver" },
      ],
    });
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed to retrieve data",
      },
      errors: error.errors,
    });
  }
};

exports.getByID = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Messegers.findByPk(id, {
      include: [
        { model: Users, as: "Sender" },
        { model: Users, as: "Receiver" },
      ],
    });
    res.json({
      status: 200,
      data: result,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "failed retrieve data",
      },
      errors: error.errors,
    });
  }
};

exports.updatedData = async (req, res) => {
  const payloadData = req.body;
  try {
    const results = await Messegers.update(payloadData, {
      where: {
        id: payloadData.id,
      },
    });
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "failed update data",
      },
      errors: error.errors,
    });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.body;
  try {
    const delete_message = await Messegers.destroy({ where: { id } });
    res.json({
      status: 200,
      message: delete_message ? "Successfully removed" : "Failed to remove",
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "failed remove data",
      },
      errors: error.errors,
    });
  }
};

exports.getSelectedChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const results = await Messegers.findAll({
      where: {
        senderId,
        receiverId,
      },
    });
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "failed retrieve selected chat",
      },
      errors: error.errors,
    });
  }
};
