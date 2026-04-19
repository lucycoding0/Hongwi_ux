import { motion, AnimatePresence } from 'framer-motion'

export default function ConfirmModal({ isOpen, onClose, name }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              background: '#FFFFFF',
              width: '380px',
              maxWidth: '90vw',
              padding: '48px 40px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '20px',
                fontWeight: 600,
                color: '#101010',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              다시, 홍위로
            </h3>
            <p style={{ fontSize: '14px', color: '#3F3F3F', lineHeight: 1.8, marginBottom: '8px' }}>
              소중한 뜻을 담은 명패를 나무에 걸었습니다.
            </p>
            <p style={{ fontSize: '13px', color: '#6F6F6F', marginBottom: '36px' }}>
              함께해주셔서 영광입니다.
            </p>
            {name && (
              <p style={{ fontSize: '13px', color: '#9F9F9F', marginBottom: '24px', fontFamily: "'Noto Serif KR', serif" }}>
                — {name} 님의 명패가 나무에 걸렸습니다 —
              </p>
            )}
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '14px',
                border: '1px solid #101010',
                background: '#101010',
                color: '#FFFFFF',
                fontSize: '14px',
                fontFamily: "'Noto Sans KR', sans-serif",
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              확인
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
