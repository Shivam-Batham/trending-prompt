import axiosInstance from "./axiosIntance";

export default async function getServerHealth() {
  const res = await axiosInstance("/");
  return res.data;
}
