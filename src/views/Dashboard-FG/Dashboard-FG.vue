<template>
    <div>
        <p>Ini Dashboard FG</p>
    </div>
</template>
<script>
// import SideNavFG from '../../components/finish-good/SideNavFG.vue';

export default {
  name: "index",
  components: {
    // SideNavFG
  },
  data() {
    return {
      logo,
      logoWhite
    };
  },
  props: ["custom_class", "layout"]
};
</script>