import axios from "axios";
import type { AxiosResponse } from "axios";
import type { User } from "./type";
import { mockRandomUserResponse } from "./mock-random-user";

const servicePath = "https://randomuser.me/api/?results=5";
type Data = User;

export const getRandomUserService = async (): Promise<AxiosResponse<Data>> => {
  const url = servicePath;

  return axios({ method: "GET", url });
};

export const createRandomUserService = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data: User,
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<AxiosResponse<Data>> => {
  return mockRandomUserResponse;
};
