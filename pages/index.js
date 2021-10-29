import styles from '../styles/Home.module.css'
import ImageSlider from '../components/ImageSlider'

let working_hours = [
  {day: 'Sunday', hour: '6:30AM–7PM'},
  {day: 'Monday', hour: '6AM–9PM'},
  {day: 'Tuesday', hour: '6AM–9PM'},
  {day: 'Wednesday', hour: '6AM–9PM'},
  {day: 'Thursday', hour: '6AM–9PM'},
  {day: 'Friday', hour: '6AM–9PM'},
  {day: 'Saturday', hour: '6AM–9PM'},
]

export default function Home() {

  const d = new Date();
  const day_of_week = d.getDay();

  let reordered_hours = working_hours.slice(day_of_week, day_of_week + working_hours.length).concat(working_hours.slice(0, day_of_week))

  return (
    <>
      <ImageSlider key={0}/>
      <div className={styles.section}>
        <div className='center'>
          <p>Our History</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className='center'>
          <p>Contact</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className='center'>
          <p>Working Hours</p>
        </div>
        <div >
          {reordered_hours.map(({day, hour}, index) => (
            <p>
              {index==0 &&
                <b key={index}>{day}: {hour}</b>
              }
              {!index==0 &&
                `${day}: ${hour}`
              }
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
