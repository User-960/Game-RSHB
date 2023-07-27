import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useContext, useEffect, useState } from 'react'

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

const emptyInventoryBox = {
	text: 'Упс! Ты не можешь открыть первую локацию, пока у тебя нет необходимого оборудования. Техника продается в магазине, но у тебя нет монет, поэтому предлагаем тебе взять рассрочку в банке.'
}

const shopBox = {
	text: 'Деньги перечисленны на счет, теперь ты можешь идти за покупками.'
}

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}

	const { wallet, inventory } = useContext(GameContext)

	const [isShowIntroductionBox, setIsShowIntroductionBox] =
		useState<boolean>(true)
	const [isShowRulesBox, setIsShowRulesBox] = useState<boolean>(false)
	const [isShowLocationBox, setIsShowLocationBox] = useState<boolean>(false)
	const [isShowShopBox, setIsShowShopBox] = useState<boolean>(false)
	const [isShowEmptyInventoryBox, setIsShowEmptyInventoryBox] =
		useState<boolean>(false)

	const [statusUser, setStatusUser] = useState<number>(0)
	const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
	const [isShowShop, setIsShowShop] = useState<boolean>(false)
	const [isShowBank, setIsShowBank] = useState<boolean>(false)
	const [isShowInventory, setIsShowInventory] = useState<boolean>(false)
	const { push } = useRouter()

	useEffect(() => {
		if (wallet === 0) {
			setIsShowInventory(false)
			setIsShowEmptyInventoryBox(false)
			setIsShowShopBox(true)
		}
	}, [isShowBank])

	useEffect(() => {
		setIsShowShopBox(false)
		if (
			!isShowRulesBox &&
			!isShowIntroductionBox &&
			!isShowRulesBox &&
			!isShowEmptyInventoryBox
		) {
			setStatusUser(1)
			localStorage.setItem('statusUser', String(statusUser))
		}
	}, [isShowShop])

	useEffect(() => {
		const localStatusUser = localStorage.getItem('statusUser')
		if (Number(localStatusUser) === 1) {
			setIsShowEmptyInventoryBox(false)
			setIsShowShopBox(false)
			setIsShowIntroductionBox(false)
			setIsShowRulesBox(false)
			setIsShowLocationBox(false)
		}
	}, [])

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

				<div
					className={styles.greenhouse}
					onClick={() => {
						if (inventory.length > 0) {
							push('/greenhouse')
						} else {
							setIsShowLocationBox(false)
							setIsShowInventory(true)
							setIsShowEmptyInventoryBox(true)
						}
					}}
				>
					<MapSvgSelector id='greenhouse' />
				</div>

				{isShowIntroductionBox && statusUser === 0 && (
					<div className={styles.infoBox}>
						<InfoBox
							title={introductionBox.title}
							text={introductionBox.text}
							size='mega'
							onClick={() => {
								setIsShowIntroductionBox(false)
								setIsShowRulesBox(true)
							}}
						/>
					</div>
				)}

				{isShowRulesBox && statusUser === 0 && (
					<div className={styles.infoBox}>
						<InfoBox
							title={rulesBox.title}
							text={rulesBox.text}
							size='mega'
							onClick={() => {
								setIsShowRulesBox(false)
								setIsShowLocationBox(true)
							}}
						/>
					</div>
				)}

				{isShowLocationBox && statusUser === 0 && (
					<div className={styles.infoBoxLocation}>
						<InfoBox
							text={'Кликни на первую локацию'}
							size='small'
							button={false}
							onClick={() => {
								setIsShowRulesBox(false)
							}}
						/>

						<div className={styles.arrowDownGreen}>
							<GlobalSvgSelector id='arrowDownGreen' />
						</div>
					</div>
				)}

				{isShowEmptyInventoryBox && statusUser === 0 && (
					<div className={styles.infoBoxEmptyInventory}>
						<InfoBox
							text={emptyInventoryBox.text}
							size='medium'
							button={false}
						/>

						<div className={styles.arrowRightGreen}>
							<GlobalSvgSelector id='arrowRightGreen' />
						</div>
					</div>
				)}

				{isShowShopBox &&
					statusUser === 0 &&
					!isShowBank &&
					!isShowEmptyInventoryBox &&
					!isShowIntroductionBox &&
					!isShowRulesBox &&
					!isShowLocationBox && (
						<div className={styles.infoBoxShop}>
							<InfoBox text={shopBox.text} size='small' button={false} />

							<div className={styles.arrowRightGreen}>
								<GlobalSvgSelector id='arrowRightGreen' />
							</div>
						</div>
					)}
			</div>
		</Layout>
	)
}

export default Home
