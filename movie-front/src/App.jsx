import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import api from "./api/axios";
import Chatbot from "./components/Chatbot.jsx";

export default function App() {
  const [now, setNow] = useState(null);
  const [popular, setPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  async function loadMovie() {
    const [res1, res2, res3] = await Promise.all([
      //Promise.all(프로미스 올)은 여러 API 요청을 동시에 보내고, 모두 끝나면 결과를 한꺼번에 받는다.
      api.get("movie/now_playing"),
      api.get("tv/popular"),
      api.get("movie/top_rated"),
    ]);
    setNow(res1.data.results.filter((m) => m.poster_path));
    setPopular(res2.data.results.filter((m) => m.poster_path));
    setTopRated(res3.data.results.filter((m) => m.poster_path));
    // .filter()로 포스터 이미지(poster_path)가 있는 영화만 골라낸다. 포스터가 없으면 화면에 빈 카드가 생기기 때문이다.
  }

  useEffect(() => {
    loadMovie();
  }, []);

  const loading = now === null || popular === null || topRated === null;
  // 셋 중 하나만 null이어도  loading 중으로 간주한다

  const ctx = { //ctx.now, ctx.popular, 좌측이 null이면 [] 걸 받음(or 느낌)
    now: now || [],
    popular: popular || [],
    topRated: topRated || [],
    loading
  };

  return (
    <>
      <Header />
      <Outlet context={ctx} />
      <Footer />
      <Chatbot />
    </>
  );
}
