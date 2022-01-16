import Link from 'next/link'

export default function Header() {

  return (
    <div>
      <header className="header">
        <h1 className="logo">
          <Link href='/'>
            <a>공연 정보</a>
          </Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link href='/events'>
                <a>이벤트</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          padding: 0 20px;
        }
        h1 {
          margin: 0;
          margin-right: auto;
          font-size: 22px;
        }
      `}

      </style>
    </div>
  )
}
