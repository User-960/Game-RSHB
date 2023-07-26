import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import { GlobalSvgSelector } from '../global-svg-selector/GlobalSvgSelector'

import styles from './Alert.module.scss'

interface IAlertProps {
	type?: string
	text: string
	clickHandler: Dispatch<SetStateAction<boolean>>
}

const Alert: FC<IAlertProps> = ({ type = 'success', text, clickHandler }) => {
	return (
		<div className={cn(styles.alert, styles[type])}>
			<p className={styles.text}>{text}</p>
			<div className={styles.button} onClick={() => clickHandler(false)}>
				<GlobalSvgSelector id='close' />
			</div>
		</div>
	)
}

export default Alert
