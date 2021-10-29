
import {useState} from 'react';
import MenuItem from '../components/MenuItem'
import styles from '../styles/CollapsableMenu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function CollapsableMenu(props){
    const [open, setOpen] = useState(false);

    return(
        <div className={styles.container}>
            <div onClick={()=>setOpen(!open)} className={styles.button}>
                <div className={styles.arrow_container}>
                    <FontAwesomeIcon icon={faArrowCircleDown} color='rgb(122, 122, 122, 0.9)'/>
                </div>
                <p className={styles.menu_name}><b>{props.menu_name}</b></p>
            </div>
            {open &&
                <>
                    {props.items.map((item, key) => (
                        <MenuItem key={key} price={item.price} name={item.name} description={item.description} img="slider_placeholder.jpg"/>
                    ))}
                </>
            }
        </div>
    );
}