import SocialFollow from './SocialFollow'

const social_medias = [
  {name:'instagram', link:'https://www.instagram.com/casadopaobakery/'},
  {name:'facebook', link:'https://www.facebook.com/casadopaobakery/'}
]

export default function Footer({}) {
  return (
    <footer>
      <div className='footer-container'>
          {social_medias.map((media) => (
            <SocialFollow key={media.name} social_media={media.name} link={media.link} passHref/>
          ))}
      </div>
    </footer>
  )
}
