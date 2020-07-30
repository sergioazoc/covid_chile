import axios from "axios";

const latestNation = "https://chile-coronapi.herokuapp.com/api/v3/latest/nation";
const latestRegion = "https://chile-coronapi.herokuapp.com/api/v3/latest/regions?"

  const getNation = async () => {
    try {

      const response = await axios.get(latestNation);
      return response.data;

    } catch (error) {
      console.error(error);
      return error;
    }
  }
  
  const getRegion = async (id) => {
    try {

      const response = await axios.get(`${latestRegion}id=${id}`);
      return response.data;

    } catch (error) {
      console.error(error);
      return error;
    }
  }


export default {getNation, getRegion}