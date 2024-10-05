import { Box, Icon } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { GoHomeFill } from "react-icons/go";
import { IoLogoGameControllerB } from "react-icons/io";
// import { HiUser } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";
// import { HiMiniTrophy } from "react-icons/hi2";
import { TbTournament } from "react-icons/tb";

interface NavItemProps {
    icon: React.ReactNode;
    isActive?: boolean;
    to: string; 
}

const NavItem: React.FC<NavItemProps> = ({
    icon, isActive = false, to
}) => (
    <Link to={to}>
        <Box
        className={`flex ${ 
            isActive ? "text-black" : "text-gray-300"}`}
        >
            {icon}
        </Box>
    </Link>
)


const NavigationBar: React.FC = () => {
    const location = useLocation();
    const isGameActive = location.pathname.startsWith("/game");
    const isProfileActive = location.pathname.startsWith("/profile")
    return(
        <nav>
        <Box
        bgColor={'#fff'}
        width={'100%'}
        display={'flex'}
        height={'100px'}
        alignItems={'center'}
        justifyContent={'space-around'}
        position={'fixed'}
        bottom={0}
        right={0}
        boxShadow={'0px 0px 10px 10px #ffffff'}
        zIndex={
            100
        }
        // color={'rgba(0, 0, 0, 0.3)'}
        >
            <NavItem
                icon={
                    <Icon as={GoHomeFill} boxSize={10}/>
                }
                isActive={isProfileActive || location.pathname === "/"}
                to="/"
            />
            <NavItem
                icon={
                    <Icon as={IoLogoGameControllerB} boxSize={10}/>
                }
                isActive={isGameActive || location.pathname=="/minigames"}
                to="/minigames"
            />
            <NavItem
                icon={
                    <Icon as={TbTournament} boxSize={10}/>
                }
                isActive={location.pathname === "/tournament"}
                to="/tournament"
            />
            <NavItem
                icon={
                    <Icon as={RiTeamFill} boxSize={10}/>
                }
                isActive={location.pathname === "/friends"}
                to="/friends"
            />
        </Box>
        </nav>
    )
}

export default NavigationBar