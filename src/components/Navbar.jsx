import ecocar from '../assets/eco_car.png'

export default function Navbar () {
    return (
        <nav class="">
            <div class="flex flex-row justify-evenly h-16 py-4 bg-gray-100 ">
                <div class="flex flex-row ">
                    <img src={ecocar} alt="evcar logo" class="h-20 -m-4"/>
                <h1 class="font-bold text-2xl">EV car rental</h1>
                </div>
                <ul class="
                flex 
                flex-row
                justify-center 
                space-x-12
                font-bold
                ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Vehicles</li>
                    <li>Our Team</li>
                    <li>Contact</li>
                    <li>Charge station map</li>
                </ul>
                <h3>Login/Signup</h3>
            </div>
        </nav>
    )

}