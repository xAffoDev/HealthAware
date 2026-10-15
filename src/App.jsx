import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicDetails from "./pages/TopicDetails";
import Campaigns from "./pages/Campaigns";
import Tips from "./pages/Tips";
import Quiz from "./pages/Quiz";
import Resources from "./pages/Resources";
import CampaignDetails from "./pages/CampaignDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route
            path="/topics/:topicId"
            element={<TopicDetails />}
          />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route
            path="/campaigns/:campaignId"
            element={<CampaignDetails />}
          />
          <Route path="/tips" element={<Tips />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;