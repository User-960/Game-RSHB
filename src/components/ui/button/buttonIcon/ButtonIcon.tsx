import cn from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './ButtonIcon.module.scss'

interface IButtonIconProps {
	clickHandler?: any
	size: string
	name: string
	children?: ReactNode
}

const ButtonIcon: FC<IButtonIconProps> = ({
	clickHandler = null,
	size,
	name,
	children
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
				<span>{name}</span>
			</button>
		</div>
	)
}

export default ButtonIcon
