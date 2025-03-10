import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import type { User } from "./type";

export const mockRandomUser: User = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "John",
        last: "Doe",
      },
      location: {
        street: {
          number: 123,
          name: "Main Street",
        },
        city: "New York",
        state: "NY",
        country: "USA",
        postcode: "10001",
        coordinates: {
          latitude: "40.7128",
          longitude: "-74.0060",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada)",
        },
      },
      email: "johndoe@example.com",
      login: {
        uuid: "123e4567-e89b-12d3-a456-426614174000",
        username: "johndoe",
        password: "password123",
        salt: "randomSalt",
        md5: "md5hash",
        sha1: "sha1hash",
        sha256: "sha256hash",
      },
      dob: {
        date: "1990-01-01T00:00:00.000Z",
        age: 34,
      },
      registered: {
        date: "2015-06-01T00:00:00.000Z",
        age: 9,
      },
      phone: "123-456-7890",
      cell: "987-654-3210",
      id: {
        name: "SSN",
        value: "123-45-6789",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      },
      nat: "US",
    },
  ],
  info: {
    seed: "randomSeed",
    results: 1,
    page: 1,
    version: "1.0",
  },
};

export const mockRandomUserResponse: AxiosResponse<User> = {
  data: mockRandomUser,
  status: 200,
  statusText: "OK",
  headers: { "Content-Type": "application/json" },
  config: {
    headers: {},
  } as InternalAxiosRequestConfig,
};
