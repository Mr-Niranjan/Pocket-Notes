import { BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css'
import Welcome from "./pages/WelcomePage.jsx"
import Collection from "./pages/CollectionPage.jsx"

function App() {

  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<Welcome/>} />
      <Route path="/collection" element={<Collection/>} />

    </Routes>
  </BrowserRouter>
}

export default App
