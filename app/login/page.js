'use client'
import Link from 'next/link'
import {container, login, backBtn} from './index.module.scss'

import CloseIcon from '@mui/icons-material/Close';

export default function Login() {
  return (
    <div className={container}>
      <div role="group" className={login}>
        <Link className={backBtn} href="/"><CloseIcon color="#fff" /></Link>
      </div>
    </div>
  )
}
