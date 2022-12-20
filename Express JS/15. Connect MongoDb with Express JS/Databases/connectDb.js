import mongoose from "mongoose";

// const connectDb = (DATABASE_URL) => {
//     return mongoose.connect(DATABASE_URL).then(() => {
//     console.log('Connected Successfully...')
// })
// .catch((err)=>{
//     console.log(err);
// })
// }

const connectDb = async (DATABASE_URL) => {
    try{
    await mongoose.connect(DATABASE_URL);
    console.log('Connected Successfully...');
} catch(err) {
    console.log(err);
}
}

export default connectDb;