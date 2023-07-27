import tomatoGreen from 'public/images/tomato-green.svg'

import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Tomato, TomatoNames } from '../Tomato'

export class TomatoGreen extends Tomato {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = tomatoGreen
		this.name = TomatoNames.GREEN
	}
}
