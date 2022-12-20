import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try{
    // await mongoose.connect(DATABASE_URL);

    const DB_OPTIONS = {
        user: 'Safiul',
        pass: '123456',
        dbName: 'schooldb',
        authSource: 'schooldb'
    }

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log('Connected Successfully...');
} catch(err) {
    console.log(err);
}
}

export default connectDb;