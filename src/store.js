import createStore from "unistore";
import axios from "axios";

const initialState = {
  nama: "",
  email: "",
  avatar: "",
  isLogin: null,
  listMovies: [],
  listMoviesByCategory: [],
  news: [],
  search: ""
};

export let store = createStore(initialState);

export let actions = store => ({
  setNama(state, namaInput) {
    return { nama: namaInput };
  },

  setSearch: (state, event) => {
    store.setState({ search: event.target.value });
  },

  setDefaultSearch: state => {
    store.setState({ search: "" });
  },

  getData: state => {
    axios
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
  }
});

// export { store, actions };
