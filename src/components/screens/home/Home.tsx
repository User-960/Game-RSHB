import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { IMeta } from '@/components/seo/meta.interface'

const Home: FC = () => {
	const meta: IMeta = {
		title: 'Home',
		description: 'RSHB Game'
	}

	return (
		<Layout meta={meta}>
			<h1>Home</h1>
		</Layout>
	)
}

export default Home
