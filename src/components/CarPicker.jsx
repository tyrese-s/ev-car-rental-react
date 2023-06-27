import teslaY from "../assets/teslaY.png"
import tesla3 from "../assets/tesla3.png"
import NissanLeaf from "../assets/NissanLeaf.png"
import miniElectric from "../assets/miniElectric.png"
import KiaENiro from "../assets/KiaENiro.png"

export default function CarPicker () {
   return( 
   <div class="mt-80">
        <div>
            <h1 class="text-2xl m-2">Vehicle models</h1>
            <h2 class="text-5xl m-2">Our rental fleet</h2>
            <p class="text-gray-400 m-4">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div class="sm:flex md:grid grid-cols-5">
            <div>
                <img src={teslaY} alt="tesla model Y"/>
                <h1>Tesla model Y</h1>
                <h2>£45 per day</h2>
                <p>Year 2019</p>
                <p>Doors 4/5</p>
                <p>Transmission: automatic</p>
            </div>
            <div>
                <img src={tesla3} alt="tesla model 3"/>
                <h1>tesla model 3</h1>
                <h2>£ per day</h2>
                <p>Year 2023</p>
                <p>Doors 4/5</p>
                <p>Transmission: Automatic</p>
            </div>
            <div>
                <img src={NissanLeaf}alt="Nissa Leaf"/>
                <h1>Nissa Leaf</h1>
                <h2>£ per day</h2>
                <p>Year 2017</p>
                <p>Doors 4/5</p>
                <p>Transmission: Automatic</p>
            </div>
            <div>
                <img src={miniElectric} alt="Mini electric"/>
                <h1>Mini electric"</h1>
                <h2>£ per day</h2>
                <p>Year 2020</p>
                <p>Doors 2/3</p>
                <p>Transmission: Automatic</p>
            </div>
            <div>
                <img src={KiaENiro} alt="kia e-Niro"/>
                <h1>kia e-Niro</h1>
                <h2>£ per day</h2>
                <p>Year 2023</p>
                <p>Doors 4/5</p>
                <p>Transmission automatic</p>
            </div>

        </div>
    </div>
)}