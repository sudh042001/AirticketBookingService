const dotEnv=require('dotenv');

dotEnv.config();

module.exports={
    PORT:process.env.PORT,
    FLIGHT_SERVER_PATH:process.env.FLIGHT_SERVER_PATH
}