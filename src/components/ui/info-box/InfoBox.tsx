import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import styles from './InfoBox.module.scss'

interface IInfoBoxProps {
	text: string
	size: string
	onClick: (value: SetStateAction<boolean>) => void
}

const InfoBox: FC<IInfoBoxProps> = ({ text, size, onClick }) => {
	return (
		<div className={cn(styles.wrapper, styles[size])}>
			<p>{text}</p>
			<button className={styles.button} onClick={() => onClick(true)}>
				Далее
			</button>
		</div>
	)
}

export default InfoBox
