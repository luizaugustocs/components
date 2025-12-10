import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  className?: string
  children: ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
