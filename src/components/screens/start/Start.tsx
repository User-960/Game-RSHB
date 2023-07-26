import Image from 'next/image'
import { useRouter } from 'next/router'
import imgRobot from 'public/images/robot.svg'
import imgRobotBack from 'public/images/robotBackBlur.svg'
import { FC, useState } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import InfoBox from '@/components/ui/info-box/InfoBox'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Start.module.scss'

const infoForBox = {
	title: 'Дорогой друг,',
	text: 'Приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает! Помоги фермерам оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.'
}

const meta: IMeta = {
	title: 'Start',
	description: 'Introduction to the game'
}

const Start: FC = () => {
	const { push } = useRouter()
	const [isShowInfoBox, setIsShowInfoBox] = useState<boolean>(false)
	const [isShowButton, setIsShowButton] = useState<boolean>(true)

	return (
		<Layout meta={meta}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Цифровая ферма</h1>

				<h2 className={styles.titleYear}>2025</h2>

				<div className={styles.logo}>
					<GlobalSvgSelector id='logo' />
				</div>

				<div className={styles.blockRobot}>
					<Image src={imgRobot} alt='Robot' draggable={false} priority />
				</div>

				<div className={styles.blockRobotBack}>
					<Image
						src={imgRobotBack}
						alt='Robot Background'
						draggable={false}
						priority
					/>
				</div>

				<div className={styles.blockButton}>
					{isShowButton && (
						<ButtonText
							clickHandler={() => {
								setIsShowButton(false)
								setIsShowInfoBox(true)
							}}
						>
							Начать игру
						</ButtonText>
					)}
				</div>

				{isShowInfoBox && (
					<div className={styles.infoBox}>
						<InfoBox
							title={infoForBox.title}
							text={infoForBox.text}
							size='mega'
							onClick={() => push('/home')}
						/>
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Start
