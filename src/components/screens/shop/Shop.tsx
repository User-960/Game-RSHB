import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import imgAutomatedFertilizerSystem from 'public/images/automated-fertilizer-system.svg'
import imgRobotCollector from 'public/images/robot-collector.svg'
import imgSoundDeterrentDevice from 'public/images/sound-deterrent-device.svg'
import {
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react'

import Alert from '@/components/ui/alert/Alert'
import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import LinkComponent from '@/components/ui/link/LinkComponent'

import { IRobot } from '@/components/interfaces/robots'
import { GameContext } from '@/components/providers/GameProvider'

import styles from './Shop.module.scss'

interface IShopProps {
	onClick: Dispatch<SetStateAction<boolean>>
}

const robots: IRobot[] = [
	{
		id: 1,
		name: 'Робот-собиратель урожая',
		image: 'public/images/sound-deterrent-device.svg',
		description:
			'Автоматически собирает фрукты или овощи с помощью датчиков и робозахвата.',
		price: 1000
	},
	{
		id: 2,
		name: 'Звуковое отпугивающее устройство',
		image: 'public/images/sound-deterrent-device.svg',
		description:
			'Автоматически отпугивает вредителей от посевов направленной звуковой волной.',
		price: 1000
	},
	{
		id: 3,
		name: 'Автоматизированная система удобрения',
		image: 'public/images/automated-fertilizer-system.svg',
		description:
			'Автоматически определяет потребности почвы в питательных веществах. Применяет удобрения в нужном количестве.',
		price: 1000
	}
]

const Shop: FC<IShopProps> = ({ onClick }) => {
	const [isFirstSelected, setFirstIsSelected] = useState<boolean>(true)
	const [isSecondSelected, setSecondIsSelected] = useState<boolean>(false)
	const [isThirdSelected, setThirdIsSelected] = useState<boolean>(false)

	const selectRobotCollector = () => {
		setFirstIsSelected(true)
		setSecondIsSelected(false)
		setThirdIsSelected(false)
	}

	const selectSoundDevice = () => {
		setFirstIsSelected(false)
		setSecondIsSelected(true)
		setThirdIsSelected(false)
	}

	const selectAutomatedSystem = () => {
		setFirstIsSelected(false)
		setSecondIsSelected(false)
		setThirdIsSelected(true)
	}

	const { wallet, errorStatus, setErrorStatus, inventory, buyRobot } =
		useContext(GameContext)

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Магазин</h2>

			{errorStatus && (
				<Alert
					type='error'
					text='Упс, возможно у вас нету средств на счёте или вы уже приобретали данного робота.'
					clickHandler={() => setErrorStatus(false)}
				/>
			)}

			<button className={styles.button} onClick={() => onClick(false)}>
				<GlobalSvgSelector id='close' />
			</button>
			<div className={styles.box}>
				<ul className={styles.list}>
					<li
						className={cn(styles.item, {
							[styles.blockedItem]: isFirstSelected
						})}
						onClick={() => selectRobotCollector()}
					>
						Робот-собиратель урожая
					</li>

					<li
						className={cn(styles.item, {
							[styles.blockedItem]: isSecondSelected
						})}
						onClick={() => selectSoundDevice()}
					>
						Звуковое отпугивающее устройство
					</li>

					<li
						className={cn(styles.item, {
							[styles.blockedItem]: isThirdSelected
						})}
						onClick={() => selectAutomatedSystem()}
					>
						Автоматизированная система удобрения
					</li>
				</ul>

				{isFirstSelected && (
					<div
						className={cn(styles.card, {
							[styles.selectedCard]: isFirstSelected
						})}
					>
						<div className={styles.image}>
							<Image
								src={imgRobotCollector}
								alt={'Робот-собиратель урожая'}
								width={160}
								height={173}
								draggable={false}
								priority={true}
								style={{ borderRadius: '20px' }}
							/>
						</div>
						<p className={styles.textCard}>
							Автоматически собирает фрукты или овощи с помощью датчиков и
							робозахвата.
						</p>

						<LinkComponent link='/something' text='Узнать больше' />

						{inventory.length > 0 ? (
							<ButtonText bought={true}>В инвентаре</ButtonText>
						) : (
							<ButtonText clickHandler={() => buyRobot(robots[0], inventory)}>
								Купить за 1000
							</ButtonText>
						)}
					</div>
				)}

				{isSecondSelected && (
					<div
						className={cn(styles.card, {
							[styles.selectedCard]: isSecondSelected,
							[styles.blockedCard]: wallet >= 2000 ? false : true
						})}
					>
						<div className={styles.image}>
							<Image
								src={imgSoundDeterrentDevice}
								alt={'Звуковое отпугивающее устройство'}
								width={160}
								height={173}
								draggable={false}
								priority={true}
								style={{ borderRadius: '20px' }}
							/>
						</div>
						<p className={styles.textCard}>
							Автоматически отпугивает вредителей от посевов направленной
							звуковой волной.
						</p>

						<LinkComponent link='/something' text='Узнать больше' />

						{inventory.length > 1 ? (
							<ButtonText bought={true}>В инвентаре</ButtonText>
						) : (
							<ButtonText
								clickHandler={() => buyRobot(robots[1], inventory)}
								disabled={wallet === 2000 ? false : true}
								blocked={wallet === 2000 ? false : true}
							>
								{wallet === 2000 ? 'Купить за 2000' : 'Заблокировано'}
							</ButtonText>
						)}
					</div>
				)}

				{isThirdSelected && (
					<div
						className={cn(styles.card, {
							[styles.selectedCard]: isThirdSelected,
							[styles.blockedCard]: wallet >= 3000 ? false : true
						})}
					>
						<div className={styles.image}>
							<Image
								src={imgAutomatedFertilizerSystem}
								alt={'Автоматизированная система удобрения.'}
								width={160}
								height={173}
								draggable={false}
								priority={true}
								style={{ borderRadius: '20px' }}
							/>
						</div>
						<p className={styles.textCard}>
							Автоматически определяет потребности почвы в питательных
							веществах. Применяет удобрения в нужном количестве.
						</p>

						<LinkComponent link='/something' text='Узнать больше' />

						{inventory.length > 2 ? (
							<ButtonText bought={true}>В инвентаре</ButtonText>
						) : (
							<ButtonText
								clickHandler={() => buyRobot(robots[2], inventory)}
								disabled={wallet === 3000 ? false : true}
								blocked={wallet === 3000 ? false : true}
							>
								{wallet === 3000 ? 'Купить за 3000' : 'Заблокировано'}
							</ButtonText>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default Shop
