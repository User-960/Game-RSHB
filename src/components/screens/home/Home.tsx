import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import { MapSvgSelector } from '@/components/ui/global-svg-selector/MapSvgSelector'
import InfoBox from '@/components/ui/info-box/InfoBox'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import Bank from '../bank/Bank'
import Inventory from '../inventory/Inventory'
import MenuBar from '../menu-bar/MenuBar'
import Shop from '../shop/Shop'

import styles from './Home.module.scss'

const text = `Дорогой друг, приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает! Помоги фермерам оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.`

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}

	const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
	const [isShowShop, setIsShowShop] = useState<boolean>(false)
	const [isShowBank, setIsShowBank] = useState<boolean>(false)
	const [isShowInventory, setIsShowInventory] = useState<boolean>(false)
	const { push } = useRouter()

	return (
		<Layout meta={meta}>
			<div className={styles.wrapper}>
				<div className={styles.settings}>
					<button
						className={cn(styles.button)}
						onClick={() => setIsShowMenu(prev => !prev)}
					>
						<GlobalSvgSelector id='settings' />
					</button>
					{isShowMenu && (
						<div className={styles.blockMenuBar}>
							<MenuBar />
						</div>
					)}
				</div>

				<div className={styles.finance}>
					<ButtonIcon name='0000' size='small'>
						<GlobalSvgSelector id='wallet' />
					</ButtonIcon>

					<button
						className={cn(styles.button, styles.buttonShop)}
						onClick={() => setIsShowShop(prev => !prev)}
					>
						<GlobalSvgSelector id='shop' />
					</button>

					<button
						className={cn(styles.button)}
						onClick={() => setIsShowBank(prev => !prev)}
					>
						<GlobalSvgSelector id='bank' />
					</button>
				</div>

				{isShowShop && (
					<div className={styles.shop}>
						<Shop onClick={() => setIsShowShop(prev => !prev)} />
					</div>
				)}

				{isShowBank && (
					<div className={styles.bank}>
						<Bank onClick={() => setIsShowBank(prev => !prev)} />
					</div>
				)}

				<div className={styles.exit}>
					<ButtonIcon name='Выход' size='medium' clickHandler={() => push('/')}>
						<GlobalSvgSelector id='exit' />
					</ButtonIcon>
				</div>

				<div className={styles.inventoryButton}>
					<ButtonIcon
						name='Инвентарь'
						size='large'
						clickHandler={() => setIsShowInventory(prev => !prev)}
					>
						<GlobalSvgSelector id='inventory' />
					</ButtonIcon>
				</div>

				{isShowInventory && (
					<div className={styles.inventory}>
						<Inventory onClick={() => setIsShowInventory(prev => !prev)} />
					</div>
				)}

				<div className={styles.greenhouse}>
					<MapSvgSelector id='greenhouse' />
				</div>
			</div>
		</Layout>
	)
}

export default Home
