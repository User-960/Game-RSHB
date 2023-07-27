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
				<Image src={cell.tomato?.logo} alt={cell.tomato?.name} />
			)}

			{cell.robot?.logo && (
				<Image src={cell.robot?.logo} alt={cell.robot?.name} />
			)}
		</div>
	)
}

export default CellComponent
