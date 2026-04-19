import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

export default function HomePage() {
  const navigate = useNavigate()
  const handleJoinClick = () => navigate('/signature', { state: { openModal: true } })

  return <HeroSection onJoinClick={handleJoinClick} />
}
