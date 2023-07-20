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

const Layout: FC<ILayoutProps> = ({
	heading = '',
	backLink = '/',
	children,
	meta
}) => {
	return (
		<Meta title={meta.title} description={meta.description}>
			<section
				className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			>
				<Header backLink={backLink} />
				<main>
					{heading && <h1 className={styles.heading}>{heading}</h1>}
					{children && <Fragment>{children}</Fragment>}
				</main>
			</section>
		</Meta>
	)
}

export default Layout
