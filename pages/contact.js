import styles from '../styles/Home.module.css'
import CollapsableMenu from '../components/CollapsableMenu'
import TemplatePage from '../components/PageTemplate';
import { getFileURL} from '../utils/firebase';
import { getMenus } from '../utils/menuLoader';


export default function Menu({menus}) {

  return (
    <TemplatePage>
      <div className={styles.section}>
        <div className='center'>
          <p><b>Contact</b></p>
        </div>
        <form>
            <div>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            </div>
            <div>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            </div>

            <div>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            </div>
            
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form> 
      </div>
    </TemplatePage>
  )
}