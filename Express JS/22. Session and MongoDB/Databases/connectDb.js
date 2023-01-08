import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbNmae: 'sessionDB'
        }
    await mongoose.connect(DATABASE_URL);
    console.log('Connected Successfully...');
} catch(err) {
    console.log(err);
}
}

export default connectDb;