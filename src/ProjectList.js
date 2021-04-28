import {React,useState} from 'react'
import "./Display.css"
import "./ProjectList.css"
import {useDispatch,useSelector} from "react-redux";
import {RemoveDesign} from "./saveDesignAction" 

// import {removeHandler} from "./Project"

// const design = useSelector(state => state.design);
// const {designs} = design;
// const imgBase = "https://mms-images.out.customink.com/mms/images/catalog/colors/15000/views/front.jpg"
const imgBase = "https://mms-images.out.customink.com/mms/images/catalog/colors/"

const ProjectList = ({design,remove}) => {
// console.warn(design)
const dispatch = useDispatch();
// const [design,setDesign] = useState();

    console.log(design.textColor)

    const removeHandler= (design) =>{
        dispatch(RemoveDesign(design))
      }

    // const Display = ({display, textFormat} )=> {
    //     console.log(display.textColor)
    
    return (
        <div className="item ">
            <div className=" card card-body" style={{width:"500px"}} >


                   <img className="img-fluid" src={`${imgBase}${design.tshirtColor}.jpg`} alt="t-shirt"/>
                      <p style={{ color:design.textColor}}>{design.upperText}</p>
                      <img className="proImage" style={{width:"100px"}}
                        src={`${design.url }` || "https://i.ibb.co/vB8zC7B/tshirt.png"}
                        alt="meme-text"
                />

                   
            <button onClick={()=>removeHandler(design)} style={{alignItems:"center"}} className="btn btn-danger btn-sm ">Remove Design</button>
            
            </div>
            
        </div>
    )
}

export default ProjectList