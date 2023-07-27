import Image from 'next/image'
import { FC } from 'react'

import { Cell } from '../../models/Cell'

import styles from './CellComponent.module.scss'

interface ICellComponentProps {
	cell: Cell
}

const CellComponent: FC<ICellComponentProps> = ({ cell }) => {
	return (
		<div className={styles.cell}>
			{cell.tomato?.logo && (
				<div className={styles.tomato}>
					<Image
						src={cell.tomato?.logo}
						alt={cell.tomato?.name}
						draggable={false}
						priority
					/>
				</div>
			)}

			{cell.robot?.logo && (
				<div className={styles.robot}>
					<Image
						src={cell.robot?.logo}
						alt={cell.robot?.name}
						draggable={false}
						priority
					/>
				</div>
			)}
		</div>
	)
}

export default CellComponent
