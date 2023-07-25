import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from 'react'

type TypeContext = {
	bank: number
	setBank: Dispatch<SetStateAction<number>>
}

export const GameContext = createContext<TypeContext>({
	bank: 0,
	setBank: () => {}
})

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [bank, setBank] = useState<number>(0)

	return (
		<GameContext.Provider value={{ bank, setBank }}>
			{children}
		</GameContext.Provider>
	)
}

export default GameProvider
