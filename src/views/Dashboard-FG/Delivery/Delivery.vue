<template>
    <div>
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Baris Judul-->
                    <section class="row mb-3">
                        <div class="col-12">
                            <div class="d-flex justify-content-between bg-white pt-2 ps-3 pe-3 shadow" style="height: 58px">
                                <p class="fw-bolder" style="color: #596EAF; font-family: 'Montserrat'; font-weight: 700; line-height: 20px; font-size: 16px; align-items: center; width: 173px; height: 20px;">LIST PART DELIVERY
                                </p>
                                <div class="d-flex flex-col gap-2 align-items-start">
                                    <div>
                                        <p class="fst-italic fw-bold" style="color: #000000; font-family: 'Montserrat'">Nama Admin</p>
                                        <p class="mt-n4 fst-italic fw-lighter" style="color: #9F9FD9;">Finish Good</p>
                                    </div>
                                    <img src="/src/assets/img/stechoq/finish-good/logo-stechoq.png" alt="logo" width="40" height="40">
                                </div>
                            </div>
                        </div>
                    </section>
                    <!--Baris Main Content-->
                    <section class="row">
                        <div class="col-md-12">
                            <div class="col bg-white table-responsive">
                                <section class="row">
                                    <table class="table table-hover align-middle" style="font-size: 12px; tab-size: 18cm;" >
                                        <thead class="fw-bolder" style="font-family: 'Montserrat'; font-weight: 700; font-size: 14px; line-height: 17px; color: #000000;">
                                            <tr>
                                                <th scope="col" colspan="6" class="align-middle text-start fst-italic" style="font-family:Arial, Helvetica, sans-serif; color: #000000;">List Part</th>
                                            </tr>
                                            <tr>
                                                <th scope="col" colspan="3" class="align-middle text-start">File Name</th>
                                                <th scope="col" class="align-middle text-center">Time</th>
                                                <th scope="col" class="align-middle text-center fst-italic">Deliv. Date</th>
                                                <th scope="col" class="align-middle text-center"></th>
                                            </tr>
                                        </thead>
                                        <tbody class="ps-5" style="font-family: 'Montserrat'; font-weight: 400; font-size: 12px; line-height: 15px; color: #000000;">
                                            <tr v-for="(item, index) in g$list" :key="index">
                                                <td class="ps-4 align-middle text-start" scope="col" colspan="3" style="word-wrap: break-word;">{{item.partName}}</td>
                                                <td class="align-middle text-center">{{item.time}}</td>
                                                <td class="align-middle text-center">{{item.delivDate}}</td>
                                                <td  class="align-middle text-center">
                                                    <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"                                    
                                                        >Download by Supplier</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4 align-middle text-start" scope="col" colspan="3" style="word-wrap: break-word;">CONSOLE FLOOR FR LWR</td>
                                                <td class="align-middle text-center">10:23 AM</td>
                                                <td class="align-middle text-center">23/10/2022</td>
                                                <td  class="align-middle text-center">
                                                    <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"                                    
                                                        >Download by Supplier</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                        </div>
                    </section>

                     <!-- Baris Footer-->
                    <section class="row">
                        <div>
                            <div class="position-relative bottom-0" style="width: 940px; height: 60px; z-index: 100; margin-top: 20px; background: linear-gradient(180deg, #9F9FD9 0%, #475FA7 100%);">
                                <p class="text-white text-center py-3">@copyright2022</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    <!--Pop Up-->
    <section v-if="showPopUp === true">
        <div class="pop-up row bg-white shadow-lg px-5 py-4 rounded border border-primary" style="width: 700px; height: 170px; position: fixed; top: 220px; right: 150px">
            <form class="row align-items-center justify-content-center text-center">
                <div class="row-2 text-center align-items-center justify-content-center">
                    <p class="fw-bold">Select Supplier</p>
                </div>
                <div class="row-2 text-center align-items-center justify-content-center mb-2 px-2" style="width: 500px; position: relative;">
                    <select class="form-control" id="exampleFormControlSelect1" aria-placeholder="TKI" style="cursor: pointer;">
                        <option v-for="(item, index) in g$supplier" :key="index">{{item.supplier}}</option>
                    </select>
                    <div style="position: absolute; right: .8rem; top: .6rem;">
                        <i class="ni ni-bold-down text-dark" style="cursor: pointer;"></i>
                    </div>
                </div>
                <div class="row-2 text-center align-items-center justify-content-center">
                    <button @click="downloadBtn" type="button" class="btn btn-secondary row">Download</button>
                </div>
            </form>
            <div @click="showPopUp = false" class="col text-end" style="position: absolute; right: 2px; top: 5px">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="cursor: pointer;">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'pinia'
import d$delivery from '@/stores/finish-good/delivery.js';
import QRCode from 'qrcode'
import { jsPDF } from 'jspdf';

export default {
    data() {
        return {
            showPopUp: ''
        }
    },
    computed: {
        ...mapState(d$delivery, ['g$list']),
        ...mapState(d$delivery, ['g$supplier']),
    },
    methods: {
        async downloadBtn() {
            try {
                var imgData = await QRCode.toDataURL('DELIV-23102022')
                const doc = new jsPDF('p', 'mm', 'a4');
                doc.addImage(imgData, 'PNG', 100, 10);
                // doc.addImage(imgData, 'PNG', 15, 40, 180, 180);
                doc.save('barcode.pdf');
            } catch (err) {
                console.error(err)
            }
            
        }
    }
};
</script>