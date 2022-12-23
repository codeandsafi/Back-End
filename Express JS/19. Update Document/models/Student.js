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

//Update doc

const updateDocByID = async (id) => {
    try{
    const result = await studentModel.findByIdAndUpdate(id, {name: "Safiul"}, {returnDocument:after});
    console.log(result);
} catch(error){
        console.log(error);
    }
};

export { updateDocByID }