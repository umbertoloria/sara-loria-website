import { FC } from 'react'
import Link from 'next/link'
import { baseRoot } from '@/app/paths'

export const Header: FC = () => {
  return (
    <div className='header'>
      <div className='layout'>
        <Menu />
        <ImaVisual />
      </div>
    </div>
  )
}

const Menu: FC = () => {
  return (
    <div className='menu'>
      <ul>
        {/*<MenuItem label='about me.' to={baseRoot} />*/}
        {/* TODO: On click on Projects, perform scroll to "projects section" */}
        <MenuItem label='projects.' to={baseRoot} />
        <MenuItem label='contact.' to={baseRoot} />
      </ul>
    </div>
  )
}

const MenuItem: FC<{
  label: string
  to: string
}> = ({ label, to }) => {
  return (
    <li>
      <Link href={to}>{label}</Link>
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
