import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Header.module.scss'

interface IPropsHeader {
	backLink?: string
}

const Header: FC<IPropsHeader> = ({ backLink = '/' }) => {
	const { push } = useRouter()

	return (
		<header className={styles.header}>
			<button onClick={() => push(backLink)}>RSHB</button>
		</header>
	)
}

export default Header
