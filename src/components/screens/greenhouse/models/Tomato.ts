import { Board } from './Board'

export class Tomato {
	readonly x: number
	readonly y: number
	board: Board
	id: number // for react keys

	constructor(board: Board, x: number, y: number) {
		this.x = x
		this.y = y
		this.board = board
		this.id = Math.random()
	}
}
