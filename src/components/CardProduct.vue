<template>
  <div class="card">
    <div class="card__delete" @click="deleteCard(id)">
      <img src="assets/delete.svg" alt="del" />
    </div>
    <div class="card__image">
      <img :src="image" alt="image" />
    </div>
    <div class="card__content">
      <div>
        <h3 class="card__content-title">
          {{ title }}
        </h3>
        <div class="card__content-text">
          {{ description }}
        </div>
      </div>

      <div class="card__content-price" v-locale>{{ price }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: String,
    price: {
      type: String,
      require: true,
    },
  },
  methods: {
    ...mapMutations(["deleteCard"]),
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__image {
    height: 200px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__content {
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 auto;
    &-title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #3f3f3f;
      margin-bottom: 16px;
    }
    &-text {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #3f3f3f;
      margin-bottom: 32px;
      overflow-wrap: break-word;
    }
    &-price {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #3f3f3f;
      overflow-wrap: break-word;
    }
  }

  &:hover {
    .card__delete {
      opacity: 1;
    }
  }

  &__delete {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 8px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.5s;
    right: -8px;
    top: -8px;

    &:hover {
      background: #fa5454;
    }
  }
}
</style>