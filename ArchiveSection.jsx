import { motion } from 'framer-motion'

const archiveItems = [
  { caption: '만인의 삼남자, 그녀자와의 인버불\n"어떤 아이에게 국정을 맡길 수 없는..."', date: '1453년', bg: '#C8C0B8' },
  { caption: '어린 왕의 고독\n"나는 오늘도 별을 세며 잠이 들었다."', date: '1452년', bg: '#B8C0C8' },
  { caption: '쟁봉포의 봄\n"강물이 흐르듯, 우리의 뜻도 흘러갑니다."', date: '1454년', bg: '#C8C8B8' },
  { caption: '충신들의 모임\n"죽음도 두렵지 않습니다, 전하."', date: '1453년', bg: '#C0B8C8' },
  { caption: '달빛 아래에서\n"홀로 앉아 그리운 것들을 생각합니다."', date: '1455년', bg: '#C8B8B8' },
  { caption: '복위의 서약\n"우리는 기억할 것입니다, 영원히."', date: '1456년', bg: '#B8C8C0' },
  { caption: '어린 군주의 미소\n"그 다정한 미소를 기억하시나요?"', date: '1452년', bg: '#C8C0C0' },
  { caption: '쟁봉포 마을 사람들\n"모두가 한마음으로 뭉쳤습니다."', date: '1454년', bg: '#C0C8C8' },
  { caption: '마지막 인사\n"잊지 마세요, 우리 꼭 다시 만납니다."', date: '1455년', bg: '#C8C8C0' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      style={{
        minHeight: '100vh',
        background: '#FAFAFA',
        padding: '100px 80px',
      }}
    >
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: '56px', textAlign: 'center' }}
      >
        <p style={{ fontSize: '11px', color: '#9F9F9F', letterSpacing: '0.15em', marginBottom: '8px' }}>Archive</p>
        <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '24px', fontWeight: 400, letterSpacing: '0.1em', color: '#101010' }}>
          아카이브
        </h2>
      </motion.div>

      {/* 3열 갤러리 그리드 */}
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {archiveItems.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            style={{ cursor: 'pointer' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {/* 이미지 플레이스홀더 */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/3',
                background: item.bg,
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.3)', letterSpacing: '0.05em' }}>
                [ 스틸컷 {i + 1} ]
              </span>
              {/* Hover 오버레이 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.15)',
                }}
              />
            </div>

            {/* 캡션 */}
            <p style={{ fontSize: '12px', color: '#3F3F3F', lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: '4px' }}>
              {item.caption}
            </p>
            <p style={{ fontSize: '11px', color: '#9F9F9F' }}>{item.date}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 아카이브 기사 섹션 A: 형광 그린 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: '80px',
          background: '#39FF14',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#000', marginBottom: '16px', opacity: 0.5 }}>
            홍위사랑 | ARCHIVE
          </p>
          <h3
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '56px',
              fontWeight: 900,
              color: '#000',
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            소들은<br />어디로<br />갔나
          </h3>
          <p style={{ fontSize: '14px', color: '#000', lineHeight: 1.9, opacity: 0.75, maxWidth: '480px' }}>
            마음 아이들로의 '짧긋', 아이들의 실정은?<br />
            "선생님은 무관지 않아요. 잡혔만 얘보다 따뜻한 사랑을 해주셨어요."<br /><br />
            달콤한 그 때의 아이스크림 세비<br /><br />
            "마음 아이들로의 짧긋, 아이들의 실정은?"<br />
            반드시 가장 높은 곳까지 부드럽게 짧긋된 사이의 의미가 무엇인지,<br />
            선생님이 구름을 놀아가시면 부화 살자들에 누가 생각해요?
          </p>
        </div>

        {/* 배경 장식 텍스트 */}
        <div
          style={{
            position: 'absolute',
            right: '60px',
            bottom: '40px',
            fontFamily: "'Noto Serif KR', serif",
            fontSize: '80px',
            color: 'rgba(0,0,0,0.08)',
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          홍위
        </div>

        <div style={{ marginTop: '32px' }}>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '18px',
              color: '#000',
              opacity: 0.4,
              fontStyle: 'italic',
            }}
          >
            군주는 차라리 소여라
          </p>
        </div>
      </motion.div>

      {/* 아카이브 기사 섹션 B: 블랙 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: '4px',
          background: '#000000',
          padding: '60px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#fff', marginBottom: '16px', opacity: 0.4 }}>
            주군을 위한 시
          </p>
          <h3
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '64px',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            위한<br />주군을<br />위한<br />시
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '10px', color: '#666' }}>IMG</span>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#fff' }}>홍위 팬 커뮤니티</p>
              <p style={{ fontSize: '11px', color: '#666' }}>복위 응원단</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '56px',
                  background: '#1A1A1A',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '9px', color: '#333' }}>IMG</span>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: '#fff', lineHeight: 1.5, marginBottom: '4px' }}>
                  홍위, 사랑
                </p>
                <p style={{ fontSize: '11px', color: '#555' }}>
                  군을 위한 시 · {1452 + i}년
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
