import createStore from "unistore";
import axios from "axios";

const initialState = {
  nama: "",
  email: "",
  avatar: "",
  isLogin: null,
  listMovies: [],
  listMoviesByCategory: [],
  hostBetting: "https://api.the-odds-api.com/v3/odds/?region=uk&mkt=h2h",
  apikeyBetting: "&apiKey=72bc0d66cf1557bc13b37a07304a0a6f&sport=",
  listMatch: {
    soccer_epl: []
  }
};

let store = createStore(initialState);

let actions = store => ({
  setNama(state, namaInput) {
    return { nama: namaInput };
  },
  setAvatar(state, namaInput) {
    return { avatar: namaInput };
  },
  setEmail(state, namaEmail) {
    return { email: namaEmail };
  },
  login(state) {
    console.log(state.isLogin);
    return { isLogin: 1 };
  },
  logout(state) {
    console.log(state.isLogin);
    return { isLogin: null };
  },
  setMovies(state, listMovies) {
    return { listMovies: listMovies };
  },
  setMoviesByCategory(state, listMovies) {
    return { listMoviesByCategory: listMovies };
  },
  setListMatch(state, league, listMatchInput) {
    if (league === "soccer_epl") {
      return { listMatch: { soccer_epl: listMatchInput } };
    }
  },
  async getDataBetting(state, league) {
    // console.log(store.getState().hostBetting);
    await axios
      .get(
        store.getState().hostBetting + store.getState().apikeyBetting + league
      )
      .then(response => {
        console.log("luar if", response.data);

        if (league === "soccer_epl") {
          store.setState({ listMatch: { soccer_epl: response.data.data } });
        }
      })
      .catch(error => {
        console.log("getDatabetting", error);
      });
  }
});

export { store, actions };
