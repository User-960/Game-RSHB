import cn from 'clsx'
import Image from 'next/image'
import imgRobotCollector from 'public/images/robot-collector.jpg'
import { Dispatch, FC, SetStateAction } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './Shop.module.scss'

interface IShopProps {
	// blocked: string
	onClick: Dispatch<SetStateAction<boolean>>
}

const Shop: FC<IShopProps> = ({ onClick }) => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Магазин</h2>
			<button className={styles.button} onClick={() => onClick(false)}>
				<GlobalSvgSelector id='close' />
			</button>
			<div className={styles.box}>
				<ul className={styles.list}>
					<li className={styles.item}>Робот-собиратель урожая</li>
					<li className={styles.item}>Звуковое отпугивающее устройство</li>
					<li className={styles.item}>Автоматизированная система удобрения</li>
				</ul>

				<div className={cn(styles.card, styles['blocked'])}>
					<Image
						src={imgRobotCollector}
						alt='robot-collector'
						width={160}
						height={240}
						draggable={false}
						priority={true}
						style={{ borderRadius: '20px' }}
					/>
					<p className={styles.textCard}>
						Автоматически собирает фрукты или овощи с помощью датчиков и
						робозахвата.
					</p>
					<ButtonText>Купить за 1000</ButtonText>
				</div>
			</div>
		</div>
	)
}

export default Shop
