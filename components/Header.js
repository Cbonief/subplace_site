import Link from 'next/link'
import {faCoffee, faCompass, faComment, faBars, faGlobe} from '@fortawesome/free-solid-svg-icons'
import {DropdownMenu, DropdownItem} from './MenuBar';
import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';

const dropdown_info = [
    {href: '/menu', text: 'Menu', icon: faCoffee},
    {href: '/location', text: 'Location', icon: faCompass},
    {href: '/contact', text: 'Contact', icon: faComment}
]

var languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
      flag_icon: '/us_flag.png'
    },
    {
      code: 'pt-br',
      name: 'Português',
      dir: 'rtl',
      country_code: 'sa',
      flag_icon: '/br_flag.png'
    },
]



export default function Header(){
    return (
        <header>
            <div className="header_container">
                <DropdownMenu key={0} icon={faBars} menu_name={'nav'} side_to_drop='right' use_fa={true}>
                    {dropdown_info.map((item) => (
                        <DropdownItem key={item.href} leftIcon={item.icon} use_fa={true}>
                            <Link key={item.href} href={item.href} passHref>
                                <p>{item.text}</p>
                            </Link>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
                <div className='title_container'>
                    <Link key={'title_image_link'} href={'/'} passHref>
                        <div className="center">
                            <Image className="title-image" src="/logo2.png" width="60" height="60"/>
                        </div>
                    </Link>
                </div>
                <DropdownMenu key={1} icon={faGlobe} menu_name={'lang'} side_to_drop='left' use_fa={true}>
                    {languages.map((language) => (
                        <DropdownItem key={language.code} leftIcon={language.flag_icon}>
                            <p>{language.name}</p>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </div>
        </header>
    )
}