<template>
  <form class="form" @input="validate()" @submit.prevent="addCard()">
    <InputValue
      headInput="Наименование товара"
      inputPlaceholder="Введите наименование товара"
      v-model.trim="product.name"
    />

    <InputValue headInput="Описание товара" :inputReq="false">
      <textarea
        cols="30"
        rows="10"
        class="inputText"
        type="text"
        placeholder="Введите описание товара"
        v-model="product.description"
      />
    </InputValue>

    <InputValue
      headInput="Ссылка на изображение товара"
      inputPlaceholder="Введите ссылку"
      v-model.trim="product.imageLink"
    />

    <InputValue
      headInput="Цена товара"
      inputPlaceholder="Введите цену"
      v-locale
      @input="locale($event)"
      :value="product.price"
    />

    <button :disabled="!valid" class="btn">Добавить товар</button>
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import InputValue from "./InputValue.vue";

export default {
  components: {
    InputValue
  },
  computed: {
    ...mapState(["product", "valid"])
  },
  methods: {
    ...mapMutations(["validate", "addCard", "locale"])
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: sticky;
  top: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  min-width: 332px;
  margin-right: 16px;

  .input {
    &:nth-child(4) {
      margin-bottom: 0;
    }
  }

  .btn {
    width: 100%;
    background: #7bae73;
    border-radius: 10px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    padding: 10px 0 11px;
    border: none;
    cursor: pointer;
    margin-top: 24px;

    &:disabled {
      cursor: default;
      color: #b4b4b4;
      background: #eeeeee;
    }
  }
}
</style>