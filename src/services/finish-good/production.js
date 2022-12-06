import { baseApi } from "@/plugins/axios";

const api = '/auth';

const upload = (form) => baseApi.post(`${api}/upload-file`, form); //buat function upload
// buat function get list file

export { upload };