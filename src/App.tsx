import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/techyons_assignment">
      <Routes>
        <Route path="/" element={<> krishna</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
