<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <!-- Baris Judul-->
                <section class="row mb-3">
                    <div class="col-12">
                        <div class="d-flex justify-content-between bg-white pt-2 ps-3 pe-3 shadow" style="height: 60px">
                            <p class="fw-bolder" style="color: #596EAF">DETAIL PRODUCTION</p>
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

                <!--Baris Main Content-->
                <section class="row">
                    <div class="col-md-12">
                        <div class="col bg-white shadow table-responsive">
                            <section class="row">
                                <table class="table table-hover align-middle" style="font-size: 11px">
                                    <thead class="fw-bolder">
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
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-success fst-italic btn-sm"
                                                    >Print</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary btn-sm"
                                                    >Confirm Edit</RouterLink>
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
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-success fst-italic btn-sm"
                                                    >Print</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary btn-sm"
                                                    >Confirm Edit</RouterLink>
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
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-success fst-italic btn-sm"
                                                    >Print</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary btn-sm"
                                                    >Confirm Edit</RouterLink>
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
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-success fst-italic btn-sm"
                                                    >Print</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary btn-sm"
                                                    >Confirm Edit</RouterLink>
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
                                                    <RouterLink
                                                        to="/dashboard-finish-good/delivery/detail-part/1"
                                                        class="btn btn-success fst-italic btn-sm"
                                                    >Print</RouterLink>
                                                    <RouterLink
                                                        to="/dashboard-finish-good/production/detail-production"
                                                        class="btn btn-primary btn-sm"
                                                    >Confirm Edit</RouterLink>
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
</template>