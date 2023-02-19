import { Icon } from '../Icon'

import styles from './index.module.scss'
import { NavItem } from './lib/NavItem'

const Header = ({ listItem = [] }) => {
  return (
    <header className={styles.header}>
      <Icon type="twitterIcon" color="white" height={40} width={40} />
      <nav role="navigation">
        <ul>
          {listItem.map((item) => (
            <NavItem key={item.key} href={item.href} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export { Header }
