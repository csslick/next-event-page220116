import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventItem from '../components/EventItem'

// 클라이언트
export default function Home({events}) {
  // events = []
  return (
    <Layout>
      <h1>Home</h1>
      {events.length === 0 && <h3>공연 정보가 없습니다.</h3>}

      { 
        events.map(evt => 
          <EventItem evt={evt} key={evt.id} />
        )
      }
    </Layout>
  )
}

// 서버
export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const res = await fetch(`${API_URL}/api`)
  const events = await res.json();
  console.log(events);

  return {
    props: { events: events.slice(0,3) },
    // revalidate: 1
  }
}
