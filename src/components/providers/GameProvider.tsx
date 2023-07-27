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
	setInventory: Dispatch<SetStateAction<IRobot[]>>
	buyRobot: (robot: IRobot, inventory: IRobot[]) => void
	errorStatus: boolean
	setErrorStatus: Dispatch<SetStateAction<boolean>>
}

export const GameContext = createContext<TypeContext>({
	wallet: 0,
	setWallet: () => {},
	statusCredit: false,
	setStatusCredit: () => {},
	inventory: [],
	setInventory: () => {},
	buyRobot: (robot: IRobot, inventory: IRobot[]) => {},
	errorStatus: false,
	setErrorStatus: () => {}
})

const GameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [wallet, setWallet] = useState<number>(0)
	const [statusCredit, setStatusCredit] = useState<boolean>(false)
	const [inventory, setInventory] = useState<IRobot[]>([])
	const [errorStatus, setErrorStatus] = useState<boolean>(false)

	const buyRobot = (robot: IRobot) => {
		if (wallet > 0) {
			setInventory(prev => [...prev, robot])
			setWallet(0)
		} else {
			setErrorStatus(true)
		}
	}

	return (
		<GameContext.Provider
			value={{
				wallet,
				setWallet,
				statusCredit,
				setStatusCredit,
				inventory,
				setInventory,
				buyRobot,
				errorStatus,
				setErrorStatus
			}}
		>
			{children}
		</GameContext.Provider>
	)
}

export default GameProvider
