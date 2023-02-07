import { inputForm } from './index.module.scss'

export const InputForm = (props) => {
  const { className, id, name, type, onChange, label } = props
  return (
    <div className={`${inputForm} ${className}`}>
      <input onChange={onChange} id={id} name={name} type={type} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
