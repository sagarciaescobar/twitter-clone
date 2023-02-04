'use client'
import icons from './lib'

export const Icon = (props) => {
  const { type, icon, color} = props;
  const Component = icons[type]
  return <Component {...props} />
}
