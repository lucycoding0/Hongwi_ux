import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SignatureTree from '../components/SignatureTree'
import Footer from '../components/Footer'

export default function SignaturePage() {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (location.state?.openModal) {
      setIsModalOpen(true)
    }
  }, [])

  return (
    <div style={{ paddingTop: '64px' }}>
      <SignatureTree isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
    </div>
  )
}
