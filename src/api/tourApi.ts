import {axiosClient} from "@api";

//test with json-server api 
export const tourApi = {
  getAll: (params?: any) => {
    const url = './tours';
    return axiosClient.get(url, {params: params});
  },

  get: (id: any) => {
    const url = `./tours/${id}`;
    return axiosClient.get(url);
  }
}