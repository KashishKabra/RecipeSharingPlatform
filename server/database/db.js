import mongoose from "mongoose"


const Connection = async (username,password) => {
    // cant leak the user and password
    const URL = `mongodb://${username}:${password}@recipe-app-shard-00-00.gvnyz.mongodb.net:27017,recipe-app-shard-00-01.gvnyz.mongodb.net:27017,recipe-app-shard-00-02.gvnyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-183wx3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=recipe-app`;
    try {


        //asynchronous function
        await mongoose.connect(URL);
        console.log("Database connected");
    } catch(error){
        console.log("Error while connecting",error);
    }
}

export default Connection;