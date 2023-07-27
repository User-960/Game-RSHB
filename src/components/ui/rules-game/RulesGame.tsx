import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { GlobalSvgSelector } from '../global-svg-selector/GlobalSvgSelector'

import styles from './RulesGame.module.scss'

interface IRulesGameProps {
	title?: string
	text: string
	clickPlay: () => any
}

const RulesGame: FC<IRulesGameProps> = ({
	title = 'Правила',
	text,
	clickPlay
}) => {
	const { push } = useRouter()

	return (
		<div className={cn(styles.wrapper)}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text}</p>

			<Link href='/something' className={styles.link}>
				<p className={styles.linkText}>Узнать больше про сбор урожая</p>
				<GlobalSvgSelector id='arrowLink' />
			</Link>

			<div className={styles.blockButton}>
				<button className={styles.buttonMap} onClick={() => push('/home')}>
					Карта
				</button>
				<button className={styles.buttonPlay} onClick={() => clickPlay()}>
					Играть
				</button>
			</div>
		</div>
	)
}

export default RulesGame
