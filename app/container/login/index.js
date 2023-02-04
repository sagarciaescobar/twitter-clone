'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { container, login, backBtn } from './index.module.scss'
import { Icon } from '../../components/Icon'

export default function Login({ children }) {
  const router = useRouter()

  const handleClick = () => {
    router.replace('/')
  }
  return (
    <div className={container} onClick={handleClick}>
      <div role="group" className={login}>
        <Link className={backBtn} href="/">
          <Icon type="closeOutline" size={16} color="#FFF" />
        </Link>
        <section>{children}</section>
      </div>
    </div>
  )
}
