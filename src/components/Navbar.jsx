import { Link } from 'react-router-dom'
import ecocar from '../assets/eco_car.png'
import LoginButton from './LoginButton'

export default function Navbar () {
    return (
        <nav class="">
            <div class="flex flex-row justify-evenly h-16 py-4">
                    <Link to="/">
                        <div class="flex flex-row ">
                            <img src={ecocar} alt="evcar logo" class="h-20 -m-4"/>
                            <h1 class="font-bold text-2xl">EV car rental</h1>
                        </div>
                    </Link>
                <ul class="
                sm: hidden
                md:flex 
                flex-row
                justify-center 
                space-x-12
                font-bold
                ">
                    <Link to="/"><li>Home</li></Link>
                    <li>About</li>
                    <li>Our Vehicles</li>
                    <li>Our Team</li>
                    <li>Contact</li>
                    <li>Charge station map</li>
                </ul>
                <LoginButton/>
            </div>
        </nav>
    )

}