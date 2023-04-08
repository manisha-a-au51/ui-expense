import jwt from "jsonwebtoken";
import User from '../models/User.js';
import mongodb from "mongodb"

const findUser = async(authorization) => {
    const decoded = JSON.parse(Buffer.from(authorization.split('.')[1], 'base64').toString())
    // console.log(decoded)
    var id = new mongodb.ObjectId(decoded.id);
    const user = await User.findById({ '_id': id }).exec();
    return user
}

export const getExpenses = async (req,res) =>{
    const token = req.headers.authorization
    let user = await findUser(token)
    res.status(201).json(user.expenses)
}

export const addExpenses = async (req,res) =>{
    const token = req.headers.authorization
    let user = await findUser(token)
    user.expenses.push(req.body)
     user.save()
    //  console.log(user.expenses)
     
    res.status(201).json(user.expenses)
}

export const analyticsData = async (req,res) =>{
    const token = req.headers.authorization
    let user = await findUser(token)
    let rent = 0
    let utilities = 0
    let groceries = 0
    let emis = 0
    let medical=0
    let Insurance=0
    let Entertainment=0
    let educational=0
    let personal=0
    console.log(user.expenses,"--------")
    user.expenses.map(item => {
        if(item.typeOfExpense === "Rent") {
            rent = rent + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Utilities") {
            utilities = utilities + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Groceries") {
            groceries = groceries + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "EMIs") {
            emis = emis + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Medical") {
            medical= medical+ parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Insurance") {
            Insurance = Insurance + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Entertainment") {
            Entertainment = Entertainment + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Personal") {
            personal = personal + parseInt(item.expense)
        }    
        else if(item.typeOfExpense === "Education") {
            educational = educational + parseInt(item.expense)
        }
        
    })
    let data = []
    data.push(rent)
    data.push(utilities)
    data.push(groceries)
    data.push(emis)
    data.push(medical)
    data.push(Insurance)
    data.push(Entertainment)
    data.push(personal)
    data.push(educational)
    
    res.status(201).json(data)
}


export const filteredAnalyticsData = async (req,res) =>{
    const token = req.headers.authorization
    let user = await findUser(token)
    let rent = 0
    let utilities = 0
    let groceries = 0
    let emis = 0
    let medical=0
    let Insurance=0
    let Entertainment=0
    let educational=0
    let personal=0
    // console.log(req.query.month, user.expenses)
    user.expenses.map(item => {
        if(item.typeOfExpense === "Rent" && req.query.month === item.month) {
            rent = rent + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Utilities" && req.query.month === item.month) {
            utilities = utilities + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Groceries" && req.query.month === item.month) {
            groceries = groceries + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "EMIs" && req.query.month === item.month) {
            emis = emis + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Medical" && req.query.month === item.month) {
            medical= medical+ parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Insurance" && req.query.month === item.month) {
            Insurance = Insurance + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Entertainment" && req.query.month === item.month) {
            Entertainment = Entertainment + parseInt(item.expense)
        }
        else if(item.typeOfExpense === "Personal" && req.query.month === item.month) {
            personal = personal + parseInt(item.expense)
        }    
        else if(item.typeOfExpense === "Education" && req.query.month === item.month) {
            educational = educational + parseInt(item.expense)
        }
    })
    let data = []
    data.push(rent)
    data.push(utilities)
    data.push(groceries)
    data.push(emis) 
    data.push(medical)
    data.push(Insurance)
    data.push(Entertainment)
    data.push(personal)
    data.push(educational)
    res.status(201).json(data)
}
