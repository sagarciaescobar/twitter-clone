import { useLanguage } from '@/app/hooks/client/useLanguage'
import { Icon } from '../Icon'
import { loader } from './index.module.scss'

export const Loading = (props) => {
  return (
    <div className={loader}>
      <Icon type="loader" size={42}/>
    </div>
  )
}
