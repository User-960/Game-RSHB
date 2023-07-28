import { FC, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import { GreenhouseSvgSelector } from '@/components/ui/global-svg-selector/GreenhouseSvgSelector'
import RulesGame from '@/components/ui/rules-game/RulesGame'
import VictoryBox from '@/components/ui/victory-box/VictoryBox'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Garden.module.scss'

const textRules = {
	text: 'Примени специальные удобрения для повышения урожайности фруктовых деревьев. Управляй роботом для подсыпки удобрений растениям, на которых мало плодов (кликай на деревья). За удобренное растение ты будешь получать монеты, которые можешь потратить в магазине или погасить кредит в банке.'
}

const victoryText = {
	text: 'Ты удобрил все деревья с яблоками, при доставке они не потеряют своих вкусовых свойств.',
	result: 'Удобрено деревьев:',
	pay: 5000,
	icon: 'iconTree'
}

const Garden: FC = () => {
	const meta: IMeta = {
		title: 'Garden',
		description: 'Third level in RSHB Game'
	}

	const [isShowRulesGameBox, setIsShowRulesGameBox] = useState<boolean>(true)
	const [isShowVictoryBox, setIsShowVictoryBox] = useState<boolean>(false)

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

			<div className={styles.wrapper}>
				<div className={styles.leftPart}>
					<GreenhouseSvgSelector id='greenhouseLeft' />
					<ButtonIcon size='min' clickHandler={() => setIsShowVictoryBox(true)}>
						<GlobalSvgSelector id='exit' />
					</ButtonIcon>
				</div>

				<div className={styles.board}></div>

				<div className={styles.rightPart}>
					<div className={styles.rightPartScore}>
						<ButtonIcon size='small' name='12/20'>
							<GlobalSvgSelector id='iconTree' />
						</ButtonIcon>
						<ButtonIcon size='small' name='1200'>
							<GlobalSvgSelector id='iconWallet' />
						</ButtonIcon>
					</div>
					<GreenhouseSvgSelector id='greenhouseRight' />
				</div>
			</div>

			{isShowVictoryBox && (
				<div className={styles.blockRulesGame}>
					<VictoryBox
						title='Результат'
						text={victoryText.text}
						pay={victoryText.pay}
						result={victoryText.result}
						icon={victoryText.icon}
						clickHandler={() => setIsShowVictoryBox(prev => !prev)}
					/>
				</div>
			)}
		</Layout>
	)
}

export default Garden
