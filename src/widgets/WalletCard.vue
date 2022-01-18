<template>
  <div>
    <vueper-slides
      class="no-shadow"
      :visible-slides="1"
      slide-multiple
      :gap="3"
      :fixed-height="display < 600 ? '400px': '220px'"
      :bulletsOutside="false"
      :bullets="true"
      :autoplay="false"
      :slide-ratio="1 / 4"
      :dragging-distance="100"
    >
      <vueper-slide v-for="(card,i) in walletCards" :key="i">
        <template v-slot:content>
          <b-card class="wallet-card">
            <div style="float:right">
              <img src="../../src/assets/icons/AspireLogo_White.svg" />
            </div>
            <br />
            <p class="wallet-card-name p-0 m-0 pt-3">{{card.cardName}}</p>
            <div class="d-flex wallet-card-number pt-3">
              <div class="row">
                <span class="col-3">{{bindCardNumber(card.cardNumber,0)}}</span>
                <span class="col-3">{{bindCardNumber(card.cardNumber,1)}}</span>
                <span class="col-3">{{bindCardNumber(card.cardNumber,2)}}</span>
                <span class="col-3">{{bindCardNumber(card.cardNumber,3)}}</span>
              </div>
            </div>
            <div class="row wallet-card-valid pt-2">
              <span class="col-4">Thru: {{card.validThrough}}</span>
              <span class="col" style=" letter-spacing: 2px;">CVV : {{bindCvvNumber(card.cvv)}}</span>
            </div>
            <div class="pt-1" style="float:right">
              <img src="../../src/assets/icons/VisaLogo.svg" />
            </div>
          </b-card>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  name: "WalletCard",
  props: {
    msg: String
  },
  data() {
    return {
      display: window.innerWidth,
      walletCards: [
        {
          cardName: "Mark Henry",
          validThrough: "12/20",
          cardNumber: "0401503363243022",
          cvv: "788"
        },
        {
          cardName: "Mark Henry",
          validThrough: "12/20",
          cardNumber: "0401503363243022",
          cvv: "788"
        },
        {
          cardName: "Mark Henry",
          validThrough: "12/20",
          cardNumber: "0401503363243022",
          cvv: "788"
        }
      ]
    };
  },
  methods: {
    bindCardNumber(cardNumber, i) {
      if (i == 0) {
        return "****";
      } else if (i == 1) {
        return "****";
      } else if (i == 2) {
        return "****";
      } else if (i == 3) {
        return cardNumber.substring(12, 16);
      }
    },
    bindCvvNumber(cvv) {
      if (cvv) {
        return "***";
      }
    }
  }
};
</script>

<style scoped>
.wallet-card {
  background-color: #01d167;
  border-radius: 15px;
  padding: 0px 15px 0px 15px;
}
.wallet-card-name {
  font-weight: bold;
  color: #ffffff;
  font-size: 21px;
  letter-spacing: 2px;
}
.wallet-card-number {
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 2px;
}
.wallet-card-valid {
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  font-size: 14px;
}
@media screen and (max-width: 600px) {
  .wallet-card {
    background-color: #01d167;
    border-radius: 15px;
    width: 92%;
    margin-left: 4%;
    padding: 0px 15px 0px 15px;
    margin-top: 30%;
    position: fixed;
  }
}
</style>
