import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ManifestoPage from './pages/ManifestoPage'
import SignaturePage from './pages/SignaturePage'
import ArchivePage from './pages/ArchivePage'
import TimelinePage from './pages/TimelinePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/signature" element={<SignaturePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
