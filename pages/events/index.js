import Layout from "../../components/Layout"
import EventItem from "../../components/EventItem"

export default function EventPage({events}) {
  return (
    <Layout>
      <h1>이벤트 정보</h1>
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
    props: { events },
    // revalidate: 1
  }
}