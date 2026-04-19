import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: '복위상소문', sub: 'Manifesto', path: '/manifesto' },
  { label: '만인소 명부', sub: 'Signature', path: '/signature' },
  { label: '아카이브', sub: 'Archive', path: '/archive' },
  { label: '연대', sub: 'Chronography', path: '/timeline' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: '64px',
        background: isHome ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <span
        onClick={() => navigate('/')}
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: '18px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          color: '#101010',
        }}
      >
        홍위하소서
      </span>

      <button
        onClick={() => navigate('/signature', { state: { openModal: true } })}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '8px 24px',
          border: '1px solid #101010',
          background: 'transparent',
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          color: '#101010',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#101010'
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#101010'
        }}
      >
        단종 복위에 함께하기
      </button>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {NAV_ITEMS.map(({ label, sub, path }) => {
          const active = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                padding: 0,
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: active ? 700 : 500,
                  letterSpacing: '0.03em',
                  color: active ? '#101010' : '#3F3F3F',
                  borderBottom: active ? '1px solid #101010' : 'none',
                  paddingBottom: active ? '1px' : '0',
                }}
              >
                {label}
              </div>
              <div style={{ fontSize: '10px', color: '#9F9F9F', letterSpacing: '0.05em' }}>{sub}</div>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
