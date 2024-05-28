import {
   ButtonIcon,
   Container, 
   MenuItem 
} from "./styles";
import NotificationIcon from "../../assets/sino.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


const items = [0,0,0];


function Menu() {
   const {openMenu, setOpenMenu} = useContext(UserContext);

   return (
      <Container openMenu={openMenu}>
         {items.map((item) => (
            <MenuItem openMenu={openMenu}> 
               <ButtonIcon alt="" src={NotificationIcon} />
               <span>Início</span>
            </MenuItem>
         ))} 
      </Container>
   )
}

export default Menu;