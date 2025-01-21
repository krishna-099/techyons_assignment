import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter basename="/techyons_assignment">
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
