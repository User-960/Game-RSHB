import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

import { GameContext } from '@/components/providers/GameProvider'

import { GlobalSvgSelector } from '../global-svg-selector/GlobalSvgSelector'

import styles from './VictoryBox.module.scss'

interface IVictoryBoxProps {
	title?: string
	text: string
	pay: number
	icon: string
	result: string
	clickHandler: () => any
}

const VictoryBox: FC<IVictoryBoxProps> = ({
	title,
	text,
	pay,
	icon,
	result,
	clickHandler
}) => {
	const { setWallet } = useContext(GameContext)

	const { push } = useRouter()
	return (
		<div className={cn(styles.wrapper)}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<p className={styles.text}>{text}</p>

			<div className={styles.statistics}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<p className={styles.text}>{result}</p>
						<div className={styles.result}>
							<GlobalSvgSelector id={icon} />
							<p>20/20</p>
						</div>
					</li>

					<li className={styles.item}>
						<p className={styles.text}>Заработано монет:</p>
						<div className={styles.result}>
							<GlobalSvgSelector id='iconWallet' />
							<p>{`${pay} ₽`}</p>
						</div>
					</li>
				</ul>

				<div className={styles.blockButton}>
					<button
						className={styles.buttonRestart}
						onClick={() => clickHandler()}
					>
						Eщё раз
					</button>
					<button
						className={styles.buttonExit}
						onClick={() => {
							setWallet(pay)
							push('/home')
						}}
					>
						Выйти
					</button>
				</div>
			</div>
		</div>
	)
}

export default VictoryBox
