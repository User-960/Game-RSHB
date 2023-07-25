import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import ButtonText from '../button/buttonText/ButtonText'

import styles from './InfoBox.module.scss'

interface IInfoBoxProps {
	title?: string
	text: string
	size: string
	onClick: () => any
}

const InfoBox: FC<IInfoBoxProps> = ({ title = '', text, size, onClick }) => {
	return (
		<div className={cn(styles.wrapper, styles[size])}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<p>{text}</p>
			<div className={styles.button}>
				<ButtonText clickHandler={onClick}>Продолжить</ButtonText>
			</div>
		</div>
	)
}

export default InfoBox
