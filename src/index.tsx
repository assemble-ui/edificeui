import { App } from './App'
import { createRoot } from 'react-dom/client'
import './globals.css'

const container: HTMLElement | null = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
