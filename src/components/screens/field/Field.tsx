import { FC, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import { GreenhouseSvgSelector } from '@/components/ui/global-svg-selector/GreenhouseSvgSelector'
import RulesGame from '@/components/ui/rules-game/RulesGame'
import VictoryBox from '@/components/ui/victory-box/VictoryBox'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Field.module.scss'

const textRules = {
	text: 'С помощью звукового отпугивающего устройства защити посев пшеницы от саранчи. Направляй действие звуковой волны на возникающие угрозы (кликни на них). За уничтоженного вредителя ты будешь получать монеты, которые можешь потратить в магазине или погасить кредит в банке.'
}

const victoryText = {
	text: 'Ты избавился от всей саранчи на поле, при сборе урожая пшеница будет наилучшего качества.'
}

const Field: FC = () => {
	const meta: IMeta = {
		title: 'Field',
		description: 'Second level in RSHB Game'
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
							<GlobalSvgSelector id='iconPest' />
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
						pay={3000}
						clickHandler={() => setIsShowVictoryBox(prev => !prev)}
					/>
				</div>
			)}
		</Layout>
	)
}

export default Field
