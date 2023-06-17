import { render } from "@testing-library/react-native"
import HomeScreen from '../../../src/components/screens/HomeScreen'

describe('Teste da tela HomeScreen', () => {
    it('Deve exibir a tela HomeScreen', () => {
        const { getByTestId } = render(<HomeScreen />)
        const homeScreen = getByTestId('home-screen')
        expect(homeScreen).toBeTruthy()
    })
})