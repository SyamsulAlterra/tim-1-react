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
  newsEng: [],
  newsFer: [],
  newsIt: [],
  search: ""
};

export let store = createStore(initialState);

export let actions = store => ({
  setNama(state, namaInput) {
    return { nama: namaInput };
  },

  getData: state => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        store.setState({ news: response.data.articles });
        console.log(response);
      })
      .catch(error => {
        console.log("Terdapat error di get data :", error);
      });
  },

  getData1: state => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        store.setState({ newsFer: response.data.articles });
        console.log(response);
        console.log("ini news1", store.getState().newsFer);
      })
      .catch(error => {
        console.log("Terdapat error di get data :", error);
      });
  },

  getData2: state => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=it&category=sports&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        store.setState({ newsIt: response.data.articles });
        console.log(response);
        console.log("ini news2", store.getState().newsIt);
      })
      .catch(error => {
        console.log("Terdapat error di get data :", error);
      });
  },

  setAvatar(state, namaInput) {
    return { avatar: namaInput };
  },

  setSearch(state, value) {
    return { search: value };
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
// newsEng: [],
// newsFer: [],
// newsIt: [],
