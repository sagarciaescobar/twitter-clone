import { useEffect, useState, useRef } from 'react'
import { inputForm } from './index.module.scss'

export const InputForm = (props) => {
  const {
    className,
    id,
    name,
    type,
    onChange: handleChange = () => {},
    label,
    activeClass,
    autocomplete,
  } = props
  const [field, setField] = useState('')
  const inputRef = useRef(null)

  const onChange = ({ target }) => {
    const data = target.value.trim()
    setField(data)
    handleChange(data)
  }

  useEffect(() => {
    if (field !== '') {
      inputRef.current.classList.add(activeClass)
    } else {
      inputRef.current.classList.remove(activeClass)
    }
  }, [field])

  return (
    <div ref={inputRef} className={`${inputForm} ${className}`}>
      <input
        autocomplete={autocomplete}
        value={field}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
