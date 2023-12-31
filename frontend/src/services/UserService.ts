import { UserProps } from "../types";
import api from "./api";

class UserService {
  async get(): Promise<UserProps[]> {
    const { data } = await api.get("/user");
    return data;
  }

  async post(props: {
    alias: string;
    mail: string;
    phone: string;
  }): Promise<any> {
    const { data } = await api.post("/user", props);
    return data;
  }
}

const service = new UserService();
export default service;
