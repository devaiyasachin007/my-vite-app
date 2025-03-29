import axios from "axios";

class ClientHTTP {
  constructor() {
    this.apiKey = "9cf6387a";
    this.api = axios.create({
      baseURL: "http://www.omdbapi.com",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apiKey: this.apiKey,
      },
    });
  }

  getApi() {
    return this.api;
  }
}

export default new ClientHTTP().getApi();

