import { motion } from 'framer-motion'

const events = [
  { year: '1441년', era: '세종 23년', desc: '원손(元孫) 이홍위의 탄생. 세종대왕의 손자로 태어나다.' },
  { year: '1448년', era: '세종 30년', desc: '왕세손에 책봉. 할아버지 세종의 특별한 사랑을 받다.' },
  { year: '1450년', era: '문종 즉위', desc: '세종대왕 승하 및 문종 즉위. 이홍위, 왕세자으로 책봉.' },
  { year: '1452년', era: '문종 2년', desc: '문종 승하. 12세의 나이로 조선 제6대 국왕에 즉위하다.' },
  { year: '1453년', era: '단종 1년', desc: '계유정난 발생. 수양대군이 권력을 장악하다.' },
  { year: '1455년', era: '단종 3년', desc: '수양대군에게 왕위를 선위하고 상왕이 되다.' },
  { year: '1456년', era: '세조 2년', desc: '사육신의 복위 운동이 발각되다. 노산군으로 강봉.' },
  { year: '1457년', era: '세조 3년', desc: '강원도 영월 청령포로 유배. 그 해 17세의 나이로 승하하시다.' },
]

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: '#FFFFFF',
      }}
    >
      {/* 좌측 이미지 */}
      <div
        style={{
          width: '45%',
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#C0CCBA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <div style={{ textAlign: 'center', color: 'rgba(0,0,0,0.2)' }}>
          <div style={{ fontSize: '14px', letterSpacing: '0.1em', fontFamily: "'Noto Serif KR', serif" }}>
            [ 이홍위 이미지 ]
          </div>
          <div style={{ marginTop: '12px', fontSize: '11px', letterSpacing: '0.05em' }}>
            물가의 소년
          </div>
        </div>
      </div>

      {/* 우측 타임라인 */}
      <div
        style={{
          flex: 1,
          padding: '100px 80px',
          overflowY: 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
        >
          <p style={{ fontSize: '11px', color: '#9F9F9F', letterSpacing: '0.15em', marginBottom: '8px' }}>Chronography</p>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '24px', fontWeight: 400, letterSpacing: '0.1em', color: '#101010' }}>
            연대
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ position: 'relative' }}
        >
          {/* 세로선 */}
          <div
            style={{
              position: 'absolute',
              left: '112px',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'rgba(0,0,0,0.08)',
            }}
          />

          {events.map((ev, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 32px 1fr',
                gap: '16px',
                alignItems: 'start',
                marginBottom: '40px',
              }}
            >
              {/* 연도 */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#101010', fontFamily: "'Noto Serif KR', serif" }}>
                  {ev.year}
                </div>
                <div style={{ fontSize: '11px', color: '#9F9F9F', marginTop: '2px' }}>{ev.era}</div>
              </div>

              {/* 점 */}
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: i === events.length - 1 ? '#9F9F9F' : '#101010',
                    border: i === events.length - 1 ? '1px solid #9F9F9F' : 'none',
                    opacity: i === events.length - 1 ? 0.5 : 1,
                  }}
                />
              </div>

              {/* 설명 */}
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.8,
                  color: i === events.length - 1 ? '#9F9F9F' : '#3F3F3F',
                  wordBreak: 'keep-all',
                }}
              >
                {ev.desc}
              </p>
            </motion.div>
          ))}

          {/* 더보기 */}
          <motion.div
            variants={itemVariant}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '128px', marginTop: '8px' }}
          >
            <span style={{ fontSize: '12px', color: '#6F6F6F' }}>더보기</span>
            <span style={{ fontSize: '14px', color: '#6F6F6F' }}>→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
