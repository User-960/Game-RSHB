import Image from 'next/image'
import { useRouter } from 'next/router'
import imgRobotBack from 'public/images/robotBackBlur.svg'
import { FC, useState } from 'react'

import ButtonText from '@/components/ui/button/buttonText/ButtonText'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import LinkComponent from '@/components/ui/link/LinkComponent'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import styles from './Finish.module.scss'

const meta: IMeta = {
	title: 'Finish',
	description: 'Finish the game'
}

// const statistics = [
// 	{
// 		text: 'Собрано томатов:',
// 		result: '20/20'
// 	}
// ]

const Finish: FC = () => {
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

				<div className={styles.statistics}>
					<h3 className={styles.statTitle}>Статистика</h3>
					<ul className={styles.list}>
						<li className={styles.item}>
							<p className={styles.text}>Собрано томатов:</p>
							<div className={styles.result}>
								<GlobalSvgSelector id='iconTomato' />
								<p>20/20</p>
							</div>
						</li>

						<li className={styles.item}>
							<p className={styles.text}>Обезврежено вредителей:</p>
							<div className={styles.result}>
								<GlobalSvgSelector id='iconPest' />
								<p>20/20</p>
							</div>
						</li>

						<li className={styles.item}>
							<p className={styles.text}>Удобрено деревьев:</p>
							<div className={styles.result}>
								<GlobalSvgSelector id='iconTree' />
								<p>10/10</p>
							</div>
						</li>

						<li className={styles.item}>
							<p className={styles.text}>Общая сумма кредитов c %:</p>
							<div className={styles.result}>
								<p>3500 ₽</p>
							</div>
						</li>

						<li className={styles.item}>
							<p className={styles.text}>Заработано монет:</p>
							<div className={styles.result}>
								<GlobalSvgSelector id='iconWallet' />
								<p>5000 ₽</p>
							</div>
						</li>
					</ul>

					<LinkComponent link='/page' text='Узнать больше про сбор урожая' />
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
						<ButtonText clickHandler={() => push('/')}>Поделится</ButtonText>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Finish
