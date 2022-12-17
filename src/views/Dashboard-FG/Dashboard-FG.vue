<template>
  <div class="py-4 container-fluid">
      <div class="row">
          <div class="col-lg-12">
            
              <!-- Baris Judul-->
              <section class="row mb-3">
                  <div class="col-12">
                      <div class="d-flex justify-content-between bg-white pt-2 ps-3 pe-3 shadow" style="height: 60px">
                          <p class="fw-bolder" style="color: #596EAF">DASHBOARD FINISH GOOD</p>
                          <div class="d-flex flex-col gap-2 align-items-start">
                              <div>
                                  <p class="fst-italic fw-bold">Nama Admin</p>
                                  <p class="mt-n4 fst-italic fw-lighter">Finish Good</p>
                              </div>
                              <img src="/src/assets/img/stechoq/finish-good/logo-stechoq.png" alt="logo" width="40" height="40">
                          </div>
                      </div>
                  </div>
              </section>

              <!--Section 1-->
              <section class="row mb-3">
                  <div class="d-flex flex-col justify-content-between">
                    <div class="bg-white py-2 px-4 shadow" style="height: 176px; width: 470px; border: 2px solid #8292BF;">
                      <div class="d-flex flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-seam mt-1 fw-bold" viewBox="0 0 16 16">
                          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                        </svg>
                        <p class="ms-2 fw-bold">Production</p>
                      </div>
                      <div class="d-flex flex-col justify-content-between">
                        <div class="bg-white shadow-lg py-2 px-2" style="width: 200px; height: 100px;">
                          <p class="fw-bolder">Order</p>
                          <p class="align-middle text-center fw-bolder fs-4">220 Pcs</p>
                        </div>
                        <div class="bg-white shadow-lg py-2 px-2" style="width: 200px; height: 100px;">
                          <p class="fw-bolder">Stock In</p>
                          <p class="align-middle text-center fw-bolder fs-4">950 Pcs</p>
                        </div>
                      </div>
                    </div>
                
                    <div class="bg-white pt-2 ps-3 pe-3 shadow" style="height: 176px; width: 470px; border: 2px solid #8292BF;">
                        <div class="d-flex flex-col">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                          </svg>
                        <p class="ms-2 fw-bold">Delivery</p>
                    </div>
                      <div class="d-flex flex-col justify-content-between">
                        <div class="bg-white shadow-lg py-2 px-2" style="width: 200px; height: 100px;">
                          <p class="fw-bolder">Scaned</p>
                          <p class="align-middle text-center fw-bolder fs-4">10 Box</p>
                        </div>
                        <div class="bg-white shadow-lg py-2 px-2" style="width: 200px; height: 100px;">
                          <p class="fw-bolder">Stock Out</p>
                          <p class="align-middle text-center fw-bolder fs-4">950 Pcs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <!--Section 2-->
                <section class="row">
                  <div class="d-flex flex-col justify-content-between">
                    <div class="bg-white py-2 px-4 shadow" style="height: 106px; width: 470px; border: 1px solid #24FF00;">
                      <div class="py-2 px-2" style="width: 200px; height: 100px;">
                        <p class="fw-bolder" style="color: #24FF00;">Total Stock</p>
                        <p class="text-center fw-bolder fs-4" style="color: #24FF00;">1200 Pcs</p>
                      </div>
                    </div>

                    <div class="bg-white py-2 px-4 shadow" style="height: 106px; width: 470px; border: 1px solid #F65252;">
                        <div class="py-2 px-2" style="width: 200px; height: 100px;">
                        <p class="fw-bolder" style="color: red;">Summary NG</p>
                        <p class="text-center fw-bolder fs-4" style="color: red;">30 Pcs</p>
                      </div>
                    </div>
                  </div>
                </section>
                
              <!-- Baris Footer-->
              <section >
                     
              </section>
          </div>
      </div>
  </div>
</template>

<script>
//import SideNavFG from '../../components/finish-good/SideNavFG.vue';

export default {
};
</script>