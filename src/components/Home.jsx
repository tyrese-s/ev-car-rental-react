import tesla from '../assets/tesla.png'
import { Button } from '@mui/material'

export default function Home () {
    return (
        <div class="columns-2 mt-40">
            <div class=" grid justify-items-start pl-60">
                <p class="text-left mb-2 pl-1">Plan your trip now</p>
                <h1 class="text-7xl font-bold text-left">Save <span class="text-red-500">big</span> with our electric car rental</h1>
                <p class="text-left pt-6">Rent the car you want, unbeatable prices with flexible pick-up locations and more.</p>
                <p class="text-left pt-4">Pick up a fully charged car.</p>
                <div class="flex flex-row space-x-4 mt-6">
                <Button variant='contained' size='large'>Book a car</Button>
                <Button variant='outlined'>Learn more</Button>
                </div>
            </div>
            <div>
                <img src={tesla} alt="Tesla model 3"/>
            </div>
        </div>
    )
}