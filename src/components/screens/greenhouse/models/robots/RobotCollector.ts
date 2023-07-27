import robotCollector from 'public/images/robots-for-game/robot-greenhouse.svg'

import { Cell } from '../Cell'
import { Robot, RobotNames } from '../Robot'

export class RobotCollector extends Robot {
	constructor(cell: Cell) {
		super(cell)
		this.logo = robotCollector
		this.name = RobotNames.COLLECTOR
	}
}
