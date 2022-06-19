<template>
  <div id="app">
    <div class="container">
      <div class="head">
        <Title msg="Добавление товара" />
        <div class="select">
          <select class="sort" @change="updateCondition">
            <option value="default">По умолчанию</option>
            <option value="min">По цене min</option>
            <option value="max">По цене max</option>
            <option value="alphabet">По наименованию</option>
          </select>
        </div>
      </div>

      <div class="main">
        <Form />
        <div class="cards">
          <Card
            v-for="card in getCards"
            :key="card.id"
            :id="card.id"
            :image="card.imageLink"
            :title="card.name"
            :description="card.description"
            :price="card.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Title from "./components/MainTitle.vue";
import Form from "./components/FormAdd.vue";
import Card from "./components/CardProduct.vue";

export default {
  name: "App",
  components: {
    Title,
    Form,
    Card,
  },
  computed: {
    ...mapGetters(["getCards", "getCondition"]),
  },
  methods: {
    ...mapMutations([
      "updateCondition",
      "updateLocaleStarage",
    ]),
  },
  beforeUpdate() {
    this.updateLocaleStarage();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");

* {
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  min-height: 100vh;
  background: #e5e5e5;
  padding: 32px 0;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sort {
  position: relative;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  padding: 10px 32px 11px 16px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  appearance: none;
}

.select {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    background: url("assets/arrow.svg") center center/ contain no-repeat;
    cursor: pointer;
  }
}

.container {
  position: relative;
  max-width: 1375px;
  margin: 0 auto;
}

.main {
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 332px);
  gap: 16px;
}
</style>
