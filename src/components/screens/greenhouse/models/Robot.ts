import robotCollector from 'public/images/robots-for-game/robot-greenhouse.svg'

import { Cell } from './Cell'

export enum RobotNames {
	ROBOT = 'Робот',
	COLLECTOR = 'Собиратель'
}

export class Robot {
	cell: Cell
	logo: typeof robotCollector | null
	name: RobotNames
	id: number
	direction: string | null

	constructor(cell: Cell) {
		this.cell = cell
		this.cell.robot = this
		this.logo = null
		this.name = RobotNames.ROBOT
		this.id = Math.random()
		this.direction = ''
	}

	collect() {}
}
