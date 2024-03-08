import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Header from "./pages/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position="top-right" />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/addExpense" element={<AddEdit />}></Route>
        <Route path="/update/:id" element={<AddEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
