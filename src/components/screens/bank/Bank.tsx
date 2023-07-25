import { FC } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'

import styles from './Bank.module.scss'

const Bank: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Банк</h3>
			<div className={styles.info}>
				<div className={styles.sum}>1000</div>
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
