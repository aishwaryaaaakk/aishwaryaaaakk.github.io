import './Navbar.css'
import { TiThMenu } from "react-icons/ti";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react'
function Navbar(){

  const handleChange=()=>{
    window.open(
      "https://drive.google.com/file/d/1RmNn8m9QHRzy__A3HcjjXcXN-HFEYQk-/view?usp=sharing",
      "_blank"
    );
  }

    return(
        <>
        <div className='navbar'>
            <div className="left-nav">
                <img src='https://media.istockphoto.com/id/1160027332/vector/creative-elegant-letter-a-vector-emblem.jpg?s=612x612&w=0&k=20&c=mWg1EQXXJmjtTIIwFyKqx7OS4HAA7UwdHhkkomSKB1s='/>
            </div>
            <div className="right-nav">
               <a href='#home'>HOME</a>
               <a href='#about'>ABOUT</a>
               <a href='#skills'>SKILLS</a>
               <a href='#projects'>PROJECTS</a>
               <a href='#contact'>CONTACT</a>
               <a onClick={handleChange}>RESUME</a>

               
        
            </div>
            <div className='menu'>
               <Menu isLazy>
  <MenuButton className='menubtn'><TiThMenu/></MenuButton>
  <MenuList className='list'>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem className='item'><a href='#home'>HOME</a></MenuItem>
    <MenuItem className='item' ><a href='#about'>ABOUT</a></MenuItem>
    <MenuItem className='item'><a href='#skills'>SKILLS</a></MenuItem>
    <MenuItem className='item'><a href='#projects'>PROJECTS</a></MenuItem>
    <MenuItem className='item'><a href='#contact'>CONTACT</a></MenuItem>
  </MenuList>
</Menu>
               </div>
            
        </div>
        </>
    )
}
export default Navbar;