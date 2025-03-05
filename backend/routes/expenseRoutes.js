const express = require("express");

const {addExpense, getAllExpense, deleteExpense, downloadExpenseExcel} = require("../controllers/ExpenseController")

const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/add",protect,addExpense);
router.get("/get",protect,getAllExpense);
router.delete("/:id",protect,deleteExpense);
router.get("/downloadExcel",protect,downloadExpenseExcel);

module.exports = router;