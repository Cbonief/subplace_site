import styles from '../styles/Home.module.css'
import ImageSlider from '../components/ImageSlider'
import TemplatePage from '../components/PageTemplate'
import {app} from '../utils/firebase'

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
    <TemplatePage>
      <ImageSlider key={0}/>
      <div className={styles.section}>
          <h1>Our History</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo nisi velit. Phasellus ultrices sagittis egestas. Integer id felis vitae lectus dictum iaculis porttitor vitae velit. Ut convallis consequat turpis, et porta magna. Fusce egestas efficitur orci, a tempor turpis dignissim a. Phasellus vitae nulla est. Aenean fringilla tellus vel leo elementum ornare. Maecenas porta leo a justo accumsan, id pretium magna tristique. Mauris in mauris faucibus nulla fringilla imperdiet quis quis lectus. Praesent quis iaculis sem, a fringilla ex.

Aliquam et imperdiet mauris. Mauris condimentum sed justo non iaculis. Aliquam erat tellus, sagittis eget erat ut, dignissim hendrerit mi. Mauris velit turpis, tempus nec nunc quis, elementum semper lorem. Vestibulum in malesuada elit, et ullamcorper nunc. Fusce sagittis massa quis dapibus molestie. Donec pretium condimentum dui, ut eleifend orci dapibus quis. Aliquam ornare faucibus odio, nec tincidunt odio lobortis ac.

Proin odio mauris, feugiat eget ex et, molestie pharetra neque. Aenean efficitur ex eu elit posuere commodo. Curabitur dignissim sem nibh, ac tempor leo accumsan vel. Mauris ut congue eros. Phasellus dapibus vitae massa non sodales. Pellentesque pretium massa placerat libero tincidunt dignissim. Vivamus semper sodales risus vitae iaculis. Integer metus sem, sollicitudin ac sodales vel, dapibus non nisi. Nullam scelerisque elit in magna tincidunt dictum. Nunc lobortis purus nec nulla consequat, non sagittis nibh rhoncus. Proin dapibus nec nibh et fringilla. Morbi faucibus tortor sit amet est finibus fermentum. Proin auctor, nunc vitae maximus porta, sem justo iaculis lorem, ut feugiat ante nunc vel ante.</p>
        
      </div>
      <div className={styles.section}>
        <h1>Contact</h1>
      </div>
      <div className={styles.section}>
        <h1>Working Hours</h1>
        {reordered_hours.map(({day, hour}, index) => (
          <p key={index}>
            {index==0 &&
              <b>{day}: {hour}</b>
            }
            {!index==0 &&
              `${day}: ${hour}`
            }
          </p>
        ))}
      </div>
    </TemplatePage>
  )
}
