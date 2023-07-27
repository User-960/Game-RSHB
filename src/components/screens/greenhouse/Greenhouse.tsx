import { FC, useEffect, useState } from 'react'

import { GreenhouseSvgSelector } from '@/components/ui/global-svg-selector/GreenhouseSvgSelector'
import RulesGame from '@/components/ui/rules-game/RulesGame'

import BoardComponent from './components/board/BoardComponent'
import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Greenhouse.module.scss'
import { Board } from './models/Board'
import { Cell } from './models/Cell'

const textRules = {
	text: 'Управляй роботом - собирателем урожая (двигай его влево или вправо), выбирай правильный тип плодов помидора и минуй еще зелёные или переспелые плоды. За спелые томаты ты будешь получать монеты, которые можешь потратить в магазине или погасить кредит в банке.'
}

const Greenhouse: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}
	const [isShowRulesGameBox, setIsShowRulesGameBox] = useState<boolean>(true)
	const [board, setBoard] = useState<Board>(new Board())

	useEffect(() => {
		restart()
	}, [])

	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addTomatoes()
		newBoard.addRobotCollector()
		setBoard(newBoard)

		// console.log(newBoard.cells)
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
				<GreenhouseSvgSelector id='greenhouseLeft' />
				<div className={styles.board}>
					<BoardComponent board={board} setBoard={setBoard} />
				</div>
				<GreenhouseSvgSelector id='greenhouseRight' />
			</div>
		</Layout>
	)
}

export default Greenhouse
