import { Dispatch, FC, SetStateAction } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './Bank.module.scss'

interface IBankProps {
	onClick: Dispatch<SetStateAction<boolean>>
}

const Bank: FC<IBankProps> = ({ onClick }) => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Банк</h3>

			<button className={styles.button} onClick={() => onClick(false)}>
				<GlobalSvgSelector id='close' />
			</button>

			<div className={styles.info}>
				<div className={styles.sum}>
					<GlobalSvgSelector id='bankCredit' />
				</div>
				<p className={styles.text}>
					Вам одобрили беспроцентную рассрочку. Заемные средства необходимо
					вернуть после прохождения первой локации.
				</p>
				<ButtonText>Взять деньги</ButtonText>
			</div>
		</div>
	)
}

export default Bank
