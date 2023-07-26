import { Dispatch, FC, SetStateAction, useContext } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import { GameContext } from '@/components/providers/GameProvider'

import styles from './Bank.module.scss'

interface IBankProps {
	onClick: Dispatch<SetStateAction<boolean>>
}

const Bank: FC<IBankProps> = ({ onClick }) => {
	const { wallet, setWallet, statusCredit, setStatusCredit } =
		useContext(GameContext)

	const takeCredit = () => {
		if (wallet === 0) {
			setWallet(1000)
		}
	}

	return (
		<>
			{wallet === 0 ? (
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
						<ButtonText clickHandler={() => takeCredit()}>
							Взять деньги
						</ButtonText>
					</div>
				</div>
			) : (
				<div className={styles.wrapper}>
					<h3 className={styles.title}>Банк</h3>

					<div className={styles.info}>
						<div className={styles.sum}>
							<GlobalSvgSelector id='flowers' />
						</div>
						<p className={styles.text}>
							Благодарим, что выбрали наш банк! Денежные средства будут
							перечислены на ваш счет.
						</p>
						<ButtonText clickHandler={() => onClick(false)}>Выйти</ButtonText>
					</div>
				</div>
			)}
		</>
	)
}

export default Bank
