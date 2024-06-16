const express = require("express");
const router = express.Router();
const messegerControllers = require("../controller/MessegerControllers");

router.get("/", messegerControllers.index);
router.post("/create", messegerControllers.createData);
router.get("/fetch-all", messegerControllers.getAll);
router.get("/:id", messegerControllers.getByID); // Perbaiki rute ini
// router.get("user/:id", messegerControllers.getByUserID); // Aktifkan jika diperlukan
router.put("/update", messegerControllers.updatedData); // Perbaiki rute ini
router.delete("/delete", messegerControllers.deleteData);
router.post("/selected-chat", messegerControllers.getSelectedChat);

module.exports = router;