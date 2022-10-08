import styles from '../styles/Home.module.css'
import CollapsableMenu from '../components/CollapsableMenu'
import TemplatePage from '../components/PageTemplate';
import { getFileURL} from '../utils/firebase';
import { getMenus } from '../utils/menuLoader';

export async function getServerSideProps() {

  var menus = await getMenus();
  
  return { 
      props: {
        menus: menus
      } 
  }
}

export default function Menu({menus}) {

  return (
    <TemplatePage>
      <div className={styles.section}>
        <div className='center'>
          <p><b>Menu</b></p>
        </div>
        {menus.map((menu, index) => (
          <CollapsableMenu key={index} items={menu.items} name={menu.name}/>
        ))}
      </div>
    </TemplatePage>
  )
}