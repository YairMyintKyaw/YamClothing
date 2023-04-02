import { Route, Routes } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/Home/Home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
