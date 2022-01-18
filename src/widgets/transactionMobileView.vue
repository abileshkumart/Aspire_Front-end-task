<template>
  <div>
    <b-card class="shortcut-card">
      <div class="d-flex">
        <div class="row">
          <div class="col text-center">
            <img src="../../src/assets/icons/Freezecard.svg" />
            <p class="p-0 m-0 short-cut-text">Freeze Card</p>
          </div>
          <div class="col-3 text-center">
            <img src="../../src/assets/icons/Setspendlimit.svg" />
            <p class="p-0 m-0 short-cut-text">Set spend limit</p>
          </div>
          <div class="col text-center">
            <img src="../../src/assets/icons/GPay.svg" />
            <p class="p-0 m-0 short-cut-text">Add to GPay</p>
          </div>
          <div class="col text-center">
            <img src="../../src/assets/icons/Replacecard.svg" />
            <p class="p-0 m-0 short-cut-text">Replace card</p>
          </div>
          <div class="col text-center">
            <img src="../../src/assets/icons/Deactivatecard.svg" />
            <p class="p-0 m-0 short-cut-text">Cancel card</p>
          </div>
        </div>
      </div>
      <w-transaction style="margin-top:7%" />
    </b-card>
  </div>
</template>

<script>
import transaction from "../widgets/transaction";
export default {
  components: {
    "w-transaction": transaction
  },
  name: "ShortCutCard",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.shortcut-card {
  background-color: #edf3ff;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  margin-top: 10%;
}
.short-cut-text {
  color: #0c365a;
  font-size: 12px;
}
</style>
