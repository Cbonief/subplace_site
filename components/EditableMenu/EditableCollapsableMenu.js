
import {useState} from 'react';
import EditableMenuItem from './EditableMenuItem'
import styles from '../../styles/Components/EditableCollapsableMenu.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { getMenuImages } from '../../utils/menuLoader';


export default function EditableCollapsableMenu(props){
    const [firstTimeOpen, setFirstTimeOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(props.items);
    const [name, setName] = useState(props.name);

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

    const addItem = ()=>{
        console.log(items);
        var new_item = {
            description: "Description",
            image: undefined,
            image_name: null,
            name: "New Item",
            position: items.length,
            price: 0.00,
            promo: 0
        };
        console.log(new_item);
        setItems([...items, new_item]);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('do validate')
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.button}>
                <div className={styles.arrow_container} onClick={()=>toggleMenu(open)}>
                    <FontAwesomeIcon icon={faArrowCircleDown} color='rgb(100, 122, 170, 0.9)'/>
                </div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className={styles.menu_name} onKeyDown={handleKeyDown}/>
                <div className={styles.name_edit_container}>
                    <FontAwesomeIcon icon={faPen} color='rgb(100, 122, 150, 170)'/>
                </div>
            </div>
            <div open={open} className={styles.items_container}>
                {items.map((item, key) => (
                    <EditableMenuItem key={key} item={item}/>
                ))}
                <div className={styles.add_item_button} onClick={addItem}>
                    <div className={styles.plus_container}>
                        <FontAwesomeIcon icon={faPlusCircle} color='rgb(100, 122, 170, 0.9)' size='2x'/>
                    </div>
                </div>
            </div>
        </div>
    );
}