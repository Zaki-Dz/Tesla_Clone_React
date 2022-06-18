import styled from 'styled-components'
import DownArrow from '../assets/down-arrow.svg'
import Fade from 'react-reveal/Fade'

const Section = ({bgImage, title, description, leftButton, rightButton, id, nextBtn}) => {
	const nextId = parseInt(id) + 1

	return (
		<SSection imageSrc={bgImage} id={id}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>

					{description && <p>{description}</p>}
				</ItemText>
			</Fade>

			
			<Fade bottom>
				<Buttons>
					<ButtonGroup>
						<LeftButton>{leftButton}</LeftButton>

						{rightButton && <RightButton>{rightButton}</RightButton>}
					</ButtonGroup>

					{nextBtn &&
						<a href={`#${nextId}`}>
							<img src={DownArrow} />
						</a>
					}
				</Buttons>
			</Fade>
			
		</SSection>
	)
}

export default Section

const SSection = styled.section`
	min-height: 100vh;
	background-image: ${props => `url(${props.imageSrc})`};
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

const BgImage = styled.img`
	height: 100vh;
	object-fit: cover;
	position: absolute;
	z-index: -1;
`

const ItemText = styled.div`
	text-align: center;
	margin-top: 5rem;
`

const Buttons = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3rem;
	gap: 1rem;

	@media only screen and (max-width: 768px) {
	  width: 300px;
	}

	img{
		max-width: 50px;
		animation: bounce 2s infinite;
		cursor: pointer;
	}
`

const ButtonGroup = styled.div`
	display: flex;
	gap: 2rem;
	align-self: stretch;

	@media only screen and (max-width: 768px) {
	  flex-direction: column;
	  padding-inline: 2rem;
	  gap: 1rem;
	}

	button{
		padding: 1rem;
		border: none;
		border-radius: 2rem;
		flex: 1;
		text-transform: uppercase;
		opacity: .8;
		font-size: .9rem;
	}
`

const LeftButton = styled.button`
	background-color: #393c41;
	color: white;
`

const RightButton = styled.button`
	color: #393c41;
`