import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import UserDetail from "./UserDetail"
import { Toaster } from "@/components/ui/sonner"

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6">
        <Link to="/" className="hover:underline font-bold">ホーム</Link>
        <Link to="/about" className="hover:underline">アバウト</Link>
      </nav>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
      <Toaster />
    </BrowserRouter>
  )
}

export default App