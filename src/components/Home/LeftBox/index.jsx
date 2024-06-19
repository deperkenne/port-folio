
import {
    ContainAllLeftNew, InsideContent, InsideContentP, Intermediare, MapDataBox,
} from "./LeftBox.styled";

import { FiChevronRight } from 'react-icons/fi';
import MycomponentHeader from './MycomponentHeader';

export const data = [
    { title: 'Projects', url: 'projects', icon: 'stack.png' },
    { title: 'Dev Stack', url: 'stacks', icon: 'proj.png' },
    { title: 'Professional experience', url: 'cv', icon: 'exp.png' },
    { title: 'Hobbies', url: 'hobby', icon: 'hobby.png' }]



    const Image = ({ alt,width,height ,src }) => {
        return <img  alt={alt}  height={height} width={width} src={src}/>;
      };

  export  default function LeftBox(){


        function navigateTo(params){
            if(params === "3d"){
                Route.push('/cv')
            }
            else{
            const titleElement = document.getElementById(params)
            titleElement && titleElement.scrollIntoView({behavior: 'smooth'})


            }
        }
                return (
                    <>
                        <ContainAllLeftNew>
                            <MycomponentHeader />
                            <div className={'left-content'} >
                                
                                <div className="content" >
                                    <InsideContent>
                                        <h1>Hello,</h1>
                                        <h1>I<i>'</i>m De perceverance Kenne Tchofo</h1>
                                    </InsideContent>
                                    <InsideContentP>
                                        <p>I'm a <span>Junior Fullstack developer</span>. I love to build <span>user interfaces,apps and</span>  learn <span>things</span> about the <span>web and web3.</span></p>
                                    </InsideContentP>
                                    <Intermediare> <span></span> Menu</Intermediare>
            
                                    <MapDataBox>
                                        {data.map((item, index) => {
                                            let isActive = (item.url === 'cv') ? true : false;
                                            return (
                                                <div onClick={() => navigateTo(item.url)} key={index} >
                                                    <div className="_name" >
                                                        <span style={{
                                                            transform:
                                                                (item.url === 'projects') ? "rotate(48deg)" :
                                                                    (item.url === 'stacks') ? "rotate(20deg)" :
                                                                        'rotate(0deg)'
                                                        }} >
                                                            <Image alt={item.title} height={'85px'} width={'85px'} src={"/img/" + item.icon} />
                                                        </span>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <span>
                                                        <FiChevronRight />
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </MapDataBox>
                                </div>
                            </div>
                        </ContainAllLeftNew>
            
                    </>
            
                )
            }
            
         
            


            



        

       


    