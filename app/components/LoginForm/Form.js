import Link from 'next/link'
import dynamic from 'next/dynamic'

import { formContainer } from './index.module.scss'

import { Icon } from '../Icon'
import { useLanguage } from '@/app/hooks/client/useLanguage'

export default function LoginForm({ t }) {
  return (
    <div className={formContainer}>
      <Icon type="twitterIcon" color="#FFF" size={32} />
      <h2>{t('Regitrate en Twitter')}</h2>
      <form>
        <input type="text" name="username" />
      </form>
    </div>
  )
}
