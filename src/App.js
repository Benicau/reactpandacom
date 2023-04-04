import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePageEn from "./pages/en/HomePage";
import HomePageFr from "./pages/fr/HomePage";
import SlideStart from './components/fr/SliderService/SlideStart';


function App() {
  return (
    <div className="App"> 
       <SlideStart></SlideStart>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageFr />} />
          <Route path="/en" element={<HomePageEn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
