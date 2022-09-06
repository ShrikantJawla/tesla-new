import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import ModalSCar from '../imagesss/model-s.jpg'


function Home() {
    return (
        <Container>
            <Section title='Model S'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
                description='Order Online for Touchless Delivery'
                leftBtntext='Custom order'
                rightBtntext='Existing Inventory' />
            <Section title='Model Y'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
                description='Order Online for Touchless Delivery'
                leftBtntext='Custom order'
                rightBtntext='Existing Inventory' />
            <Section title='Model 3'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
                description='Order Online for Touchless Delivery'
                leftBtntext='Custom order'
                rightBtntext='Existing Inventory' />
            <Section title='Model X'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
                description='Order Online for Touchless Delivery'
                leftBtntext='Custom order'
                rightBtntext='Existing Inventory' />
            <Section title='Solar Panels'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
                description='Lowest Cost Solar Panels in America'
                leftBtntext='Order Now'
                rightBtntext='Learn More' />
            <Section title='Solar Roof'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto"
                description='Produce Clean Energy From Your Roof'
                leftBtntext='Order Now'
                rightBtntext='Learn More' />
            <Section title='Accessories'
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046"
                description=''
                leftBtntext='Order Now'
            />
        </Container>
    )
}

export default Home
const Container = styled.div`
height:100vh;

`
