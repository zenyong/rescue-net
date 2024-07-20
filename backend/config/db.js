import mongoose from 'mongoose';

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5");
        console.log(`Connected to MongoDb ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error in MongoDb is ${error}`)
    }
}
//5HU04eTnpjOeBt32
export default connectDB;