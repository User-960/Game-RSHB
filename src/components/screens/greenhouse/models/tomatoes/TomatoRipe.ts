import tomatoRipe from 'public/images/tomato-ripe.svg'

import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Tomato, TomatoNames } from '../Tomato'

export class TomatoRipe extends Tomato {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = tomatoRipe
		this.name = TomatoNames.RIPE
	}
}
