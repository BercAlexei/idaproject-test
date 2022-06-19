<template>
  <form class="form" @input="validate()" @submit.prevent="addCard()">
    <div class="form__input">
      <span class="head-input" :class="{ 'head-input_require': true }"
        >Наименование товара</span
      >
      <input
        class="inputText"
        type="text"
        placeholder="Введите наименование товара"
        v-model="getProduct.name"
        @blur="leaveFocus"
      />
      <span>Это обязательное поле!</span>
    </div>
    <div class="form__input">
      <span class="head-input" :class="{ 'head-input_require': false }"
        >Описание товара</span
      >
      <textarea
        cols="30"
        rows="10"
        class="inputText"
        type="text"
        placeholder="Введите описание товара"
        v-model="getProduct.description"
      />
    </div>

    <div class="form__input">
      <span class="head-input" :class="{ 'head-input_require': true }"
        >Ссылка на изображение товара</span
      >
      <input
        class="inputText"
        type="text"
        placeholder="Введите ссылку"
        v-model="getProduct.imageLink"
        @blur="leaveFocus"
      />
      <span>Это обязательное поле!</span>
    </div>

    <div class="form__input">
      <span class="head-input" :class="{ 'head-input_require': true }"
        >Цена товара</span
      >
      <input
        class="inputText"
        type="text"
        placeholder="Введите цену"
        v-model="getProduct.price"
        @blur="leaveFocus"
        @input="locale()"
      />
      <span>Это обязательное поле!</span>
    </div>

    <button :disabled="!getValid" class="btn">Добавить товар</button>
  </form>
</template>

<script setup>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["getValid", "getProduct"]),
  },
  methods: {
    ...mapMutations(["validate", "addCard"]),
    leaveFocus(event) {
      if (!event.target.value) {
        event.target.classList.add("error");
      } else {
        event.target.classList.remove("error");
      }
    },
    locale() {
      let num = Number(this.getProduct.price.replace(/\D/g, ""));
      this.getProduct.price = num.toLocaleString("ru-RU");
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: sticky;
  top: 50px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  min-width: 332px;
  margin-right: 16px;

  .btn {
    width: 100%;
    background: #7bae73;
    border-radius: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    padding: 10px 0 11px;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: default;
      color: #b4b4b4;
      background: #eeeeee;
    }
  }

  &__input {
    position: relative;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    .inputText {
      width: 100%;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: none;
      padding: 10px 16px 11px;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #3f3f3f;

      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
      }

      & + span {
        display: none;
      }
    }
    .error {
      border: 1px solid #ff8484;

      & + span {
        display: inline;
        font-weight: 400;
        font-size: 12px;
        line-height: 10px;
        letter-spacing: -0.02em;
        color: #ff8484;
      }
    }

    textarea {
      resize: none;
    }

    .head-input {
      position: relative;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485e;
      margin-bottom: 4px;

      &_require {
        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          top: 0;
          width: 4px;
          height: 4px;
          background: #ff8484;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>