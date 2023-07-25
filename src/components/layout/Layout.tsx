import cn from 'clsx'
import { FC, Fragment, ReactNode } from 'react'

import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import styles from './Layout.module.scss'
import Header from './header/Header'

interface ILayoutProps {
	bgImage?: any
	heading?: string
	backLink?: string
	children?: ReactNode

	meta: IMeta
}

const Layout: FC<ILayoutProps> = ({ backLink = '/', children, meta }) => {
	return (
		<Meta title={meta.title} description={meta.description}>
			{/* <Header backLink={backLink} /> */}
			<section className={cn(styles.wrapper)}>
				<main>{children && <Fragment>{children}</Fragment>}</main>
			</section>
		</Meta>
	)
}

export default Layout
