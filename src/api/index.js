import axios from "axios";

const latestNation = "https://chile-coronapi.herokuapp.com/api/v3/latest/nation";


export default {

  async getNation() {
     try {

        const response = await axios.get(latestNation);
        return response.data;

      } catch (error) {
        console.error(error);
        return error;
      }
  }

  // async findPokemon(query) {

  //   if (query === "") {

  //     return "empty";
  //   } else {

  //     try {

  //       const response = await axios.get(baseURL + query.toLowerCase());
  //       return response.data;
  //     } catch (e) {

  //       console.log(e);
  //       return ["error", query];
  //     }

  //   }

  // }

};