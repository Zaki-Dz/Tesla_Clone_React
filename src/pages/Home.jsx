import styled from 'styled-components'
import Section from '../components/Section'
import ModelS from '../assets/model-s.jpg'
import ModelY from '../assets/model-y.jpg'
import Model3 from '../assets/model-3.jpg'
import ModelX from '../assets/model-x.jpg'
import SolarPanel from '../assets/solar-panel.jpg'
import SolarRoof from '../assets/solar-roof.jpg'
import Accessories from '../assets/accessories.jpg'

const Home = () => {
	return (
		<Container>
			<Section 
				bgImage={ModelS}
				title='Model S'
				description='Order Online for Touchless Delivery'
				leftButton='Custom Order'
				rightButton='Existing Inventory'
				id='1'
				nextBtn
			/>

			<Section 
				bgImage={Model3}
				title='Model 3'
				description='Order Online for Touchless Delivery'
				leftButton='Custom Order'
				rightButton='Existing Inventory'
				id='2'
				nextBtn
			/>

			<Section 
				bgImage={ModelX}
				title='Model X'
				description='Order Online for Touchless Delivery'
				leftButton='Custom Order'
				rightButton='Existing Inventory'
				id='3'
				nextBtn
			/>

			<Section 
				bgImage={ModelY}
				title='Model Y'
				description='Order Online for Touchless Delivery'
				leftButton='Custom Order'
				rightButton='Existing Inventory'
				id='4'
				nextBtn
			/>

			<Section 
				bgImage={SolarPanel}
				title='Lowest Cost Solar Panels in America'
				description='Money-back guarantee'
				leftButton='Order Now'
				rightButton='Learn More'
				id='5'
				nextBtn
			/>

			<Section 
				bgImage={SolarRoof}
				title='Solar for New Roofs'
				description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
				leftButton='Order Now'
				rightButton='Learn More'
				id='6'
				nextBtn
			/>

			<Section 
				bgImage={Accessories}
				title='Accessories'
				leftButton='Shop Now'
				id='7'
			/>
		</Container>
	)
}

export default Home

const Container = styled.div`
	min-height: 100vh;
`