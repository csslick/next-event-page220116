import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 공연정보 2022</p>
      <p>
        <Link href='/about'>About this Project</Link>
      </p>
      <style jsx>{`
        footer {
          text-align: center;
          font-size: small;
        }
        footer p {
          margin: 8px 0;
        }
      `}

      </style>
    </footer>
  )
}
