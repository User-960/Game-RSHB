import { FC, useState } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'
import InfoBox from '@/components/ui/info-box/InfoBox'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

import Bank from '../bank/Bank'

const text = `Дорогой друг, приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает! Помоги фермерам оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.`

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}

	const [infoShow, setInfoShow] = useState<boolean>(true)

	return (
		<Layout meta={meta}>
			<ButtonIcon name='Меню' size='medium'>
				<GlobalSvgSelector id='menu' />
			</ButtonIcon>

			{infoShow && (
				<InfoBox
					text={text}
					size='large'
					onClick={() => setInfoShow(prev => !prev)}
				/>
			)}

			<Bank />
		</Layout>
	)
}

export default Home
