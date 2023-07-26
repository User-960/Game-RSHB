import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useContext, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import { MapSvgSelector } from '@/components/ui/global-svg-selector/MapSvgSelector'
import InfoBox from '@/components/ui/info-box/InfoBox'

import Layout from '@/components/layout/Layout'
import { GameContext } from '@/components/providers/GameProvider'
import { IMeta } from '@/components/seo/meta.interface'

import Bank from '../bank/Bank'
import Inventory from '../inventory/Inventory'
import MenuBar from '../menu-bar/MenuBar'
import Shop from '../shop/Shop'

import styles from './Home.module.scss'

const introductionBox = {
	title: 'Дорогой друг,',
	text: 'Приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает! Помоги фермерам оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.'
}

const rulesBox = {
	title: 'Правила,',
	text: 'Ты видишь карту, на ней три локации. Первая - открыта, вторая и третья -  заблокированы. Тебе нужно за заданное время успеть выполнить задание, чтобы разблокировать следующий этап. За каждое выполненное задание ты будешь получать деньги, которые в будущем сможешь потратить на приобретение новой техники.'
}

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}

	const { wallet } = useContext(GameContext)

	const [isShowIntroduction, setIsShowIntroduction] = useState<boolean>(true)
	const [isShowRules, setIsShowRules] = useState<boolean>(false)
	const [isShowLocation, setIsShowLocation] = useState<boolean>(false)

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
					<ButtonIcon name={`${String(wallet)} ${'₽'}`} size='medium'>
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

				{isShowIntroduction && (
					<div className={styles.infoBox}>
						<InfoBox
							title={introductionBox.title}
							text={introductionBox.text}
							size='mega'
							onClick={() => {
								setIsShowIntroduction(false)
								setIsShowRules(true)
							}}
						/>
					</div>
				)}

				{isShowRules && (
					<div className={styles.infoBox}>
						<InfoBox
							title={rulesBox.title}
							text={rulesBox.text}
							size='mega'
							onClick={() => {
								setIsShowRules(false)
								setIsShowLocation(true)
							}}
						/>
					</div>
				)}

				{isShowLocation && (
					<div className={styles.infoBoxLocation}>
						<InfoBox
							text={'Кликни на первую локацию'}
							size='small'
							button={false}
							onClick={() => {
								setIsShowRules(false)
							}}
						/>

						<div className={styles.arrowDownGreen}>
							<GlobalSvgSelector id='arrowDownGreen' />
						</div>
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
