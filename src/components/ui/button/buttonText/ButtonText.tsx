import cn from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './ButtonText.module.scss'

interface IButtonTextProps {
	clickHandler?: any
	size?: string
	children?: ReactNode
}

const ButtonText: FC<IButtonTextProps> = ({
	clickHandler = null,
	size = '',
	children
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default ButtonText
