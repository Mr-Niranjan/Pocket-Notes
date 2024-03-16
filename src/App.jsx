import { BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css'
import Welcome from "./pages/WelcomePage.jsx"
import Collection from "./pages/CollectionPage.jsx"
import AddNote from "./components/AddNote.jsx"

function App() {

  return <BrowserRouter>
    <Routes>

      <Route path="/" element={<Welcome/>} />
      <Route path="/collection" element={<Collection/>} />
      <Route path="/addnote" element={<AddNote/>} />

    </Routes>
  </BrowserRouter>
}

export default App
