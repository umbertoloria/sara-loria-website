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
        {/* TODO: On click on Projects, perform scroll to "projects section" */}
        <li>
          <Link href={baseRoot}>{'projects.'}</Link>
        </li>
        <li>
          <Link href={baseRoot}>{'contact.'}</Link>
        </li>
      </ul>
    </div>
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
