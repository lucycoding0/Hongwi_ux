import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NameTagModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('')
  const canvasRef = useRef(null)
  const isDrawing = useRef(false)

  useEffect(() => {
    if (!isOpen) {
      setName('')
      clearCanvas()
    }
  }, [isOpen])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  const startDraw = (e) => {
    isDrawing.current = true
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getPos(e, canvas)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e) => {
    if (!isDrawing.current) return
    e.preventDefault()
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#2A1A0A'
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    const { x, y } = getPos(e, canvas)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const endDraw = () => { isDrawing.current = false }

  const handleSubmit = () => {
    if (!name.trim()) return
    onSubmit(name.trim())
    setName('')
    clearCanvas()
  }

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
            zIndex: 200,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              background: '#FFFFFF',
              width: '600px',
              maxWidth: '90vw',
              padding: '48px',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            }}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#6F6F6F',
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
              {/* 명패 미리보기 */}
              <div style={{ flexShrink: 0 }}>
                <div
                  style={{
                    width: '90px',
                    height: '160px',
                    background: 'linear-gradient(180deg, #C8A060 0%, #A0784A 100%)',
                    borderRadius: '12px 12px 4px 4px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.15)',
                    position: 'relative',
                  }}
                >
                  {/* 걸이 구멍 */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.3)',
                      border: '2px solid rgba(255,255,255,0.2)',
                    }}
                  />
                  <div
                    style={{
                      marginTop: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {(name || '홍기동').split('').map((char, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: '20px',
                          color: 'rgba(255,255,255,0.9)',
                          fontWeight: 600,
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 입력 영역 */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '15px',
                    color: '#101010',
                    marginBottom: '4px',
                    lineHeight: 1.6,
                  }}
                >
                  명패에 이름을 새겨주세요.
                </p>
                <p style={{ fontSize: '13px', color: '#6F6F6F', marginBottom: '24px', lineHeight: 1.6 }}>
                  쟁봉포 마을의 나무에 걸어, 우리의 뜻을 전합시다.
                </p>

                {/* 이름 입력 */}
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value.slice(0, 4))}
                    placeholder="이름 석자를 써주세요"
                    maxLength={4}
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      border: 'none',
                      borderBottom: '1px solid #101010',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: "'Noto Sans KR', sans-serif",
                      color: '#101010',
                      background: 'transparent',
                    }}
                  />
                </div>

                {/* 서명 캔버스 */}
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontSize: '12px', color: '#9F9F9F', marginBottom: '8px' }}>이곳에 서명을 해주세요</p>
                  <canvas
                    ref={canvasRef}
                    width={240}
                    height={80}
                    onMouseDown={startDraw}
                    onMouseMove={draw}
                    onMouseUp={endDraw}
                    onMouseLeave={endDraw}
                    onTouchStart={startDraw}
                    onTouchMove={draw}
                    onTouchEnd={endDraw}
                    style={{
                      border: '1px solid #E0E0E0',
                      width: '100%',
                      height: '80px',
                      touchAction: 'none',
                    }}
                  />
                  <button
                    onClick={clearCanvas}
                    style={{
                      marginTop: '4px',
                      background: 'none',
                      border: 'none',
                      fontSize: '11px',
                      color: '#9F9F9F',
                      cursor: 'pointer',
                    }}
                  >
                    지우기
                  </button>
                </div>

                {/* 제출 버튼 */}
                <button
                  onClick={handleSubmit}
                  disabled={!name.trim()}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1px solid #101010',
                    background: name.trim() ? '#101010' : 'transparent',
                    color: name.trim() ? '#FFFFFF' : '#BFBFBF',
                    fontSize: '14px',
                    fontFamily: "'Noto Sans KR', sans-serif",
                    cursor: name.trim() ? 'pointer' : 'not-allowed',
                    letterSpacing: '0.05em',
                    transition: 'all 0.2s',
                  }}
                >
                  나무에 걸기
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
