import styles from '../../styles/Components/editable_menu_item.module.css'
import FileSelector from './../FileSelector'
import {uploadFile, getFileURL} from './../../utils/firebase'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { oilTemp } from 'fontawesome';
import {useState} from 'react';

export default function EditableMenuItem(props){
    const [item, setItem] = useState(props.item);
    const [imageFile, setImageFile] = useState();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('do validate')
        }
    }

    async function changeImageFile(file){
        if(file){
            setImageFile(file);
            uploadFile(file).then(()=>{
                getFileURL(file.name).then((url)=>{
                    console.log(url);
                    setItem({...item, image_name: file.name, image: url});
                });
            });
        }
    }

    return (
        <div className={styles.item_container}>
            <div className={styles.image_container}>
                <FileSelector onFileChanged={changeImageFile}>
                    <img src={item.image ? item.image: props.item.image? props.item.image: '/image_placeholder.png'} className={styles.item_photo} alt={item.name}/>
                </FileSelector>
                <div className={styles.edit_image_button_container}>
                    <FileSelector onFileChanged={changeImageFile}>
                        <FontAwesomeIcon icon={faFileImage} color='grey'/>
                    </FileSelector>
                </div>
            </div>
            <div className={styles.desciption_container}>                                         
                <input type="text" value={item.name} onChange={(e)=>setItem({...item, name: e.target.value})} className={styles.item_name} onKeyDown={handleKeyDown}/>
                <input type="text" value={item.description} onChange={(e)=>setItem({...item, description: e.target.value})} className={styles.item_description} onKeyDown={handleKeyDown}/>
            </div>
            <div className={styles.price_container}>
                <input type="number" value={item.price} step={0.01} onChange={(e)=>setItem({...item, price: e.target.value})} className={styles.item_price} onKeyDown={handleKeyDown}/>
            </div>
        </div>
    );
}