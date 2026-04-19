import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NameTagModal from './NameTagModal'
import ConfirmModal from './ConfirmModal'

const TAG_POSITIONS = [
  { x: '38%', y: '22%', rotate: -8 },
  { x: '55%', y: '18%', rotate: 5 },
  { x: '28%', y: '32%', rotate: -12 },
  { x: '48%', y: '28%', rotate: 3 },
  { x: '62%', y: '25%', rotate: 9 },
  { x: '35%', y: '42%', rotate: -6 },
  { x: '52%', y: '38%', rotate: 7 },
  { x: '67%', y: '35%', rotate: -4 },
  { x: '42%', y: '50%', rotate: 10 },
  { x: '58%', y: '46%', rotate: -9 },
  { x: '30%', y: '55%', rotate: 6 },
  { x: '70%', y: '50%', rotate: -7 },
]

function NameTag({ name, position }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, rotate: position.rotate * 2 }}
      animate={{ opacity: 1, y: 0, rotate: position.rotate }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: `rotate(${position.rotate}deg)`,
        transformOrigin: 'top center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      {/* 실 */}
      <div style={{ width: '1px', height: '20px', background: 'rgba(100,60,20,0.5)' }} />
      {/* 명패 */}
      <div
        style={{
          width: '48px',
          minHeight: '80px',
          background: 'linear-gradient(180deg, #C8A060 0%, #A07840 100%)',
          borderRadius: '8px 8px 4px 4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 4px rgba(255,255,255,0.15)',
          padding: '8px 4px',
          gap: '2px',
        }}
      >
        {/* 상단 걸이 구멍 */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.25)',
          }}
        />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
          {name.split('').map((char, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '13px',
                color: 'rgba(255,255,255,0.92)',
                fontWeight: 600,
                lineHeight: 1.3,
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function SignatureTree({ isModalOpen, setIsModalOpen }) {
  const [nameTags, setNameTags] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [lastAdded, setLastAdded] = useState('')

  const handleSubmit = (name) => {
    setNameTags((prev) => [...prev, name])
    setLastAdded(name)
    setIsModalOpen(false)
    setTimeout(() => setShowConfirm(true), 300)
  }

  return (
    <>
      <section
        id="signature"
        style={{
          minHeight: '100vh',
          background: '#DEEAFF',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 섹션 헤더 */}
        <div style={{ padding: '80px 80px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#6F9FBF', letterSpacing: '0.1em', marginBottom: '4px' }}>Signature</p>
            <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '22px', color: '#101010', fontWeight: 400, letterSpacing: '0.08em' }}>
              만인소 명부
            </h2>
          </div>
          <p style={{ fontSize: '13px', color: '#3F6F8F', lineHeight: 1.6, textAlign: 'right', maxWidth: '280px' }}>
            당신의 이름을 새긴 명패를 걸어,<br />단종의 복위를 함께 염원합시다.
          </p>
        </div>

        {/* 명패 수 카운터 */}
        <div style={{ padding: '16px 80px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#101010', fontFamily: "'Noto Serif KR', serif" }}>
            {nameTags.length}
          </span>
          <span style={{ fontSize: '13px', color: '#6F9FBF' }}>개의 명패가 나무에 걸렸습니다</span>
        </div>

        {/* 소나무 + 명패 영역 */}
        <div style={{ flex: 1, position: 'relative', minHeight: '600px', marginTop: '24px' }}>
          {/* 소나무 SVG 플레이스홀더 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* 나무 줄기 */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1440 700"
              style={{ position: 'absolute', bottom: 0 }}
              preserveAspectRatio="xMidYMax meet"
            >
              {/* 줄기 */}
              <path
                d="M720 700 C720 700 700 580 680 480 C660 380 640 280 660 200"
                stroke="#5A3A1A"
                strokeWidth="28"
                fill="none"
                strokeLinecap="round"
              />
              {/* 주요 가지들 */}
              <path d="M670 380 C620 340 480 300 320 240" stroke="#4A3010" strokeWidth="14" fill="none" strokeLinecap="round" />
              <path d="M665 300 C700 260 820 230 980 200" stroke="#4A3010" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M668 440 C600 420 460 400 300 380" stroke="#4A3010" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M672 480 C730 460 850 440 1000 420" stroke="#4A3010" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M660 200 C640 160 600 100 580 60" stroke="#4A3010" strokeWidth="10" fill="none" strokeLinecap="round" />
              {/* 솔잎 군집 표현 */}
              {[
                [420, 220, 80], [580, 140, 70], [760, 150, 90], [940, 170, 75],
                [340, 350, 65], [260, 350, 60], [460, 370, 70], [920, 390, 65],
                [1060, 390, 70], [300, 420, 55], [580, 55, 65],
              ].map(([cx, cy, r], i) => (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy}
                  rx={r * 1.4}
                  ry={r * 0.7}
                  fill="#2D6A2D"
                  opacity="0.85"
                />
              ))}
            </svg>
          </div>

          {/* 명패들 */}
          <AnimatePresence>
            {nameTags.map((name, i) => (
              <NameTag
                key={`${name}-${i}`}
                name={name}
                position={TAG_POSITIONS[i % TAG_POSITIONS.length]}
              />
            ))}
          </AnimatePresence>

          {/* 명패 추가 버튼 (나무 하단) */}
          <div
            style={{
              position: 'absolute',
              bottom: '48px',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: '14px 40px',
                border: '1px solid #101010',
                background: 'rgba(255,255,255,0.9)',
                fontSize: '14px',
                fontFamily: "'Noto Sans KR', sans-serif",
                cursor: 'pointer',
                letterSpacing: '0.05em',
                color: '#101010',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#101010'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.color = '#101010' }}
            >
              명패 달기
            </button>
          </div>
        </div>
      </section>

      <NameTagModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />

      <ConfirmModal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        name={lastAdded}
      />
    </>
  )
}
