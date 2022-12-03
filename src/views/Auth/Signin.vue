<template>
  <main class="mt-0 main-content bg-gray-100">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                </div>
                <div class="card-body pt-2">
                  <form role="form">
                    <label for="username">Username</label>
                    <div class="mb-0">
                      <argon-input type="text" placeholder="Username" name="username" size="lg" />
                    </div>
                    <label for="password">Password</label>
                    <div class="mb-4">
                      <argon-input type="password" placeholder="Password" name="password" size="lg" />
                    </div>
                    <div class="mb-3">
                      <div class="form-group mb-0" style="position: relative;">
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option value="" disabled selected>Select Role Here</option>
                          <option>Admin Material</option>
                          <option>Admin Finish Good</option>
                          <option>BOD/Manager</option>
                        </select>
                        <div style="position: absolute; right: .8rem; top: .6rem;">
                          <i class="ni ni-bold-down"></i>
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <argon-button class="mt-3 " variant="gradient" color="primary" fullWidth size="md">Sign in
                      </argon-button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="text-center">
                <argon-button class="mt-4" color="secondary" fullWidth size="md">Back to Supplier List</argon-button>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
              <div
                class="position-relative h-100 m-3 px-5 border-radius-lg d-flex flex-column justify-content-center overflow-hidden">
                <div class="supplier-login d-flex justify-content-center align-items-center">
                  <img class="supplier-login-img" src="./Toyota.png" alt="Toyota"/>
                  <div class="stext d-flex flex-column text-start ms-4">
                    <div class="sname">
                      <h1>Toyota</h1>
                    </div>
                    <div class="sdesc">
                      <h3>One of the best auto parts manufacturers in the world</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'pinia';
import d$auth from '@/stores/auth';

import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    Navbar,
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  data: () => ({
    // input
    input: {
      name: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions(d$auth, ['a$login']),
    async submitLogin() {
      try {
        await this.a$login({ ...this.input });
        this.$router.replace({ name: 'Default' });
      } catch (e) {
        console.error(e);
      }
    },
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
