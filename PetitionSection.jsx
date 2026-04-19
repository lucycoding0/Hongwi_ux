import { motion } from 'framer-motion'

const petitionText = `복위 상소문

삼가 아뢰옵니다.

신 등은 지극히 미천한 몸으로 감히 옥체를 번거롭게 하오니, 황공함을 이기지 못하겠나이다.

열두 살의 나이에 만천하의 군주가 되셨으나, 간신의 음모로 인하여 부당하게 왕위를 잃으셨사옵니다. 이 어찌 하늘의 뜻이라 하겠사옵니까.

전하께서는 재위하시는 동안 백성을 사랑하시고 덕으로 다스리셨으니, 그 인덕(仁德)이 온 나라에 퍼졌사옵니다. 강원도 영월의 청령포에 홀로 계시는 동안에도 결코 백성에 대한 마음을 잃지 않으셨으니, 이것이야말로 진정한 군주의 덕목이옵니다.

이에 신 등 만인(萬人)은 한마음으로 전하의 복위를 청하옵나이다.

하늘이 알고 땅이 알고 귀신이 알 것이니, 부디 이 뜻을 굽어살피시어 속히 용상에 오르시어 뭇 백성의 간절한 소망에 응하여 주시옵소서.

삼가 죽음을 무릅쓰고 아뢰옵나이다.

계유년 가을, 쟁봉포 마을 주민 일동 올림`

export default function PetitionSection() {
  return (
    <section
      id="petition"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #FDE8EC 0%, #FAD0DC 40%, #F5B8C8 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 구름 문양 */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, pointerEvents: 'none' }}>
        {['10%', '30%', '55%', '75%', '90%'].map((left, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left,
              top: `${15 + i * 18}%`,
              fontSize: '80px',
              color: '#8B3A52',
            }}
          >
            ☁
          </div>
        ))}
      </div>

      {/* 상소문 제목 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '48px', textAlign: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '60px', height: '1px', background: '#8B3A52', opacity: 0.4 }} />
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '22px',
              fontWeight: 600,
              color: '#5A1A2E',
              letterSpacing: '0.15em',
            }}
          >
            복위 상소문
          </h2>
          <div style={{ width: '60px', height: '1px', background: '#8B3A52', opacity: 0.4 }} />
        </div>
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#8B3A52', letterSpacing: '0.1em', opacity: 0.7 }}>
          Mon Xoto
        </p>
      </motion.div>

      {/* 두루마리 문서 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'linear-gradient(180deg, rgba(255,240,244,0.95) 0%, rgba(255,228,235,0.95) 100%)',
          borderRadius: '4px',
          padding: '64px 48px',
          boxShadow: '0 8px 40px rgba(90,26,46,0.12)',
          border: '1px solid rgba(139,58,82,0.15)',
          position: 'relative',
        }}
      >
        {/* 두루마리 상단 장식 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #8B3A52, #C4607A, #8B3A52)',
            borderRadius: '4px 4px 0 0',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #8B3A52, #C4607A, #8B3A52)',
            borderRadius: '0 0 4px 4px',
          }}
        />

        <pre
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: '14px',
            lineHeight: 2.2,
            color: '#3A1020',
            whiteSpace: 'pre-wrap',
            wordBreak: 'keep-all',
            textAlign: 'justify',
          }}
        >
          {petitionText}
        </pre>

        {/* 낙관(도장) */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              border: '2px solid #8B3A52',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B3A52',
              fontSize: '16px',
              fontFamily: "'Noto Serif KR', serif",
              opacity: 0.7,
            }}
          >
            홍위
          </div>
        </div>
      </motion.div>
    </section>
  )
}
