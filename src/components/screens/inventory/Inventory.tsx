import Image from 'next/image'
import imgRobotCollector from 'public/images/robot-collector.svg'
import imgRobotSound from 'public/images/sound-deterrent-device.svg'
import { Dispatch, FC, SetStateAction, useContext, useEffect } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import { IRobot } from '@/components/interfaces/robots'
import { GameContext } from '@/components/providers/GameProvider'

import styles from './Inventory.module.scss'

interface IInventoryProps {
	onClick: Dispatch<SetStateAction<boolean>>
}

const Inventory: FC<IInventoryProps> = ({ onClick }) => {
	const { inventory } = useContext(GameContext)

	return (
		<div className={styles.wrapper}>
			<h5 className={styles.title}>Инвентарь</h5>

			<button className={styles.button} onClick={() => onClick(false)}>
				<GlobalSvgSelector id='close' />
			</button>

			<ul className={styles.list}>
				{inventory.map((robot: any) => (
					<li className={styles.item} key={robot.id}>
						<Image
							src={robot.id === 1 ? imgRobotCollector : imgRobotSound}
							alt={robot.name}
							width={124}
							height={124}
							draggable={false}
							priority={true}
							style={{ borderRadius: '20px' }}
						/>
						<p className={styles.text}>{robot.name}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Inventory
