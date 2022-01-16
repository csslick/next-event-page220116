import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import {FaPencilAlt, FaTimes} from 'react-icons/fa';

export default function EventPage({event}) {
  // console.log(evt);
  const deleteEvent = (e) => {
    console.log('delete')
  }

  return (
    <Layout>
      <div className='evnent'>
        <div className="controls">
          <Link href={`/events/edit/${event.id}`}>
            <a className='edit'><FaPencilAlt /> Edit Event</a>
          </Link>
          <a href='#' className='delete' onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>{event.date}</span>
        <h1>{event.title}</h1>
        {event.image && (
          <div className="image">
            <Image src={event.image} layout='responsive' width='100%' height='100%' objectFit='contain' />
          </div>
        )}

        <h3>작가</h3>
        <p>{event.author}</p>
        <h3>작품정보</h3>
        <p>{event.description}</p>
        <h3>장소</h3>
        <p>{event.place}</p>

        <Link href='/events'>
          <a className='back'>
            {'<'} 돌아가기
          </a>
        </Link>

      </div>
      <style jsx>{`
          .controls {
            display: flex;
            justify-content: flex-end;
          }
          
          .delete {
            color: tomato;
            margin-left: 1em;
          }

          .edit {
            color: steelblue;
          }
          h3 {
            margin-bottom: 0px;
          }
          p {
            margin-top: 5px;
          }
          .back {
            display: block;
            margin-top: 2em;
            color: steelblue;
          }
      `}
      </style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${API_URL}/api`);
  const events = await res.json();

  const paths = events.map(evt => {
    return {
      params: { slug: evt.slug }
    }
  })
  console.log('path= ', paths)

  return {
    paths,
    fallback: false
  }
}

// context.params의 값(slug) 요청, Static Path의 props를 가져옴
export async function getStaticProps({params: {slug}}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${API_URL}/api/${encodeURIComponent(slug)}`);
  const events = await res.json();
  // console.log(events);

  return {
    props: { event: events[0] },  // EventPage()에 전달할 prop
    revalidate: 1
  }
}