import "./App.css";
import { Routes, Route } from "react-router-dom";
import MetricsAndData from "./components/KeyAchievements/MetricsAndData";
import SkillSet from "./components/KeyAchievements/SkillSet";
import SuccessStories from "./components/KeyAchievements/SuccessStories";
import Project1 from "./components/UpcomingProjects/Project1";
import Project2 from "./components/UpcomingProjects/Project2";
import AboutMe from "./components/AboutMe";
import BusinessOverview from "./components/BusinessOverview";
import NetworkingLinks from "./components/NetworkingLinks";
import PageNotFound from "./components/PageNotFound";
import { Outlet } from "react-router-dom";
import TimelineMain from "./components/Timeline";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/key-achievements" element={<Outlet />}>
        <Route path="metrics-and-data" element={<MetricsAndData />} />
        <Route path="skill-set" element={<SkillSet />} />
        <Route path="success-stories" element={<SuccessStories />} />
      </Route>
      <Route path="/upcoming-projects" element={<Outlet />}>
        <Route path="project-1" element={<Project1 />} />
        <Route path="project-2" element={<Project2 />} />
      </Route>
      <Route path="/business-overview" element={<BusinessOverview />} />
      <Route path="/networking-links" element={<NetworkingLinks />} />
      <Route path="/timeline" element={<TimelineMain />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
