const xlsx = require("xlsx");
const Expense = require("../models/Expense")

// addExpense
exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try{
        const {icon, category, amount, date} = req.body;

        // validation check

        if(!category || !amount || !date){
            return res.status(400).json({ message: "All fields are required" });
        }

        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpense.save();
        res.status(200).json(newExpense);
    } catch (error){
        res.status(500).json({message:"Server Error", error: error.message});
    }
}

// getAllExpense
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try{
        const expense = await Expense.find({userId}).sort({date: -1});
        res.json(expense);
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
}

//deleteExpense
exports.deleteExpense = async (req, res) => {

    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message: "Expense deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
}

// downloadExpenseExcel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;

    try{
        const expense = await Expense.find({userId}).sort({date: -1});

        //Prepare data for excel
        const data = expense.map((item) => ({
            Category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws, "Expense");
        xlsx.writeFile(wb,"Expense_details.xlsx");
        res.download("Expense_details.xlsx");
    } catch (error) {
        res.status(500).json({message:"Server Error"});
    }
}