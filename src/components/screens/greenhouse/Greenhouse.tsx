import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import { GreenhouseSvgSelector } from '@/components/ui/global-svg-selector/GreenhouseSvgSelector'
import RulesGame from '@/components/ui/rules-game/RulesGame'
import VictoryBox from '@/components/ui/victory-box/VictoryBox'

import BoardComponent from './components/board/BoardComponent'
import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Greenhouse.module.scss'
import { Board } from './models/Board'

const textRules = {
	text: 'Управляй роботом - собирателем урожая (двигай его влево или вправо), выбирай правильный тип плодов помидора и минуй еще зелёные или переспелые плоды. За спелые томаты ты будешь получать монеты, которые можешь потратить в магазине или погасить кредит в банке.'
}

const victoryText = {
	text: 'Ты собрал все зрелые томаты, при доставке они не потеряют своих вкусовых свойств.',
	result: 'Собрано томатов:',
	pay: 2000,
	icon: 'iconTomato'
}

const Greenhouse: FC = () => {
	const meta: IMeta = {
		title: 'Greenhouse',
		description: 'First level in RSHB Game'
	}

	const [isShowRulesGameBox, setIsShowRulesGameBox] = useState<boolean>(true)
	const [isShowVictoryBox, setIsShowVictoryBox] = useState<boolean>(false)
	const [board, setBoard] = useState<Board>(new Board())
	const { push } = useRouter()

	useEffect(() => {
		restart()
	}, [])

	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addTomatoes()
		newBoard.addRobotCollector()
		setBoard(newBoard)
	}

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

				<div className={styles.board}>
					<BoardComponent board={board} setBoard={setBoard} />
				</div>
				<div className={styles.rightPart}>
					<div className={styles.rightPartScore}>
						<ButtonIcon size='small' name='12/20'>
							<GlobalSvgSelector id='iconTomato' />
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

export default Greenhouse
