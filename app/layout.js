import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suvidha Gangtok',
  description: 'Best prices in Suvidha Gangtok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {'min-h-screen flex flex-col '+ inter.className}>
        
        <header className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900'>HEADER</header>
        <div  className='flex-1'>
        {children} 
        </div>

        <footer></footer>
        </body>
    </html>
  )
}
