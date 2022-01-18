<template>
  <div>
    <sideNav />
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNavBar";

export default {
  components: {
    sideNav: SideNav
  }
};
</script>