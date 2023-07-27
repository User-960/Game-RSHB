import Image from 'next/image'
import { useRouter } from 'next/router'
import imgRobot from 'public/images/robot.svg'
import imgRobotBack from 'public/images/robotBackBlur.svg'
import { FC, useState } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Start.module.scss'

const meta: IMeta = {
	title: 'Start',
	description: 'Introduction to the game'
}

const Start: FC = () => {
	const { push } = useRouter()
	const [isShowButton, setIsShowButton] = useState<boolean>(true)

	return (
		<Layout meta={meta}>
			<div className={styles.wrapper}>
				<div className={styles.blockTitle}>
					<h1 className={styles.title}>Цифровая ферма</h1>
					<h2 className={styles.titleYear}>2025</h2>
				</div>

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
						<ButtonText clickHandler={() => push('home')}>
							Начать игру
						</ButtonText>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Start
