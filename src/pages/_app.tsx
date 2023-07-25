import type { AppProps } from 'next/app'

import GameProvider from '@/components/providers/GameProvider'

import '@/assets/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GameProvider>
			<Component {...pageProps} />
		</GameProvider>
	)
}
