import React, { FC } from 'react'
import classNames from 'classnames'
import style from './style/index.module.scss'

interface TypographyType {
  size: 100 | 80 | 60 | 50 | 48 | 46 | 40 | 36 | 30 | 24
  weight?: 400 | 700 | 500
  color?: 'red' | 'gray'
  className?: string
  children: React.ReactNode
}

export const Typography: FC<TypographyType> = (props) => {
  const {
    size = 100,
    color = '',
    weight = '',
    children,
    className
  } = props

  const currentSize = `typography_${size}`
  const currentWeight = `typography__wight_${weight}`
  const currentColor = `typography__color_${color}`

  return (
    <p
      className={classNames(
        style.typography,
        {
          [style[currentSize]]: size,
          [style[currentWeight]]: weight,
          [style[currentColor]]: color
        },
        className
      )}
    >
      {children}
    </p>
  )
}
