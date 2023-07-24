import { FC } from 'react'

import ButtonIcon from '@/components/ui/button/buttonIcon/ButtonIcon'
import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}

	return (
		<Layout meta={meta}>
			<ButtonIcon>
				<GlobalSvgSelector id='settings' />
			</ButtonIcon>
		</Layout>
	)
}

export default Home
