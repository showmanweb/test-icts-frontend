import axios from "axios";

export const handleZipcode = async (zipcode: string) => {
  return await axios.get("https://viacep.com.br/ws/" + zipcode + "/json/");
};
