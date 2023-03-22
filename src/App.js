import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePageFr from "./pages/HomePageFr";
import HomePageEn from "./pages/HomePageEn";

function App() {
  var contenu = ""
  if(localStorage.getItem('langage') === "fr"){

    contenu = <Route path="/" element={<HomePageFr />} />
  }else{
    contenu = <Route path="/" element={<HomePageEn />} />
  }

  return (
    <div className="App"> 
      <Router>
        <Routes>
        {contenu}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
