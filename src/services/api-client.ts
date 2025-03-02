import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{  
     key:'ae2f810037a3465eacfea0e0ea295444'
  }
});