import React from 'react'
import './scss/footer.scss'
import instagram from 'icons/instagram.svg'
import telegram from 'icons/telegram.svg'
import facebook from 'icons/facebook.svg'
import youtube from 'icons/youtube.svg'

const icons = [
    {
        url: 'https://www.instagram.com/',
        src: instagram
    },
    {
        url: 'https://web.telegram.org/z/',
        src: telegram
    },
    {
        url: 'https://www.facebook.com/',
        src: facebook
    },
    {
        url: 'https://www.youtube.com/',
        src: youtube
    }
]

export const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <h2>Подпишитесь на нас!</h2>
                <ul className='footer__icons'>
                    {icons.map(icon => (
                        <a key={icon.src} className='footer__link' href={icon.url}>
                            <img src={icon.src} alt="logo" />
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
