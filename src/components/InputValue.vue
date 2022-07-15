<template>
  <div class="input" :class="{ input_require: inputReq }">
    <span class="input__head">{{ headInput }}</span>
    <slot>
      <input
        class="inputText"
        type="text"
        :placeholder="inputPlaceholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="
          !value
            ? $event.target.classList.add('error')
            : $event.target.classList.remove('error')
        "
      />
    </slot>

    <span v-if="inputReq">Это обязательное поле!</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      require: false,
    },
    headInput: {
      require: true,
      type: String,
    },
    inputReq: {
      default: true,
      require: true,
      type: Boolean,
    },
    inputPlaceholder: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  margin-bottom: 16px;

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
    margin-top: 4px;

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

  &__head {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    margin-bottom: 4px;

    .input_require & {
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
</style>