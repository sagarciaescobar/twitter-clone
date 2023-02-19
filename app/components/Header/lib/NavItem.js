import Link from 'next/link'
import { Icon } from '../../Icon'

import styles from '../index.module.scss'

const NavItem = ({ href, icon, color, children }) => {
  return (
    <li className={styles.nav_item}>
      <Link href={href}>
        {icon && (
          <Icon type={icon} color={color || 'white'} height={40} width={40} />
        )}
        {children}
      </Link>
    </li>
  )
}

export { NavItem }
