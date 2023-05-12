import Intro from "../Intro/Intro";
import Lightbox from "../Lightbox/Lightbox";

import "./main-content.css";

const MainContent = () => {
  return (
    <main className="main">
      <Lightbox />
      <Intro />
    </main>
  );
};

export default MainContent;
