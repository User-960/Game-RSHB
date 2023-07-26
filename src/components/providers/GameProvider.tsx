import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from 'react'

import { IRobot } from '../interfaces/robots'

type TypeContext = {
	wallet: number
	setWallet: Dispatch<SetStateAction<number>>
	statusCredit: boolean
	setStatusCredit: Dispatch<SetStateAction<boolean>>
	inventory: IRobot[]
	addRobot: (robot: IRobot, inventory: IRobot[]) => void
}

export const GameContext = createContext<TypeContext>({
	wallet: 0,
	setWallet: () => {},
	statusCredit: false,
	setStatusCredit: () => {},
	inventory: [],
	addRobot: (robot: IRobot, inventory: IRobot[]) => {}
})

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [wallet, setWallet] = useState<number>(0)
	const [statusCredit, setStatusCredit] = useState<boolean>(false)
	const inventory: IRobot[] = []
	const addRobot = (robot: IRobot, inventory: IRobot[]) => {
		inventory.push(robot)
	}

	return (
		<GameContext.Provider
			value={{
				wallet,
				setWallet,
				statusCredit,
				setStatusCredit,
				inventory,
				addRobot
			}}
		>
			{children}
		</GameContext.Provider>
	)
}

export default GameProvider
