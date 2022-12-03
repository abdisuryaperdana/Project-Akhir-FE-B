import { baseApi } from "@/plugins/axios";

const api = '/auth';

const upload = (form) => baseApi.post(`${api}/upload-file`, form);

export { upload };