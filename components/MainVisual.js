export default function MainVisual() {
  return (
    <div className="main-visual">
      <h1>공연 정보 안내입니다.</h1>
      <p>최신 공연 정보를 알려드립니다.</p>
      <div className="bg"></div>
      <style jsx>{`
        .main-visual {
          width: 100%;
          background: #ccc url(images/main-visual.jpg);
          padding: 50px 0;
          text-align: center;
          color: #fff;
          position: relative;
        }
        h1, p {
          position: relative;
          z-index: 1;
        }
        .bg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  )
}
