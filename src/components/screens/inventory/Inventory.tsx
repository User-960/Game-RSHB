import Image from 'next/image'
import imgRobotCollector from 'public/images/robot-collector.svg'
import { Dispatch, FC, SetStateAction } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './Inventory.module.scss'

interface IInventoryProps {
	onClick: Dispatch<SetStateAction<boolean>>
}

const Inventory: FC<IInventoryProps> = ({ onClick }) => {
	return (
		<div className={styles.wrapper}>
			<h5 className={styles.title}>Инвентарь</h5>

			<button className={styles.button} onClick={() => onClick(false)}>
				<GlobalSvgSelector id='close' />
			</button>

			<ul className={styles.list}>
				<li className={styles.item}>
					<Image
						src={imgRobotCollector}
						alt='robot-collector'
						width={124}
						height={124}
						draggable={false}
						priority={true}
						style={{ borderRadius: '20px' }}
					/>
					<p className={styles.text}>Робот-собиратель урожая</p>
				</li>

				<li className={styles.item}>
					<Image
						src={imgRobotCollector}
						alt='robot-collector'
						width={124}
						height={124}
						draggable={false}
						priority={true}
						style={{ borderRadius: '20px' }}
					/>
					<p className={styles.text}>Робот-собиратель урожая</p>
				</li>

				<li className={styles.item}>
					<Image
						src={imgRobotCollector}
						alt='robot-collector'
						width={124}
						height={124}
						draggable={false}
						priority={true}
						style={{ borderRadius: '20px' }}
					/>
					<p className={styles.text}>Робот-собиратель урожая</p>
				</li>
			</ul>
		</div>
	)
}

export default Inventory
