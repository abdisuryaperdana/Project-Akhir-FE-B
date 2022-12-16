<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <!-- Baris Judul-->
                <section class="row mb-3">
                    <div class="col-12">
                        <div class="d-flex justify-content-between bg-white pt-2 ps-3 pe-3 shadow" style="height: 60px">
                            <div class="d-flex flex-col gap-2 align-items-start">
                                <!--Implementasi g$user name dan role disini-->
                                <div>
                                    <p class="fst-italic fw-bold">Nama Admin</p>
                                    <p class="mt-n4 fst-italic fw-lighter">Finish Good</p>
                                </div>
                                <img src="/src/assets/img/stechoq/finish-good/logo-stechoq.png" alt="logo" width="40" height="40">
                            </div>
                        </div>
                    </div>
                </section>

                <!--Baris Upload-->
                <section class="row">
                    <div class="col-md-12">
                        <div class="bg-white pt-2 ps-3 pe-3 shadow mb-3" style="width: 1198px;">
                            <form @submit="onSubmit">
                                <div class="row">
                                    <p>Upload File Order</p>
                                </div>
                                <div class="row" >
                                    <input class="border border-dark rounded-2 p-2 mb-2" type="file" @change="onChange" ref="file" id="input_file"/>
                                </div>
                                <div>
                                    <button type="submit" class="btn text-white mt-3" style="background: linear-gradient(180deg, #CFCFEC 0%, #475FA6 100%);">Upload</button>
                                </div>
                            </form>

                            <!--
                            <div class="row">
                                <p>Upload File Order</p>
                            </div>
                            <div class="row">
                                <input type="file" onChange={uploadButton} />
                            </div>
                            <div>
                                <button @click="MyUploadButton" class="btn text-white mt-3" style="background: linear-gradient(180deg, #CFCFEC 0%, #475FA6 100%);">Upload</button>
                            </div>
                            -->
                        </div>
                    </div>
                </section>

                <!--Baris Main Content-->
                <section class="row">
                    <div class="col-md-12">
                        <div class="col bg-white shadow table-responsive">
                            <section class="row">
                                <table class="table table-hover align-middle" style="font-size: 11px">
                                    <thead class="fw-bolder">
                                        <tr>
                                            <th scope="col">File Name</th>
                                            <th scope="col">Upload Data</th>
                                            <th scope="col">Time</th>
                                            
                                            <th></th>
    
                                        </tr>
                                    </thead>
                                    <tbody class="ps-5">
                                        <!--looping getters list file disini-->
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">List Work Order 1</td>
                                            <td class="ps-4 align-middle text-start">23/10/2022</td>
                                            <td class="ps-4 align-middle text-start">08:59 AM</td>
                                            
                                            <td  class="align-middle text-center">
                                                    <!--Implementasi actions DELETE disini-->
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-warning fst-italic me-2"
                                                    >Delete</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary fst-italic"
                                                    >Detail</RouterLink>
                                            </td>
                                        
                                        </tr>
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">List Work Order 1</td>
                                            <td class="ps-4 align-middle text-start">23/10/2022</td>
                                            <td class="ps-4 align-middle text-start">08:59 AM</td>
                                            
                                            <td  class="align-middle text-center">
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-warning fst-italic me-2"
                                                    >Delete</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary fst-italic"
                                                    >Detail</RouterLink>
                                            </td>
                                        
                                        </tr>
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">List Work Order 1</td>
                                            <td class="ps-4 align-middle text-start">23/10/2022</td>
                                            <td class="ps-4 align-middle text-start">08:59 AM</td>
                                            
                                            <td  class="align-middle text-center">
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-warning fst-italic me-2"
                                                    >Delete</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary fst-italic"
                                                    >Detail</RouterLink>
                                            </td>
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </section>


                <!-- Baris Footer-->
                <section>

                </section>
            </div>
        </div>
    </div>
</template>
<script>
import { Upload } from "upload-js";
const upload = Upload({ apiKey: "free" });
import { mapActions, mapState } from 'pinia';
import d$production from '@/stores/finish-good/production.js';
import d$auth from '@/stores/auth.js';

export default {
    data () {
        return {
            fileUpload: null
        }
    },
    computed: {
        ...mapState(d$auth, ['g$user']),
        // ...mapState(d$delivery, ['g$list']),
        // ...mapState(d$delivery, ['g$supplier']),
    },
    methods: {
        async onSubmit(e){
            try {
                const formData = new FormData();

                formData.append('avatar',this.fileUpload)
                //abis itu panggil actions store buat kirim file ke server
                alert(`File uploaded! success`);
                console.log(this.fileUpload)
            } catch (error) {
                alert(`Error!\n${e.message}`);
            }
        },
        onChange(e) {
            this.fileUpload = this.$refs.file.files[0];
            console.log(this.fileUpload)
        }
    }
}
</script>