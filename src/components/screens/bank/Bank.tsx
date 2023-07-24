import { FC } from 'react'

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
				<button className={styles.button}>Взять деньги</button>
			</div>
		</div>
	)
}

export default Bank
