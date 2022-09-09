import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { routes } from "./routes/";

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        {routes.map((route) => (
          <Route key={route.component} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
