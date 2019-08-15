import createStore from "unistore";

const initialState = {
  nama: "",
  email: "",
  avatar: "",
  isLogin: null,
  listMovies: [],
  listMoviesByCategory: []
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
  }
});

export { store, actions };
