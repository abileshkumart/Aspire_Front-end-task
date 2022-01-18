<template>
  <div class="card-comp">
    <div class="card-comp-inner">
      <p class="header-text">Available Balance</p>
      <div class="d-flex mb-2">
        <div class="ss-text">SS</div>
        <span class="ss-text-value">3,000</span>
        <b-button class="aspire-button">
          <!-- <img src="../../src/assets/icons/box.svg" /> -->
          New Card
        </b-button>
      </div>
    </div>
    <b-card class="card">
      <div class="row">
        <div :class="display <= 600 ? 'col-12' : 'col-6'">
          <w-wallet-cards />
          <w-short-cut v-if="display > 600" class="mt-3" />
          <w-transaction-mobile  v-if="display < 600" class="mt-3"/>
        </div>
        <div class="col" v-if="display > 600">
          <w-transaction />
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import Card from "../widgets/WalletCard";
import shortCut from "../widgets/shortcuts";
import transaction from "../widgets/transaction";
import transactionMobileView from "../widgets/transactionMobileView.vue";
export default {
  components: {
    "w-wallet-cards": Card,
    "w-short-cut": shortCut,
    "w-transaction": transaction,
    "w-transaction-mobile" : transactionMobileView
  },
  data() {
    return {
      display: window.innerWidth,
    };
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ss-text {
  padding: 4px;
  background-color: #01d167;
  border-radius: 5px;
  width: 40px;
  color: #ffffff;
  text-align: center;
}

@media screen and (min-width: 600px) {
  .card {
    box-shadow: #00000014;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: #00000014;
    padding: 2%;
  }
  .card-comp {
    margin-top: 40px;
  }
  .header-text {
    color: #222222;
    font-size: 14px;
}
.ss-text-value {
  color: #222222;
  font-weight: 600;
  font-size: 22px;
  margin-left: 5px;
}
.aspire-button {
  background-color: #325baf;
  color: #ffffff;
  /* letter-spacing: 1px; */
  margin-left: auto;
  font-size: 13px;
  box-shadow: none;
}
.aspire-button::before {
  content: url('../../src/assets/icons/box.svg');
}
}

@media screen and (max-width: 600px) {
  .card {
    border: none;
    background: transparent;
  }
  .card .card-body {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
  .card-comp-inner {
    /* padding: 0 1rem; */
    /* background-color: #0C365A; */
    position: fixed;
    width: 100%;
    padding: 5% 8% 5% 5%;
  }
  .header-text {
    color: #ffffff;
    font-size: 14px;
  } 
  .ss-text-value {
    color: #ffffff;
    font-weight: 600;
    font-size: 22px;
    margin-left: 5px;
}
.aspire-button {
  background-color: transparent;
  color: #ffffff;
  margin-left: auto;
  font-size: 13px;
  box-shadow: none;
  border: none;
  color: #23CEFD;
}
.aspire-button::before {
  content: url('../../src/assets/icons/add.svg');
}
}
</style>
