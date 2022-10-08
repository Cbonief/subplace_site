import styles from '../../styles/Pages/MenuEditor.module.css'
import EditableCollapsableMenu from '../../components/EditableMenu/EditableCollapsableMenu'
import TemplatePage from '../../components/PageTemplate';
import { getMenus } from '../../utils/menuLoader';
import {useState, useEffect} from 'react';
import LeavingWindowAlert from '../../components/Alerts/LeavingWindow';

export async function getServerSideProps() {

  var menus = await getMenus();
  
  return { 
    props: {
      loadedMenuData: menus
    } 
  }
}

export default function MenuEditor({loadedMenuData}) {
  
  const [localMenuData, setLocalMenuData] = useState(loadedMenuData);


  return (
    <TemplatePage>
      <div className={styles.section}>
        <div className='center'>
          <p><b>Menu</b></p>
        </div>
        {localMenuData.map((menu, index) => (
          <EditableCollapsableMenu key={index} items={menu.items} name={menu.name}/>
        ))}
        <div className='center flex'>
          <button className={styles.save_button}>Save</button>
          <button className={styles.revert_button}>Revert</button>
        </div>
      </div>
      <LeavingWindowAlert/>
    </TemplatePage>
  )
}