import cn from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

interface ILayoutProps {
	bgImage?: any
	heading?: string
	backLink?: string
	children?: ReactNode

	// meta: IMeta
}

const Layout: FC<ILayoutProps> = ({
	bgImage = '',
	heading = '',
	backLink = '/',
	children
}) => {
	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			{/* <Header backLink={backLink} /> */}
			<main>
				{heading && <h1 className={styles.heading}>{heading}</h1>}
				{children && <div>{children}</div>}
			</main>
		</section>
	)
}

export default Layout
