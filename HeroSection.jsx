import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const slides = [
  {
    id: 'home1',
    bgColor: '#E8E0D0',
    textContent: null,
    label: '홍위하소서',
  },
  {
    id: 'home2',
    bgColor: '#D8CFC0',
    textContent: {
      title: '이홍위',
      paragraphs: [
        '가장 높은 곳에서 가장 낮은 곳으로 지문 해를 위해,\n우리는 다시 동족을 향해 명패를 겁니다.',
        '열두 살의 어린 나이로 왕위에 올랐으나 가장 빛나는 자리에서 내려와야만 했던 열두 살의 소년, 홍위. 서슬 퍼런 칼날 앞에서도 꺾이지 않았던 그 다정한 미소를 기억하시나요?',
        '이 봄, 홍위의 따스한 승결이 꿋꿋이 바라는 이곳에서, 단종의 복위를 꿈꾸는 쟁봉포 마을 줄인들과 함께합니다.',
        '당신의 이름을 세긴 명패를 걸고, 왕의 귀환을 함께 준비해주세요.',
        '우리의 진심어린 응원이 닿는 그 순간, 진정한 복위로의 길이 시작될 것입니다.',
      ],
    },
  },
  {
    id: 'home3',
    bgColor: '#1A2A3A',
    isDark: true,
    textContent: {
      title: '복위로의 길',
      paragraphs: [
        '"흩어진 뭇 성의 이름이 모여, 하나의 빛나는 왕권이 됩니다."',
        '계유년의 차가운 삶에 떨려버린 그의 시간, 이제 이곳, 쟁봉포 마을의 느티나무 아래에서 다시 시작합니다.',
        '이곳은 단순한 기록의 공간이 아닙니다. 세긴 이름 하나하나가 모여 다시 만인소를 이루고, 야속의 저물었던 우리의 마음 다시 뭉독 끌고모아 가장 강력한 힘이 될 것입니다.',
        '지금 당신의 이름을 새긴 명패를 달아주세요.\n복위로의 길은, 당신의 손끝에서 시작됩니다.',
      ],
    },
  },
  {
    id: 'home4',
    bgColor: '#C8D8C8',
    textContent: {
      title: '연대',
      isTimeline: true,
      events: [
        { year: '1441년', era: '세종 23년', desc: '원손(元孫) 이홍위의 탄생' },
        { year: '1448년', era: '세종 30년', desc: '왕세손에 책봉' },
        { year: '1450년', era: '문종 즉위', desc: '세종대왕 승하 및 문종 즉위, 이홍위, 왕세자으로 책봉' },
        { year: '1452년', era: '문종 2년', desc: '문종 승하, 12세, 조선 제6대 국왕으로 즉위' },
        { year: '1453년', era: '단종 1년', desc: '계유정난 발생' },
      ],
    },
  },
  {
    id: 'home5',
    bgColor: '#2A1A0A',
    isDark: true,
    textContent: {
      title: '아카이브',
      isArchivePreview: true,
      caption: '만인의 삼남자, 그녀자와의 인버불\n"어떤 아이에게 국정을 맡길 수 없는..."',
      date: '1453년',
    },
  },
]

function HeroSlide({ slide, onJoinClick }) {
  const isDark = slide.isDark

  return (
    <section
      id={slide.id}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        scrollSnapAlign: 'start',
        flexShrink: 0,
      }}
    >
      {/* 좌측 이미지 영역 */}
      <div
        style={{
          width: '50%',
          height: '100%',
          background: slide.bgColor,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
            fontSize: '14px',
            letterSpacing: '0.1em',
            fontFamily: "'Noto Serif KR', serif",
          }}
        >
          {/* 이미지 플레이스홀더 */}
          <span>[ 이홍위 이미지 ]</span>
        </div>

        {/* 사이드 네비 */}
        {slide.textContent && (
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-end',
            }}
          >
            {['이홍위', '복위로의 길', '연대', '아카이브'].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: '11px',
                  color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
                  letterSpacing: '0.05em',
                  writingMode: 'horizontal-tb',
                  fontFamily: "'Noto Serif KR', serif",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* 원형 씰 */}
        {slide.textContent && (
          <div
            style={{
              position: 'absolute',
              right: '48px',
              bottom: '48px',
              width: '72px',
              height: '72px',
              border: `2px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.25)'}`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '9px',
                color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)',
                letterSpacing: '0.05em',
                fontFamily: "'Noto Serif KR', serif",
              }}
            >
              홍위
            </span>
          </div>
        )}
      </div>

      {/* 우측 컨텐츠 영역 */}
      <div
        style={{
          width: '50%',
          height: '100%',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 64px',
          position: 'relative',
        }}
      >
        {/* 배경 문양 */}
        <div
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '180px',
            height: '180px',
            opacity: 0.04,
            fontSize: '160px',
            lineHeight: 1,
            pointerEvents: 'none',
            fontFamily: 'serif',
          }}
        >
          龍
        </div>

        {slide.textContent ? (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ width: '100%', maxWidth: '440px' }}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: slide.textContent.isTimeline || slide.textContent.isArchivePreview ? '24px' : '20px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#101010',
              }}
            >
              {slide.textContent.title}
            </motion.h2>

            {slide.textContent.isTimeline && (
              <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {slide.textContent.events.map((ev) => (
                  <motion.div
                    key={ev.year}
                    variants={fadeUp}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 80px 1fr',
                      gap: '12px',
                      alignItems: 'start',
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                      paddingBottom: '12px',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: '#101010', fontWeight: 500 }}>{ev.year}</span>
                    <span style={{ fontSize: '12px', color: '#6F6F6F' }}>{ev.era}</span>
                    <span style={{ fontSize: '12px', color: '#3F3F3F', lineHeight: 1.6 }}>{ev.desc}</span>
                  </motion.div>
                ))}
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#6F6F6F' }}>더보기</span>
                  <span style={{ fontSize: '12px', color: '#6F6F6F' }}>→</span>
                </motion.div>
              </motion.div>
            )}

            {slide.textContent.isArchivePreview && (
              <motion.div variants={fadeUp}>
                <div
                  style={{
                    width: '220px',
                    height: '160px',
                    background: '#E0D8D0',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#9F9F9F',
                  }}
                >
                  [ 스틸컷 ]
                </div>
                <p style={{ fontSize: '13px', color: '#3F3F3F', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {slide.textContent.caption}
                </p>
                <p style={{ fontSize: '11px', color: '#9F9F9F', marginTop: '8px' }}>{slide.textContent.date}</p>
              </motion.div>
            )}

            {slide.textContent.paragraphs && (
              <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {slide.textContent.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.85,
                      color: '#3F3F3F',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {p}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* Home1: 빈 히어로 - 로고만 */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ fontSize: '12px', color: '#9F9F9F', letterSpacing: '0.15em', fontFamily: "'Noto Serif KR', serif" }}>
              단종의 복위를 염원하며
            </p>
            <button
              onClick={onJoinClick}
              style={{
                marginTop: '24px',
                padding: '12px 32px',
                border: '1px solid #101010',
                background: 'transparent',
                fontSize: '14px',
                fontFamily: "'Noto Sans KR', sans-serif",
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#101010'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#101010' }}
            >
              단종 복위에 함께하기
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default function HeroSection({ onJoinClick }) {
  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      className="hide-scrollbar"
    >
      {slides.map((slide) => (
        <HeroSlide key={slide.id} slide={slide} onJoinClick={onJoinClick} />
      ))}
    </div>
  )
}
