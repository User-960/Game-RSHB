import { useRouter } from 'next/router'
import { FC } from 'react'

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

	return (
		<Layout meta={meta}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Цифровая ферма</h1>
				<InfoBox
					title={infoForBox.title}
					text={infoForBox.text}
					size='mega'
					onClick={() => push('/home')}
				/>
			</div>
		</Layout>
	)
}

export default Start
