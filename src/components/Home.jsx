// import { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import tesla from '../assets/tesla3.png'
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import CarPicker from './CarPicker'

export default function Home () {

    // ES6 useState and event handlers to control form input
    // const [carModel, setCarModel] = useState('')
    // const [location, setLocation] = useState('')

    // const handleCarModelChange = (event) => {
    //     setCarModel(event.target.value)
    // };

    // const handleLocationChange = (event) => {
    //     setLocation(event.target.value)
    // }

    // console.log(carModel, location);
    return (
        <div class="mb-96">
        <div class="sm:flex sm:columns-1 md:columns-2 mt-40">
            <div class="grid justify-items-start px-5 md:pl-20 lg:pl-40">
                <h1 class="text-3xl md:text-7xl font-bold text-left">Save <span class="text-red-500">big</span> with our electric car rental</h1>
                <p class="text-left pt-2">Your environmentally friendly car rental service</p>
                <p class="text-left pt-4">Rent the car you want, unbeatable prices with flexible pick-up locations and more.</p>
                <p class="text-left pt-4">Pick up a fully charged car.</p>
                <div class="flex flex-row space-x-4 mt-12">
                <a href='#carBooking'
                onClick={e => {
                    let carBooking = document.getElementById("carBooking")
                    e.preventDefault()
                    carBooking && carBooking.scrollIntoView({behavior: 'smooth'})
                }}>
                <Button variant='contained' size='large'>Book a car</Button>
                </a>
                <Button variant='outlined' >Learn more</Button>
                </div>
            </div>
            <div>
                <img src={tesla} alt="Tesla model 3" class=""/>
            </div>
        </div>
        <div class="mt-80" id='carBooking'>
            <Grid container spacing={2} >
                <Grid xs={12} sm={4}>
                    <InputLabel>Car model</InputLabel>
                    <Select fullWidth>
                        <MenuItem value={'Tesla model y'}>Tesla model Y</MenuItem>
                        <MenuItem value={'Tesla model 3'}>Tesla model 3</MenuItem>
                        <MenuItem value={'Kia e-Niro'}>Kia e-Niro</MenuItem>
                        <MenuItem value={'Nissan Leaf'}>Nissan Leaf</MenuItem>
                        <MenuItem value={'Mini Electric'}>Mini Electric</MenuItem>
                    </Select>
                </Grid>
                <Grid xs={12} sm={4}>
                    <InputLabel>Pick up location</InputLabel>
                    <Select fullWidth>
                        <MenuItem value={'Kensington'}>Kensington</MenuItem>
                        <MenuItem value={'Islington'}>Islington</MenuItem>
                        <MenuItem value={'Canary Wharf'}>Canary Wharf</MenuItem>
                        <MenuItem value={'Whitechapel'}>Whitechapel</MenuItem>
                        </Select>
                </Grid>
                <Grid xs={12} sm={4}>
                    <InputLabel>Drop off location</InputLabel>
                    <Select fullWidth>
                        <MenuItem value={'Kensington'}>Kensington</MenuItem>
                        <MenuItem value={'Islington'}>Islington</MenuItem>
                        <MenuItem value={'Canary Wharf'}>Canary Wharf</MenuItem>
                        <MenuItem value={'Whitechapel'}>Whitechapel</MenuItem>
                    </Select>
                </Grid>
                <Grid xs={12} sm={2}>
                    <InputLabel>Pick up date</InputLabel>
                    <DatePicker/>

                </Grid>
                <Grid xs={12} sm={2}>
                    <InputLabel>Drop off date</InputLabel>
                    <DatePicker/>
                </Grid>
                <Grid xs={12}>
                <Button type='submit' variant='contained' size='medium' color='primary'>Search availability</Button>
                </Grid>
            </Grid>
        </div>
        <CarPicker id="CarPicker"/>
        </div>
    )
}