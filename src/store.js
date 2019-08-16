import createStore from "unistore";
import axios from "axios";

const initialState = {
  nama: "",
  email: "",
  avatar: "",
  isLogin: null,
  listMovies: [],
  listMoviesByCategory: [],

  newsEng: [],
  newsFer: [],
  newsIt: [],
  search: "",

  hostBetting: "https://api.the-odds-api.com/v3/odds/?region=uk&mkt=h2h",

  apikeyBetting: "&apiKey=2c009f10b9bfec71f321bd2155964969&sport=",

  soccer_epl: [],
  soccer_italy_serie_a: [],
  soccer_spain_la_liga: [],
  upcomingIndex: [],
  upcomingMatch: [],

  news: [],
  newsIndex: 0,
  matchDate: "",
  currentLeague: "epl",
  syamsulDate: "",
  homeTeam: ""
};

export let store = createStore(initialState);

export let actions = store => ({
  setNama(state, namaInput) {
    return { nama: namaInput };
  },

  async getData(state) {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        // let newsBaru = response.data.articles.map(value => {
        //   if (
        //     value.url.includes("football") ||
        //     value.description.includes("football")
        //   ) {
        //     return value;
        //   }
        // });
        // if (newsBaru.length === 0) {
        store.setState({ news: response.data.articles });
        // } else {
        //   store.setState({ news: newsBaru });
        // }
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
  },

  setMatchDate(state, value) {
    return { matchDate: value };
  },
  setLeague(state, league) {
    return { currentLeague: league };
  },
  passedDate(state) {
    let mon = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    };

    let secData = state.matchDate.split(" ");
    let day = secData[2].slice(0, secData[2].length - 1);
    let month = mon[secData[1].slice(0, secData[1].length)];
    let year = secData[3].slice(0, secData[3].length - 1);

    return {
      syamsulDate: year + "-" + month + "-" + day
    };
  },
  setHomeTeam(state, team) {
    return { homeTeam: team };
  }
});

// export { store, actions };
// newsEng: [],
// newsFer: [],
// newsIt: [],
