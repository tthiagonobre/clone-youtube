import {
   ButtonIcon,
   Container, 
   MenuItem, 
   Separetor
} from "./styles";
import HomeIcon from "../../assets/home1.png";
import ShortsIcon from "../../assets/shorts.png";
import SubscriptionsIcon from "../../assets/subscription.png";
import HistoryIcon from "../../assets/history.png";
import YouIcon from "../../assets/you.png";
import LoginIcon from "../../assets/login.png"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function Menu() {
   const { openMenu } = useContext(UserContext);
   const [isHovered, setIsHovered] = useState(false);

   return (
      <Container openMenu={openMenu}>
         <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="" src={HomeIcon} />
            <span>Início</span>
         </MenuItem>

         <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="" src={ShortsIcon} />
            <span>Shorts</span>
         </MenuItem>
         
         <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="" src={SubscriptionsIcon} />
            <span>Inscrições</span>
         </MenuItem>

         <Separetor openMenu={openMenu}/>
      
         <MenuItem openMenu={openMenu} style={{ marginTop: '10px' }}>
            <ButtonIcon alt="" src={YouIcon}  />
            <span>Você</span>
         </MenuItem>

         <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="" src={HistoryIcon} />
            <span>Histórico</span>
         </MenuItem>
               
         <Separetor openMenu={openMenu}/>  

         <span style={{
            fontFamily: 'Roboto, Arial, sans-serif',
            marginLeft: "28px",
            marginTop: "18px",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1.5rem",
            color: "#0f0f0f",
         }}>
            Faça login para curtir vídeos, comentar e se inscrever.
         </span>

         <div
            style={{
               borderRadius: '18px', 
               minHeight: '36px',
               width: "auto",
               border: 'solid 1px',
               borderColor: 'rgba(0, 0, 0, 0.1)',
               boxSizing: 'border-box',
               cursor: 'pointer',
               marginTop: "10px",
               backgroundColor: isHovered ? 'rgba(62,166,255,0.3)' : 'transparent',
               display: 'flex',
               alignItems: 'center',
               padding: '0 16px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={openMenu}
         >
            <ButtonIcon alt="" src={LoginIcon} style={{ marginRight: '1px' }} />
            <span style={{
               fontFamily: 'Roboto, Arial, sans-serif',
               fontSize: '14px',
               color: '#065fd4',
               fontWeight: '500',
               marginLeft: '8px',
               height: 'auto'
            }}>Fazer login</span>
         </div>

         <Separetor openMenu={openMenu} style={{marginTop: '15px'}}/>    
   
      </Container>
   )
}

export default Menu;
