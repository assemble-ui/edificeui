import { cleanup, render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
    afterEach(() => {
        cleanup()
    })

    it('should render App', () => {
        render(<App />)

        expect(screen.getByText('Hello World my name is'))
    })
})
