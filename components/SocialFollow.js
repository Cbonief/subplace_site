import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

const icon_map = {
    facebook: faFacebook,
    instagram: faInstagram
}
  

export default function SocialFollow({social_media, link}) {
    return (
        <a href={link} className={social_media+" social"} target="_blank" rel="noreferrer">
        <FontAwesomeIcon key={social_media} icon={icon_map[social_media]} size="2x" />
        </a>  
    )
  }