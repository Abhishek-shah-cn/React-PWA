import { Routes, Route } from "react-router-dom"
import Layout from "./components/common/Layout.tsx"
import WinnersPage from "./pages/Winners.tsx"
import MorePage from "./pages/More.tsx"
import ResultPage from "./pages/Result.tsx"
import NotFound from "./pages/Notfound.tsx"
import PlayPage from "./pages/Play.tsx"
import History from "./pages/Histroy.tsx"
import "./index.css"

import PWABadge from './PWABadge.tsx'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PlayPage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/play" element={<PlayPage/>} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <PWABadge />
    </Layout>
  )
}

export default App
