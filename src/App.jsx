import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Work = lazy(() => import("./pages/Work/Work"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/about/About"));
const App = () => {
  return (
    <Layout>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
