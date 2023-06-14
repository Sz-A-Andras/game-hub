import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "187fb446015646a4be513b06b14b9621",
  },
});
