import { Cell } from './Cell'
import { Colors } from './Colors'
import { TomatoDamaged } from './tomatoes/TomatoDamaged'
import { TomatoGreen } from './tomatoes/TomatoGreen'
import { TomatoRipe } from './tomatoes/TomatoRipe'

export class Board {
	cells: Cell[][] = []

	public initCells() {
		// Create board with 8 rows
		for (let i = 0; i < 35; i++) {
			const row: Cell[] = []

			// Create 1 row with 8 cells
			for (let j = 0; j < 35; j++) {
				row.push(new Cell(this, j, i, null, null))
			}

			this.cells.push(row)
		}
	}

	// public getCopyBoard(): Board {
	// 	const newBoard = new Board()
	// 	newBoard.cells = this.cells

	// 	return newBoard
	// }

	public getCell(x: number, y: number) {
		return this.cells[y][x]
	}

	private addTomatoRipe() {
		new TomatoRipe(Colors.RED, this.getCell(3, 3))
		new TomatoRipe(Colors.RED, this.getCell(7, 2))
		new TomatoRipe(Colors.RED, this.getCell(4, 20))
	}

	private addTomatoGreen() {
		new TomatoGreen(Colors.GREEN, this.getCell(10, 5))
		new TomatoGreen(Colors.GREEN, this.getCell(32, 15))
	}

	private addTomatoDamaged() {
		new TomatoDamaged(Colors.DARK, this.getCell(12, 23))
		new TomatoDamaged(Colors.DARK, this.getCell(17, 17))
	}

	public addTomatoes() {
		this.addTomatoRipe()
		this.addTomatoGreen()
		this.addTomatoDamaged()
	}
}
