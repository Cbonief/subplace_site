import {useRef, useState} from 'react';
import styles from '../styles/Components/FileSelector.module.css';
  
export default function FileSelector(props){
    const selector = useRef();
    const [file, setFile] = useState();

    const handleFileChanged = (value) => {
        console.log(value);
        setFile(value);
        props.onFileChanged(value);            
    }

    return (
        <div onClick={(e)=>{selector.current.click()}} className={styles.div}>
            {props.children}
            <input onChange={(e)=> handleFileChanged(e.target.files[0])} ref={selector} type="file" className={styles.input}/>
        </div>
    );
}