import { Route, Routes } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./Components/routes/Home/Home.component";
import Navigation from "./Components/routes/Navigation/Navigation.component";
import SignIn from "./Components/routes/Sign-in/Sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
