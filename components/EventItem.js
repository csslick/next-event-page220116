import Link from 'next/link'
import Image from 'next/image'

export default function EventItem({evt}) {
  console.log(evt.image)
  return (
    <div className='events'>
      <div className="img">
        <Image 
          src={evt.image ? evt.image : '/images/event-default.png'} 
          width={170} height={100}
        />
      </div>
      <div className="info">
        <h3>{evt.title}</h3>
        <span>{evt.date}</span>
      </div>
      <div className="link">
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">자세히 보기</a>
        </Link>
      </div>
      <style jsx>{`
        .events {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ccc;
          padding: 1em;
        }

        h3 {
          margin: 0 0 5px 0;
        }

        .btn {
          background: tomato;
          padding: 8px 10px;
          color: #fff;
          display: inline-block;
        }
      `}
      </style>
    </div>
  )
}