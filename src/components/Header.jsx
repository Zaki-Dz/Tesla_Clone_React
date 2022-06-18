import styled from 'styled-components'
import LogoImg from '../assets/logo.svg'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {useState} from 'react'

const Header = () => {
	const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false)

	const handleBurgerMenu = () => {
		setIsBurgerMenuActive(!isBurgerMenuActive)
	}

	return (
		<SHeader>
			<Logo>
				<img src={LogoImg} />
			</Logo>

			<Menu>
				<ul>
					<li>
						<a href="#1">Model S</a>
					</li>

					<li>
						<a href="#2">Model 3</a>
					</li>

					<li>
						<a href="#3">Model X</a>
					</li>

					<li>
						<a href="#4">Model Y</a>
					</li>
				</ul>
			</Menu>

			<RightMenu>
				<a href="#">Shop</a>

				<a href="#">Tesla Account</a>

				<CustomMenuIcon onClick={handleBurgerMenu} />
			</RightMenu>

			<BurgerMenu isActive={isBurgerMenuActive}>
				<CustomCloseIcon onClick={handleBurgerMenu} />

				<ul>
					<li>
						<a href="#1">Model S</a>
					</li>

					<li>
						<a href="#2">Model 3</a>
					</li>

					<li>
						<a href="#3">Model X</a>
					</li>

					<li>
						<a href="#4">Model Y</a>
					</li>
				</ul>
			</BurgerMenu>
		</SHeader>
	)
}

export default Header

const SHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 60px;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3rem;
	padding-inline: 2rem;
`

const Logo = styled.div`
	max-width: 100px;
`

const Menu = styled.nav`
	flex: 1;

	@media only screen and (max-width: 768px) {
	  display: none;
	}

	ul{		
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}
`

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	a{
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}
`

const CustomMenuIcon = styled(MenuIcon)`
	cursor: pointer;
`

const CustomCloseIcon = styled(CloseIcon)`
	cursor: pointer;
	align-self: end;
	margin-right: 1rem;
`

const BurgerMenu = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	max-width: 350px;
	width: 100%;
	height: 100vh;
	background-color: white;
	padding: 1rem;
	transition: .2s;
	display: flex;
	flex-direction: column;
	transform: translateX(${props => `${props.isActive ? '0' : '100%'}`});

	ul{
		display: flex;
		flex-direction: column;
		gap: 1rem;

		li{
			a{
				font-weight: bold;
				padding-block: 1rem;
				border-bottom: 2px solid #ccc;
				display: block;
				transition: .2s;

				&:hover{
					padding-left: 1rem;
				}
			}
		}
	}
`