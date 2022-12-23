import mongoose from "mongoose";

// Define Schema

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    age: {type: Number, required: true, min: 18, max: 50},
    fees: {type: mongoose.Decimal128, reqired: true, validate: v=>
        v >= 5500.50},
    hobbies: {type: Array},
    isactive: {type: Boolean},
    comments: [{value: {type: String}, publish: {type: Date, default: Date.now}}],
    join: { type: Date, default: Date.now}
})

console.log(studentSchema.path('age'))

//Compiling Schema
const studentModel = mongoose.model('student', studentSchema)

// Retrieve all documents

const getAllDoc = async () => {
//     const result = await studentModel.find()
//     console.log(result);
//     result.forEach(
//         (item) => console.log(
//             item.name,
//             item.age,
//             item.fees.toString(),
//             item.hobbies[0],
//             item.hobbies[1],
//             item.isactive,
//             item.comments[0].value,
//             item.join
//         )
//     )
}


// Retrieve all documents with specific fields

const getDoc2 = async () => {

    // Include
    // const result = await studentModel.find().select('name age')
    // const result = await studentModel.find().select('name', 'age')
    // const result = await studentModel.find().select({name: 1, age: 1})
    // const result = await studentModel.find({}, 'name age')

    // Exclude
    // const result = await studentModel.find().select('-name -age')
    // const result = await studentModel.find().select('-name', '-age')
    // const result = await studentModel.find().select({name: 0, age: 0})
    // const result = await studentModel.find({}, '-name -age')

    // console.log(result);
}

// Retrieve Single Document
const getSingleDoc = async () =>{
    // const result = await studentModel.findById("63a1f5368e0f960fa836b76e")
    // console.log(result.name);
}

// Retrieve single doc with specific field
const getSingleDoc2 = async () =>{
//     const result = await studentModel.findById("63a1f5368e0f960fa836b76e", 'name age')
//     console.log(result.name);
}


// // Retrieve doc by field
const getDocByField = async () =>{
//     const result = await studentModel.find({name: 'Sonu'})
//     console.log(result);
}

// Retrieve doc by field by specified field 
const getDocByField2 = async () =>{
//     const result = await studentModel.find({name: 'Sonu'}).select('name age')
//     console.log(result);
}


// Retrieve limited doc
const getLimitedDoc = async () =>{
//     const result = await studentModel.find().limit(1);
//     console.log(result);
}

// Skip doc
const skipDoc = async () =>{
    // const result = await studentModel.find().skip(1);
    // console.log(result);
}

// count doc
const countDoc = async () =>{
    // const result = await studentModel.find().count();
    // console.log(result);
}

// sort doc
const sortDoc = async () =>{
    // const result = await studentModel.find().sort({age: 1});
    // const result = await studentModel.find().sort({age: -1});
    // console.log(result);
}

// comparison query operator

const comparisontDoc = async () =>{
    const result = await studentModel.find({age: {$gt: 19}}); // $gt means greater than
    // const result = await studentModel.find().sort({age: -1});
    console.log(result);
} 

// logical operator

export {getAllDoc, getDoc2, getSingleDoc, getSingleDoc2, getDocByField, getDocByField2, getLimitedDoc, skipDoc, countDoc, sortDoc,comparisontDoc };