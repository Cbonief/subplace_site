import styles from '../styles/Home.module.css'
import CollapsableMenu from '../components/CollapsableMenu'

import { google } from 'googleapis';

export async function getServerSideProps() {

  // Auth
  const auth = await google.auth.getClient({keyFile: "public/credentials.json", scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = "1BG_IGsuVb9tMm-DUqKuyRthxmq0Vg1WUubjQeUKb6zg";

  // Get metadata about spreadsheet
  const metaData = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1"
  });

  const data = metaData.data.values

  var categories = [];
  var categorizedData = {}

  data.forEach((row, index) => {
    if (index > 0){
      const price = parseFloat(row[2].replace(',', '.'));
      if (!categories.includes(row[3])){
        categories.push(row[3]);
        categorizedData[row[3]] = [];
      }
      else{
        categorizedData[row[3]].push({
          name: row[0],
          description: row[1],
          price: price,
        });
      }
    }
  });


  return { 
      props: {
        menuData: categorizedData
      } 
  }
}

export default function Menu({menuData}) {

  return (
    <>
      <div className={styles.section}>
        <div className='center'>
          <p><b>Menu</b></p>
        </div>
        {Object.keys(menuData).map((menuName, index) => (
          <CollapsableMenu key={index} items={menuData[menuName]} menu_name={menuName}/>
        ))}
      </div>
    </>
  )
}