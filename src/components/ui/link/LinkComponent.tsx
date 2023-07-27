import Link from 'next/link'
import { FC } from 'react'

import { GlobalSvgSelector } from '../global-svg-selector/GlobalSvgSelector'

import styles from './LinkComponent.module.scss'

interface ILinkComponentProps {
	link: string
	text: string
}

const LinkComponent: FC<ILinkComponentProps> = ({ link, text }) => {
	return (
		<div className={styles.wrapper}>
			<Link href={link} className={styles.link}>
				<p className={styles.linkText}>{text}</p>
				<GlobalSvgSelector id='arrowLink' />
			</Link>
		</div>
	)
}

export default LinkComponent
