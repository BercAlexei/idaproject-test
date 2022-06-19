import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        name: "Ромашка",
        description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor nisi, corrupti maiores minima nostrum vitae! Accusantium assumenda maxime itaque architecto magni rem sint reprehenderit eius repellat et. Animi, vitae.",
        imageLink: "data:image/jpeg;base64,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",
        price: "1000",
      }
    ],
    valid: false,
    product: {
      name: "",
      description: "",
      imageLink: "",
      price: "",
    },
    condition: 'default'
  },
  getters: {
    getValid(state) {
      return state.valid
    },
    getCards(state) {
      console.log(JSON.parse(localStorage.getItem('db')).length)
      if (localStorage.getItem('db') && JSON.parse(localStorage.getItem('db')).length !== 0) {
        state.cards = JSON.parse(localStorage.getItem('db'));
      }

      const newArr = JSON.parse(JSON.stringify(state.cards));

      switch (true) {
        case (state.condition == 'alphabet'):
          return newArr.sort((a, b) => a.name.localeCompare(b.name));
        case (state.condition == 'min'):
          return newArr.sort((a, b) => {
            a.price = a.price.replace(/\D/g, "")
            b.price = b.price.replace(/\D/g, "")
            return a.price - b.price
          });
        case (state.condition == 'max'):
          return newArr.sort((a, b) => {
            a.price = a.price.replace(/\D/g, "")
            b.price = b.price.replace(/\D/g, "")
            return b.price - a.price
          });
        default:
          return state.cards;
      }

    },
    getProduct(state) {
      return state.product
    },
    getCondition(state) {
      return state.condition
    }
  },

  mutations: {
    validate(state) {
      if (state.product.name && state.product.imageLink && state.product.price) {
        state.valid = true
      } else {
        state.valid = false
      }
    },
    addCard(state) {
      let newObj = Object.assign({ id: state.cards.length + 1 }, state.product)
      state.cards.push(newObj)
      state.product.name = '';
      state.product.description = '';
      state.product.imageLink = '';
      state.product.price = '';
      state.valid = false
    },
    deleteCard(state, id) {
      state.cards = state.cards.filter(item => item.id !== id)
    },
    updateCondition(state, event) {
      state.condition = event.target.value
    },
    updateLocaleStarage(state) {
      localStorage.setItem('db', JSON.stringify(state.cards))
    }
  }
})
