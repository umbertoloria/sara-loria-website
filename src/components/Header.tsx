import { FC } from 'react'

export const Header: FC = () => {
  return (
    <div className='header'>
      <Menu />
      <ImaVisual />
    </div>
  )
}

const Menu: FC = () => {
  return (
    <div className='menu'>
      <ul>
        <MenuItem label='about me.' />
        <MenuItem label='projects.' />
        <MenuItem label='contact.' />
      </ul>
    </div>
  )
}

const MenuItem: FC<{
  label: string
}> = ({ label }) => {
  return (
    <li>
      <a>{label}</a>
    </li>
  )
}

const ImaVisual: FC = () => {
  return (
    <div className='ima-visual'>
      <div className='ima-visual-title'>
        I'm Sara Loria.
        <br />
        I'm a <span>visual designer</span>.
      </div>
      <p className='ima-visual-text'>
        Powered by iced coffee, happy playlists, and the thrill of turning ideas
        into something people can see and get excited about.
      </p>
    </div>
  )
}
