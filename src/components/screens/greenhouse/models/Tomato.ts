import tomatoRipe from 'public/images/tomato-ripe.svg'

import { Cell } from './Cell'
import { Colors } from './Colors'

export enum TomatoNames {
	TOMATO = 'Помидор',
	RIPE = 'Спелый',
	GREEN = 'Зелёный',
	DAMAGED = 'порченый'
}

export class Tomato {
	cell: Cell
	color: Colors
	logo: typeof tomatoRipe | null
	name: TomatoNames
	id: number

	constructor(color: Colors, cell: Cell) {
		this.color = color
		this.cell = cell
		this.cell.tomato = this
		this.logo = null
		this.name = TomatoNames.TOMATO
		this.id = Math.random()
	}

	fall() {
		return true
	}
}
