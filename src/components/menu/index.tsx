import {
   ButtonIcon,
   Container, 
   MenuItem 
} from "./styles";
import HomeIcon from "../../assets/home.png";
import ShortsIcon from "../../assets/shorts.png";
import SubscriptionsIcon from "../../assets/subscription.png";
import YouIcon from "../../assets/you.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


const items = [
   { id: 1, text: "Início", icon: HomeIcon },
   { id: 2, text: "Shorts", icon: ShortsIcon },
   { id: 3, text: "Inscrições", icon: SubscriptionsIcon }
   //{ id: 4, text: "Você", icon: YouIcon }
];


function Menu() {
   const {openMenu} = useContext(UserContext);

   return (
      <Container openMenu={openMenu}>
         {items.map((item) => (
            <MenuItem key={item.id} openMenu={openMenu}>
            <ButtonIcon alt={item.text} src={item.icon} />
            <span>{item.text}</span>
         </MenuItem>
         ))} 
      </Container>
   )
}

export default Menu;