import { FC, useState } from 'react'

import RulesGame from '@/components/ui/rules-game/RulesGame'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Greenhouse.module.scss'

const textRules = {
	text: 'Управляй роботом - собирателем урожая (двигай его влево или вправо), выбирай правильный тип плодов помидора и минуй еще зелёные или переспелые плоды. За спелые томаты ты будешь получать монеты, которые можешь потратить в магазине или погасить кредит в банке.'
}

const Greenhouse: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}
	const [isShowRulesGameBox, setIsShowRulesGameBox] = useState<boolean>(true)

	return (
		<Layout meta={meta}>
			{isShowRulesGameBox && (
				<div className={styles.blockRulesGame}>
					<RulesGame
						text={textRules.text}
						clickPlay={() => setIsShowRulesGameBox(false)}
					/>
				</div>
			)}
		</Layout>
	)
}

export default Greenhouse
