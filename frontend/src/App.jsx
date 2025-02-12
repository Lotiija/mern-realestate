import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route  path="/" element={<About />} ></Route>
        <Route  path="/" element={<Profile />} ></Route>
        <Route  path="/" element={<SignIn />} ></Route>
        <Route  path="/" element={<SignUp />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App