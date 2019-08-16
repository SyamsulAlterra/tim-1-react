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
  apikeyBetting: "&apiKey=ef448035db83c1223cd34734ecac60f8&sport=",

  soccer_epl: [],
  soccer_italy_serie_a: [],
  soccer_spain_la_liga: [],
  upcomingIndex: [],
  upcomingMatch: [],

  news: [],
  newsIndex: 0
};

export let store = createStore(initialState);

export let actions = store => ({
  setNama(state, namaInput) {
    return { nama: namaInput };
  },

  async getData(state) {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        store.setState({ news: response.data.articles });
        console.log(response);
      })
      .catch(error => {
        console.log("Terdapat error di get data :", error);
      });
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
      return { soccer_epl: listMatchInput };
    }
  },
  getDataBetting(state, league) {
    // console.log(store.getState().hostBetting);
    axios
      .get(
        store.getState().hostBetting + store.getState().apikeyBetting + league
      )
      .then(response => {
        console.log("luar if", response.data);

        if (league == "soccer_epl") {
          store.setState({ soccer_epl: response.data.data });
        } else if (league == "soccer_italy_serie_a") {
          store.setState({ soccer_italy_serie_a: response.data.data });
        } else if (league == "soccer_spain_la_liga") {
          store.setState({ soccer_spain_la_liga: response.data.data });
        }
      })
      .catch(error => {
        console.log("getDatabetting", error);
      });
  },

  setNewsIndex(state) {
    if (state.newsIndex === state.news.length - 1) {
      return { newsIndex: 0 };
    } else {
      return { newsIndex: state.newsIndex + 1 };
    }
  },
  setNews(state, value) {
    console.log("kuy");
    return { upcomingMatch: value };
  }
});

// export { store, actions };
