import React,{useState} from "react";
import "./style.css";
import Menu from './menuApi'
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList=[new Set(Menu.map((currElem)=>{
  return currElem.category;
})
),
];

console.log(uniqueList)

const Restaurant = () =>
{
   const [menuData,setMenuData]=useState(Menu);
  
   const filterItem=(category)=>{
     const updatedList=Menu.filter((curElem)=>{
       return curElem.category===category;
     });
    
     setMenuData(updatedList);
   }

  return (
    <>
    {/* <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>BreakFast</button>
        <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
        <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
      </div>
    </nav> */}
    <Navbar filterItem={filterItem}></Navbar>
    <MenuCard menuData={menuData}></MenuCard>
    </>
  );
};

export default Restaurant;
