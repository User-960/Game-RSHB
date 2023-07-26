import cn from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './ButtonText.module.scss'

interface IButtonTextProps {
	clickHandler?: any
	size?: string
	blocked?: boolean
	disabled?: boolean
	children?: ReactNode
}

const ButtonText: FC<IButtonTextProps> = ({
	clickHandler = null,
	size = '',
	blocked,
	disabled = false,
	children
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size], {
					[styles.blocked]: blocked
				})}
				onClick={clickHandler}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	)
}

export default ButtonText
