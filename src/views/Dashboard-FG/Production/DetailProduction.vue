<template>
    <div class="py-4 container-fluid">
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
        <div class="row">
            <div class="col-lg-12">
                <!-- Baris Judul-->
                <section class="row mb-3">
                    <div class="col-12">
                        <div class="d-flex justify-content-between bg-white pt-2 ps-3 pe-3 shadow" style="height: 60px">
                            <p class="fw-bolder" style="color: #596EAF">LIST PART</p>
                            <div class="d-flex flex-col gap-2 align-items-start">
                                <!--Implementasi g$user name dan role disini-->
                                <div>
                                    <p class="fw-bold" style="color: #000000" >Nama Admin</p>
                                    <p class="mt-n4 fw-lighter" style="color: #9F9FD9;">Finish Good</p>
                                </div>
                                <img src="/src/assets/img/stechoq/finish-good/logo-stechoq.png" alt="logo" width="40" height="40">
                            </div>
                        </div>
                    </div>
                </section>

                <!--Baris Main Content-->
                <section class="row">
                    <div class="col-md-12">
                        <div class="col bg-white shadow table-responsive">
                            <section class="row">
                                <table class="table table-hover align-middle" style="font-family:Montserrat ; color: #000000;  font-size: 11px;">
                                    <thead class="fw-bolder" >
                                        <tr>
                                                <th scope="col" colspan="9" class="align-middle text-start" style="font-family:Montserrat">List Work Order</th>
                                            </tr>
                                        <tr>
                                            <th scope="col">Part Name</th>
                                            <th scope="col">No. Work Order</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Prod.Date</th>
                                            <th scope="col">Qty/Box</th>
                                            <th scope="col">Total Order Pcs</th>
                                            <th scope="col">Total Box</th>
                                            <th scope="col">Supplier</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="ps-5">
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">CONSOLE FLOOR FR LWR</td>
                                            <td class="ps-4 align-middle text-start">123328493</td>
                                            <td class="align-middle text-center">HPP</td>
                                            <td class="align-middle text-center">05/12/2022</td>
                                            <td class="text-center">10</td>
                                            <td class="align-middle text-center me-2">900 <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z" fill="currentColor" />
                                            <path d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z" fill="currentColor" /></svg></td>
                                            <td class="align-middle text-center">90</td>
                                            <td class="ps-4 align-middle text-start">TKI</td>
                                            <td  class="align-middle text-center">
                                                <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"
                                                    >Print</button>

                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">CONSOLE FLOOR FR LWR</td>
                                            <td class="ps-4 align-middle text-start">123328493</td>
                                            <td class="align-middle text-center">HPP</td>
                                            <td class="align-middle text-center">05/12/2022</td>
                                            <td class="text-center">10</td>
                                            <td class="align-middle text-center me-2">900 <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z" fill="currentColor" />
                                            <path d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z" fill="currentColor" /></svg></td>
                                            <td class="align-middle text-center">90</td>
                                            <td class="ps-4 align-middle text-start">TKI</td>
                                            <td  class="align-middle text-center">
                                                <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"
                                                    >Print</button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">CONSOLE FLOOR FR LWR</td>
                                            <td class="ps-4 align-middle text-start">123328493</td>
                                            <td class="align-middle text-center">HPP</td>
                                            <td class="align-middle text-center">05/12/2022</td>
                                            <td class="text-center">10</td>
                                            <td class="align-middle text-center me-2">900 <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z" fill="currentColor" />
                                            <path d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z" fill="currentColor" /></svg></td>
                                            <td class="align-middle text-center">90</td>
                                            <td class="ps-4 align-middle text-start">TKI</td>
                                            <td  class="align-middle text-center">
                                                <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"
                                                    >Print</button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">CONSOLE FLOOR FR LWR</td>
                                            <td class="ps-4 align-middle text-start">123328493</td>
                                            <td class="align-middle text-center">HPP</td>
                                            <td class="align-middle text-center">05/12/2022</td>
                                            <td class="text-center">10</td>
                                            <td class="align-middle text-center me-2">900 <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z" fill="currentColor" />
                                            <path d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z" fill="currentColor" /></svg></td>
                                            <td class="align-middle text-center">90</td>
                                            <td class="ps-4 align-middle text-start">TKI</td>
                                            <td  class="align-middle text-center">
                                                    
                                                    <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"
                                                    >Print</button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="ps-4 align-middle text-start" scope="col" style="word-wrap: break-word;">CONSOLE FLOOR FR LWR</td>
                                            <td class="ps-4 align-middle text-start">123328493</td>
                                            <td class="align-middle text-center">HPP</td>
                                            <td class="align-middle text-center">05/12/2022</td>
                                            <td class="text-center">10</td>
                                            <td class="align-middle text-center me-2">900 <svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z" fill="currentColor" />
                                            <path d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z" fill="currentColor" /></svg></td>
                                            <td class="align-middle text-center">90</td>
                                            <td class="ps-4 align-middle text-start">TKI</td>
                                            <td  class="align-middle text-center">
                                                <button @click="showPopUp = true" type="button" class="btn btn-success"  style="background-color: #83FF57;"
                                                    >Print</button>

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
                        <div class="position-fixed bottom-0" style="width: 960px; height: 60px; z-index: 100; margin-top: 20px; background: linear-gradient(180deg, #9F9FD9 0%, #475FA7 100%);">
                            <p class="text-white text-center py-3">@copyright2022</p>
                        </div>
                    </div>
                </section>
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
                var datalabelbox = ['Label Box','Name : CONSOLE FLOOR FR LWR','Qty : 10','Prod.Date : 05/12/2022','No.Work Order : 123328493','Supplier : TKI'];
                var imgData = await QRCode.toDataURL(this.g$list);
                const doc = new jsPDF('p', 'mm', 'a4');
                doc.text(datalabelbox,70,10)
                doc.addImage(imgData, 'PNG', 70, 50);
                // doc.addImage(imgData, 'PNG', 15, 40, 180, 180);
                doc.save('barcode.pdf');
            } catch (err) {
                console.error(err)
            }
            
        }
    }
};
</script>