import { FC, Fragment, useState } from 'react'

import { Board } from '../../models/Board'
import { Cell } from '../../models/Cell'
import CellComponent from '../cell/CellComponent'

import styles from './BoardComponent.module.scss'

interface IBoardProps {
	board: Board
	setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardProps> = ({ board, setBoard }) => {
	const updateBoard = () => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	return (
		<div className={styles.board}>
			{board.cells.map((row, index) => (
				<Fragment key={index}>
					{row.map((cell: Cell) => (
						<CellComponent key={cell.id} cell={cell} />
					))}
				</Fragment>
			))}
		</div>
	)
}

export default BoardComponent
