<template>
  <div>
    <div class="sidebar">
      <div>
        <img class="pt-1 logo-align" src="../../src/assets/icons/Logo.svg" />
      </div>
      <p
        class="header-text pt-2 pb-4"
      >Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      <div v-for="(side, index) in sidenavdata" :key="index">
        <p class="sidebar-content" @click="navigatePage(side,index)">
          <img class="sidebar-text-logo" :src="bindUserImage(side.text)" />
          <span :class="activeTab(index)">{{side.text}}</span>
        </p>
      </div>
    </div>
    <div></div>
    <router-view class="sidenav" />
  </div>
</template>

<script>
export default {
  name: "WalletCard",
  props: {
    msg: String
  },
  data() {
    return {
      activePage: 1,
      sidenavdata: [
        {
          text: "Home",
          routepath: "/home",
          imagepath: "../../src/assets/icons/Home.svg"
        },
        {
          text: "Cards",
          routepath: "/cards",
          imagepath: "../../src/assets/icons/Home.svg"
        },
        {
          text: "Payments",
          routepath: "/payments",
          imagepath: "../../src/assets/icons/Payment.svg"
        },
        {
          text: "Credit",
          routepath: "/credit",
          imagepath: "../../src/assets/icons/Credit.svg"
        },
        {
          text: "Settings",
          routepath: "/settings",
          imagepath: "../../src/assets/icons/Home.svg"
        }
      ]
    };
  },
  methods: {
    navigatePage(data, i) {
      this.activePage = i;
      this.$router.push(data.routepath);
    },
    bindUserImage(img) {
      if (img == "Home") {
        return require("../../src/assets/icons/Home.svg");
      } else if (img == "Cards") {
        return require("../../src/assets/icons/Card.svg");
      } else if (img == "Payments") {
        return require("../../src/assets/icons/Payments.svg");
      } else if (img == "Credit") {
        return require("../../src/assets/icons/Credit.svg");
      } else if (img == "Settings") {
        return require("../../src/assets/icons/Account.svg");
      }
    },
    activeTab(i) {
      if (i == this.activePage) {
        return "sidebar-active-text";
      } else {
        return "sidebar-text";
      }
    }
  }
};
</script>

<style scoped>
.header-text {
  color: hsla(0, 0%, 100%, 1);
  opacity: 30%;
}
.logo-align {
  /* float: left; */
}
.sidebar-text {
  color: hsla(0, 0%, 100%, 1);
  margin-left: 10px;
}
.sidebar-text:hover {
  color: hsla(149, 99%, 41%, 1) !important;
}
.sidebar-active-text {
  margin-left: 10px;
  color: hsla(149, 99%, 41%, 1);
}

.sidebar-text-logo {
  height: 24px;
  width: 24px;
  /* color: hsla(149, 99%, 41%, 1) !important;  */
}
.sidebar-text-logo:hover {
  color: hsla(149, 99%, 41%, 1) !important;
}
.sidebar-content {
  padding-bottom: 30px;
}
.sidebar-content:hover {
  color: hsla(149, 99%, 41%, 1) !important;
  cursor: pointer;
}
@media screen and (min-width: 600px) {
  .sidebar {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 340px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    text-align: left;
    background-color: #0c365a; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 40px;
  }
  .sidenav {
    margin-left: 340px;
    padding: 30px 3%;
  }
}
@media screen and (max-width: 600px) {
  .sidebar {
    display: none;
  }
  .sidenav {
    /* margin-left: 340px; */
    /* padding-top: 30px; */
    background-color: #0c365a;
  }
}
</style>
