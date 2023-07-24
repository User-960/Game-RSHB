import { FC } from 'react'

import { GlobalSvgSelector } from '@/components/ui/global-svg-selector/GlobalSvgSelector'

import styles from './MenuBar.module.scss'

const MenuBar: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Настройки</h3>

			<div className={styles.sound}>
				<GlobalSvgSelector id='sound' />
				<input type='range' id='volume' name='volume' min='0' max='100' />
			</div>

			<div className={styles.social}>
				<button>
					<GlobalSvgSelector id='vk' />
				</button>
				<button>
					<GlobalSvgSelector id='telegram' />
				</button>
				<button>
					<GlobalSvgSelector id='email' />
				</button>
			</div>

			<button className={styles.button}>Выйти</button>
		</div>
	)
}

export default MenuBar
