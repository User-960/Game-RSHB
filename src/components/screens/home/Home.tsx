import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useContext, useEffect, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import { MapSvgSelector } from '@/components/ui/global-svg-selector/MapSvgSelector'
import InfoBox from '@/components/ui/info-box/InfoBox'
import Loader from '@/components/ui/loader/Loader'

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
	text: 'Упс! Ты не можешь открыть локацию, пока у тебя нет необходимого оборудования. Техника продается в магазине, но у тебя нет монет, поэтому предлагаем тебе взять рассрочку в банке.'
}

const finishBox = {
	title: 'Дорогой друг,',
	text: 'Поздравляю тебя, ты прошел всю игру, успешно использовал современную технику и помог фермерам собрать большой урожай. Теперь его хватит на всех жителей городов и деревень с избытком!'
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
	const [isShowFinishBox, setIsShowFinishBox] = useState<boolean>(false)
	const [isShowEmptyInventoryBox, setIsShowEmptyInventoryBox] =
		useState<boolean>(false)

	const [isShowLoader, setIsShowLoader] = useState<boolean>(true)
	// const { ref, isShow, setIsShow } = useOnClickOutside(isShowMenu)

	const [statusUser, setStatusUser] = useState<number>(0)
	const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
	const [isShowShop, setIsShowShop] = useState<boolean>(false)
	const [isShowBank, setIsShowBank] = useState<boolean>(false)
	const [isShowInventory, setIsShowInventory] = useState<boolean>(false)
	const { push } = useRouter()

	useEffect(() => {
		// const localStatusUser = localStorage.getItem('statusUser')
		if (wallet === 0) {
			setIsShowInventory(false)
			setIsShowEmptyInventoryBox(false)
			// setIsShowShopBox(true)
		} else {
			setStatusUser(1)
			setIsShowInventory(false)
			setIsShowEmptyInventoryBox(false)
			setIsShowShopBox(true)
		}
	}, [isShowBank])

	useEffect(() => {
		if (statusUser === 1) {
			localStorage.setItem('statusUser', String(statusUser))
		}
	}, [statusUser])

	useEffect(() => {
		if (wallet === 5000) {
			setIsShowFinishBox(true)
		}
	}, [wallet])

	useEffect(() => {
		const localStatusUser = localStorage.getItem('statusUser')
		if (wallet > 0 || Number(localStatusUser) === 1) {
			setStatusUser(1)
			setTimeout(() => {
				setIsShowLoader(false)
			}, 2000)

			setIsShowEmptyInventoryBox(false)
			// setIsShowShopBox(false)
			setIsShowIntroductionBox(false)
			setIsShowRulesBox(false)
			setIsShowLocationBox(false)
		} else {
			setTimeout(() => {
				setIsShowLoader(false)
			}, 2000)
		}
	}, [])

	return (
		<Layout meta={meta}>
			{isShowLoader ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
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
						<ButtonIcon
							name='Выход'
							size='medium'
							clickHandler={() => push('/')}
						>
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

					<div
						className={styles.field}
						onClick={() => {
							if (inventory.length > 1) {
								push('/field')
							} else {
								setIsShowLocationBox(false)
								setIsShowInventory(true)
								setIsShowEmptyInventoryBox(true)
							}
						}}
					>
						<MapSvgSelector id='field' />
					</div>

					<div
						className={styles.garden}
						onClick={() => {
							if (inventory.length > 2) {
								push('/garden')
							} else {
								setIsShowLocationBox(false)
								setIsShowInventory(true)
								setIsShowEmptyInventoryBox(true)
							}
						}}
					>
						<MapSvgSelector id='garden' />
					</div>

					{isShowIntroductionBox && (
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

					{isShowRulesBox && (
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

					{isShowLocationBox && (
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

					{isShowEmptyInventoryBox && (
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

					{isShowShopBox && inventory.length === 0 && (
						<div className={styles.infoBoxShop}>
							<InfoBox text={shopBox.text} size='small' button={false} />

							<div className={styles.arrowRightGreen}>
								<GlobalSvgSelector id='arrowRightGreen' />
							</div>
						</div>
					)}

					{isShowFinishBox && (
						<div className={styles.infoBox}>
							<InfoBox
								title={finishBox.title}
								text={finishBox.text}
								size='mega'
								button={true}
								onClick={() => {
									setIsShowFinishBox(false)
									push('/finish')
								}}
							/>
						</div>
					)}
				</div>
			)}
		</Layout>
	)
}

export default Home
