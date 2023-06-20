import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suvidha Gangtok',
  description: 'Best prices in Suvidha Gangtok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
       
      </head>
      <body className= {'min-h-screen flex flex-col '+ inter.className}>
       <Header/>  
        <div  className='flex-1'>
        {children} 
        </div>

        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-4  md:p-8'>
          <i className='fa-brands fa-instagram text-salte-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
        </footer>
        </body>
    </html>
  )
}
