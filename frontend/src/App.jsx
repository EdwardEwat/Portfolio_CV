import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage.jsx";
import Project from "./pages/project/project.jsx";
import NotFoundPage from "./pages/notFoundPage/notFoundPage.jsx";
import Education from "./pages/education/education.jsx";
import Experience from "./pages/experience/experience.jsx";
import Layout from "./layout/layout.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
