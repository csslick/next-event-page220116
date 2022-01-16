import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Showcase from './MainVisual';
import MainVisual from './MainVisual';

export default function Layout({title, keywords, description, children}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {router.pathname === '/' && <MainVisual />}

      <div className="container">
        {children}
      </div>
      <Footer />
      <style jsx>{`
        .container {
          margin: 50px auto;
          max-width: 960px;
          padding: 0 30px;
          border-top: 1px solid #ccc;
        }
      `}

      </style>
    </div>
  )
}

Layout.defaultProps = {
  title: "공연 이벤트 일정",
  keywords: "음악, 공연, 문화예술",
  description: "문화 예술 공연 이벤트 홈페이지"
}