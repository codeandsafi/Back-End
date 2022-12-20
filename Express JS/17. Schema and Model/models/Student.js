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


// const createDoc = async () =>{
// try{
//     // Creating new document

// const studentDoc = new studentModel({
//     name: 'Safi',
//     age: 20,
//     fees: 6500.34,
//     hobbies: ['Eating', 'Dying'],
//     isactive: true,
//     comments: [{value: 'This is a good boy'}]
// })

// // Saving Document

// const result = await studentDoc.save()
// console.log(result)
// } catch(error) {
//     console.log(error)
// }
// }


const createDoc = async (name, age, fees, hobbies, isactive, comment) =>{
try{
    // Creating new document

const studentDoc = new studentModel({
    name: name,
    age: age,
    fees: fees,
    hobbies: hobbies,
    isactive: isactive,
    comments: comment
})

// Saving Document

const result = await studentDoc.save()
console.log(result)
} catch(error) {
    console.log(error)
}
}




export default createDoc