import { ContainAllRightRow ,ProfileImage,ProfileInfoCv,Intermediare} from "./RightBox.styled";
import {data} from './data';
import { useState, useEffect } from "react";



const Image = ({ alt,width,height ,src }) => {
    return <img  alt={alt}  height={height} width={width} src={src}/>;
  };

export default function RightBox() {
    const [showBackground, setshowBackground] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setshowBackground(true)
        }, 250);
    }, [])

    return (
        <ContainAllRightRow >
            <div className="profile-container" >
              <ProfileImage src="/imageCv/cvP.png"/>
            </div>
            <Intermediare/>
            <ProfileInfoCv>
                <h1>Kontakt</h1>
                {
                    data[1].Kontakt.map((item ,index)=>{
                        
                        return (<p key={index}>{item}</p>)
                    })

                }
                <h1>Persönliches</h1>
                {
                    data[2].Persönliches.map((item ,index)=>{
                        
                        return (<p key={index}>{item}</p>)
                    })

                }

              
            </ProfileInfoCv>
            
        </ContainAllRightRow>
    )
}






