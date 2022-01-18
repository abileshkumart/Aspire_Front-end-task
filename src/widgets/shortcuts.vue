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
    </b-card>
  </div>
</template>

<script>
export default {
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
  border-radius: 15px;
  /* width: 90%; */
}
.short-cut-text {
  color: #0c365a;
  font-size: 13px;
}
</style>
