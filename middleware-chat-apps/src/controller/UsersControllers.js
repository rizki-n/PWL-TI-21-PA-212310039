const { Users } = require("../../models");

console.log("Users model:", Users); // Tambahkan logging ini

exports.createData = async (req, res) => {
  const payloadData = req.body;
  try {
    const results = await Users.create(payloadData);
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed create a new data",
      },
      errors: error.errors,
    });
  }
};

exports.index = async (req, res) => {
  res.json({
    status: 200,
    message: "prefix for end-point users",
  });
};

exports.getAll = async (req, res) => {
  // Tambahkan metode ini
  try {
    const results = await Users.findAll();
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
  const user_id = req.params.id;
  try {
    const results = await Users.findByPk(user_id);
    res.json({
      status: 200,
      data: results,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed retrieve data",
      },
      errors: error.errors,
    });
  }
};

exports.updatedData = async (req, res) => {
  const payloadData = req.body;
  try {
    const results = await Users.update(payloadData, {
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
        user: "Failed retrieve data",
      },
      errors: error.errors,
    });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.body;
  try {
    var message = "";
    const delete_user = await Users.destroy({ where: { id } });
    if (delete_user) {
      message = "Successfully removed";
    }
    res.json({
      status: 200,
      message: message,
    });
  } catch (error) {
    res.json({
      status: 502,
      message: {
        internal: error.message,
        user: "Failed remove data",
      },
      errors: error.errors,
    });
  }
};

// const { Users } = require("../../models");

// exports.createData = async (req, res) => {
//   const payloadData = req.body;
//   try {
//     const results = await Users.create(payloadData);
//     res.json({
//       status: 200,
//       data: results,
//     });
//   } catch (error) {
//     res.json({
//       status: 502,
//       message: {
//         internal: error.message,
//         user: "Failed create a new data",
//       },
//       errors: error.errors,
//     });
//   }
// };

// exports.index = async (req, res) => {
//   res.json({
//     status: 200,
//     message: "prefix for end-poin users",
//   });
// };

// exports.getByID = async (req, res) => {
//   const user_id = req.params.id;
//   try {
//     const results = await Users.findByPk(user_id);
//     res.json({
//       status: 200,
//       data: results,
//     });
//   } catch (error) {
//     res.json({
//       status: 502,
//       message: {
//         internal: error.message,
//         user: "Failed retrive data",
//       },
//       errors: error.errors,
//     });
//   }
// };

// exports.updatedData = async (req, res) => {
//   const payloadData = req.body;
//   try {
//     const results = await Users.update(payloadData, {
//       where: {
//         id: payloadData.id,
//       },
//     });
//     res.json({
//       status: 200,
//       data: results,
//     });
//   } catch (error) {
//     res.json({
//       status: 502,
//       message: {
//         internal: error.message,
//         user: "Failed retrive data",
//       },
//       errors: error.errors,
//     });
//   }
// };

// exports.deleteData = async (req, res) => {
//   const { id } = req.body;
//   try {
//     var message = "";
//     const delete_user = await Users.destroy({ where: { id } });
//     if (delete_user) {
//       message = "Successfully removed";
//     }
//     res.json({
//       status: 200,
//       message: message,
//     });
//   } catch (error) {
//     res.json({
//       status: 502,
//       message: {
//         internal: error.message,
//         user: "Failed remove data",
//       },
//       errors: error.errors,
//     });
//   }
// };
