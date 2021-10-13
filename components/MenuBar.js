import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useRef, useEffect} from 'react';

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
                <FontAwesomeIcon key={props.menu_name} icon={props.icon} size='1x'/>
            </div>
            <div ref={dropdownRef} className={"dropdown " + 'drop_from_'+props .side_to_drop} open={isOpen}>
                {props.children}
            </div>
        </div>
    );
}


export function DropdownItem(props) {
    return (
      <a className="menu-item">
        {props.use_fa && 
            <FontAwesomeIcon key={props.children} className="icon-button" icon={props.leftIcon} size='1x'/>
        }
        {!props.use_fa && 
            <img src={props.leftIcon} className="icon-button" width={16} height={16}/>
        }
        {props.children}
      </a>
    );
}