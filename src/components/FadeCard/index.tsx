import React, { FC } from 'react'
import { Typography } from '../../views/typography'
import styles from './styles/index.module.scss'

interface TProp {
  color: string
}

const FadeCard: FC<TProp> = ({color = 'red'}) => {
  return (
    <div
      className={styles.container}
    >
      <Typography size={46}>{color}</Typography>
      <div className={styles.color} style={{ backgroundColor: `${color}` }} />
    </div>
  )
}

export default FadeCard
