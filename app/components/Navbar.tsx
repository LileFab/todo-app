import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton
} from '@clerk/nextjs'
import { FaOtter } from "react-icons/fa6";
import Button from './UI/Button';


const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-sage-700 to-fern_green-400 opacity-95 top-0 fixed w-screen flex items-center justify-between z-50 h-16 px-4'>  
        <FaOtter className='text-6xl'/>      
        <SignedOut>
            <div className='space-x-4'>
                <SignInButton><Button text='Connexion' type='button' size='text-lg'/></SignInButton>
                <SignUpButton><Button text='Inscription' type='button' size='text-lg'/></SignUpButton>
            </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </nav>
  )
}

export default Navbar