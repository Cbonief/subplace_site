import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useRef, useEffect} from 'react';
import styles from '../styles/Components/CollapsableMenu.module.css'
import Image from 'next/image';

export function DropdownMenu(props){
    const dropdownRef = useRef();
    const menuRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        document.addEventListener('mousedown', (event)=>{
            if(isOpen){
                if((dropdownRef.current && !dropdownRef.current.contains(event.target) && (menuRef.current && !menuRef.current.contains(event.target)))){
                    setIsOpen(false);
                }
            }
        });
    }, [menuRef, dropdownRef, isOpen]);

    return (
        <div className="menu_container center">
            <div ref={menuRef} className="menubar center" onClick={()=>{setIsOpen(!isOpen)}}>
                {props.use_fa && 
                    <FontAwesomeIcon key={props.menu_name} icon={props.icon} size='1x'/>
                }
                {!props.use_fa && 
                    <Image src={props.icon} className="icon-button" width={16} height={16}/>
                }
                
            </div>
            <div ref={dropdownRef} className={"dropdown " + 'drop_from_'+props .side_to_drop} open={isOpen}>
                <p className={styles.menu_name}>{props.children}</p>
            </div>
        </div>
    );
}


export function DropdownItem(props) {
    return (
      <a className="menu-item">
        {props.use_fa && 
            <FontAwesomeIcon key={props.children} icon={props.leftIcon} style={{width: '16px', height: '16px'}}/>
        }
        {!props.use_fa && 
            <Image src={props.leftIcon} width="16px" height="16px"/>
        }
        <div className="menu-item-child">
            {props.children}
        </div>
      </a>
    );
}