import { FC } from 'react'

import Button from '@/components/ui/button/Button'
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
			<Button>
				<GlobalSvgSelector id='settings' />
			</Button>
		</Layout>
	)
}

export default Home
