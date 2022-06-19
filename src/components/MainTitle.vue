<template>
  <h2 class="title">{{ msg }}</h2>
</template>

<script setup>
export default {
  props: {
    msg: {
      type: String,
      require: true
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
}
</style>