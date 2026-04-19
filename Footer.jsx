export default function Footer() {
  return (
    <footer
      style={{
        background: '#101010',
        color: '#6F6F6F',
        padding: '48px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '16px', color: '#FFFFFF', marginBottom: '8px' }}>
          홍위하소서
        </p>
        <p style={{ fontSize: '12px', letterSpacing: '0.05em' }}>단종 복위를 염원하는 팬 창작 사이트</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p style={{ fontSize: '12px', marginBottom: '4px' }}>© 2025 홍위하소서 Fan Project</p>
        <p style={{ fontSize: '11px', color: '#3F3F3F' }}>본 사이트는 팬 창작 목적으로 제작되었습니다.</p>
      </div>
    </footer>
  )
}
