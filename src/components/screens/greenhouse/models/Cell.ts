import { Board } from './Board'
import { Robot } from './Robot'
import { Tomato } from './Tomato'

export class Cell {
	readonly x: number
	readonly y: number
	board: Board
	id: number
	tomato: Tomato | null
	robot: Robot | null

	constructor(
		board: Board,
		x: number,
		y: number,
		tomato: Tomato | null,
		robot: Robot | null
	) {
		this.x = x
		this.y = y
		this.board = board
		this.tomato = tomato
		this.robot = robot
		this.id = Math.random()
	}

	isEmpty(): boolean {
		return this.tomato === null
	}
}
