import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//라우팅할 컴포넌트 임포트
import { Home } from "./components/Home.jsx";
import { MovieDetail } from "./components/MovieDetail.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx"; 
// 404 페이지, 디자인할 수도 있음
import { Category } from "./components/Category.jsx";
//리액트는 컴포넌트 간의 연결을 하기 위한 라우터 설정 과정이 필요함.
// 라우터하는 행위 그자체=라우팅
//라우팅(네트워크 간 최적으로 정보 전달해주기 위한 연결 기술) 설정을 하기 위해서는 모듈 설치가 필수
import { createBrowserRouter, RouterProvider } from "react-router";
// 소문자는 함수. 대문자는 컴포넌트
// 경로설정하는 법
const router = createBrowserRouter([
  // {path:'/', element:<App/>,children:[{}]}
  // 객체 하나에 패스 하나
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: [<Home />],
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
      { path: "category/:type", element: <Category /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
