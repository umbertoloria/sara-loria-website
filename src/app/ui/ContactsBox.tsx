import { FC } from 'react'

export const ContactsBox: FC = () => {
  return (
    <footer>
      <section id='contacts-box'>
        <div className='linkedin'>
          <span>
            <img src='/social/linkedin.png' alt='LinkedIn' />
          </span>
          <a
            href='https://www.linkedin.com/in/sara-loria-b680b3305'
            target='_blank'
          >
            Sara Loria
          </a>
        </div>

        <div className='instagram'>
          <span>
            <img src='/social/instagram.png' alt='Instagram' />
          </span>
          <a href='https://www.instagram.com/sl.oreea' target='_blank'>
            @sl.oreea
          </a>
        </div>

        <div className='email'>
          <span>
            <img src='/social/email.png' alt='Email' />
          </span>
          <a href='mailto:saraloria02@gmail.com'>saraloria02@gmail.com</a>
        </div>

        <div className='location'>Based in Rome, Italy</div>
      </section>
    </footer>
  )
}
