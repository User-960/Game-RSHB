import tomatoDamaged from 'public/images/tomato-damaged.svg'

import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Tomato, TomatoNames } from '../Tomato'

export class TomatoDamaged extends Tomato {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = tomatoDamaged
		this.name = TomatoNames.DAMAGED
	}
}
