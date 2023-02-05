'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { container, login, backBtn } from './index.module.scss'
import { Icon } from '../../components/Icon'

export default function Login({ children, showForm }) {
  const router = useRouter()

  const handleClick = () => {
    window.history.replaceState({}, '', '/')
    showForm(false)
  }

  return (
    <div className={container}>
      <div role="group" className={login}>
        <button className={backBtn} onClick={handleClick}>
          <Icon type="closeOutline" size={16} color="#FFF" />
        </button>
        <section style={{width: '100%', height: '100%'}}>{children}</section>
      </div>
    </div>
  )
}
