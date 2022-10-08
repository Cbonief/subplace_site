
import {useState} from 'react';
import MenuItem from '../components/MenuItem'
import styles from '../styles/Components/CollapsableMenu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { getMenuImages } from '../utils/menuLoader';


export default function CollapsableMenu(props){
    const [firstTimeOpen, setFirstTimeOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(props.items);

    async function toggleMenu(currentState){
        if (!currentState && !firstTimeOpen){
            setFirstTimeOpen(true);
            var new_items = items;
            const loadedImages = await getMenuImages(items);
            new_items.forEach((item, index, array)=>{
                array[index].image = loadedImages[index];
            });
            
            setItems(new_items);
        }
        setOpen(!currentState);
    }

    return(
        <div className={styles.container}>
            <div onClick={()=>toggleMenu(open)} className={styles.button}>
                <div className={styles.arrow_container}>
                    <FontAwesomeIcon icon={faArrowCircleDown} color='rgb(100, 122, 150, 170)'/>
                </div>
                <p className={styles.menu_name}><b>{props.name}</b></p>
            </div>
            <div open={open} className={styles.items_container}>
                {items.map((item, key) => (
                    <MenuItem key={key} price={item.price} name={item.name} description={item.description} img={item.image} promo={item.promo}/>
                ))}
            </div>
        </div>
    );
}