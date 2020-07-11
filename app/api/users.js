import client from "./client";

const register = userInfo => client.post("/users", userInfo);

const getUsers = () => client.get("/users");

export default { register, getUsers };
