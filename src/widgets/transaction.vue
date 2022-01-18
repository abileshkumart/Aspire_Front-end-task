<template>
  <div>
    <v-expansion-panels v-model="panel">
      <v-expansion-panel class="expansion-header mb-2">
        <v-expansion-panel-header>
          <template v-slot:actions>
            <img
              height="18"
              width="18"
              style="margin-right:5px;
              padding-top:1px"
              src="../../src/assets/icons/carddetails.svg"
            />
            Card details
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          class="expansion-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="expansion-header expansion-panel">
        <v-expansion-panel-header>
          <template v-slot:actions>
            <img
              height="18"
              width="18"
              style="margin-right:5px;
              padding-top:1px"
              src="../../src/assets/icons/transactions.svg"
            />
            Transactions
            <!-- unable To Download the icon -->
            <!-- <img
              height="18"
              width="18"
              style="margin-right:5px;
              padding-top:1px"
              src="../../src/assets/icons/down-arrow.svg"
            />-->
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="expansion-content mb-1">
          <div class="d-flex" v-for="(tran, index) in transactions" :key="index">
            <div class="row">
              <v-avatar class="v-avatar">
                <img class="transaction-det-icon" :src="tran.img" alt="No Icon" />
              </v-avatar>
              <div class="col">
                <p class="transc-name">
                  {{tran.name}}
                  <span
                    :class="tran.type == 'credited' ? 'amount-credited' : ''"
                    class="transc-amount"
                  >
                    {{tran.type == 'credited' ? '+' : '-'}} $ {{tran.amount}}
                    <img
                      height="18"
                      width="18"
                      style="width:10px;height:10px"
                      src="../../src/assets/icons/next.svg"
                    />
                  </span>
                  <br />
                  <span class="transc-date">{{tran.date}}</span>
                </p>

                <div style="display: flex;">
                  <img
                    class="change-debit-icon"
                    src="../../src/assets/icons/business-and-finance.svg"
                  />
                  <p class="change-debit-label">Change to debit</p>
                </div>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
      panel: 1,
      transactions: [
        {
          category: "Saving",
          name: "Hamleys",
          type: "credited",
          amount: "150",
          date: "20 May 2020",
          img: require("../../src/assets/icons/file-storage.svg")
        },
        {
          category: "Travelling",
          name: "Hamleys",
          type: "debited",
          amount: "150",
          date: "20 May 2020",
          img: require("../../src/assets/icons/flights.svg")
        },
        {
          category: "Announcement",
          name: "Hamleys",
          type: "debited",
          amount: "150",
          date: "20 May 2020",
          img: require("../../src/assets/icons/megaphone.svg")
        },
        {
          category: "Saving",
          name: "Hamleys",
          type: "debited",
          amount: "150",
          date: "20 May 2020",
          img: require("../../src/assets/icons/file-storage.svg")
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.expansion-header {
  padding: 8px;
  color: #0c365a;
  background-color: #f5f9ff !important;
}
.expansion-content {
  background-color: #ffffff;
  padding: 24px;
}
.transc-name {
  color: #222222;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 5px;
}
.transc-date {
  color: #aaaaaa;
  font-size: 12px;
}
.transc-amount {
  float: right;
  font-size: 14px;
  color: #222222;
}
.amount-credited {
  color: #01d167;
}
.v-avatar {
  background: #009dff1a;
}
.transaction-det-icon {
  width: 20px;
  height: 20px;
}
.change-debit-icon {
  width: 25px;
  border-radius: 41px;
  height: 25px;
  padding: 6px;
  background-color: rgb(50, 91, 175);
}
.change-debit-label {
  color: #325baf;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
}
.expansion-panel {
  padding-left: 0;
  padding-right: 0;
}
</style>