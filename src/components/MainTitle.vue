<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<script>
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