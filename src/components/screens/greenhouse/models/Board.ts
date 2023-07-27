import { Cell } from './Cell'

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

	// public getCell(x: number, y: number) {
	// 	return this.cells[y][x]
	// }

	// private addKings() {
	// 	new King(Colors.BLACK, this.getCell(4, 0))
	// 	new King(Colors.WHITE, this.getCell(4, 7))
	// }

	// private addPawns() {
	// 	for (let i = 0; i < 8; i++) {
	// 		new Pawn(Colors.BLACK, this.getCell(i, 1))
	// 		new Pawn(Colors.WHITE, this.getCell(i, 6))
	// 	}
	// }

	// public addFigures() {
	// 	this.addKings()
	// 	this.addPawns()
	// }
}
