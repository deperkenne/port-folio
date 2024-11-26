
import React, { PureComponent ,useState,useEffect,useRef  } from 'react';
import {
    ContainAllLeft,
    StyledImg,
    InsideContent,
    InsideContentP,
    Intermediare,
    MapDataBox,
    StyleDropDownToogle,
    StyleDropDownMenu,
    StyleDropDownItem,
    StyleDropDown,
} from "./LeftBox.styled";
import { data } from './index';
import { FiMenu } from "react-icons/fi";



// definir un composant pour fermer le StyleDropDownMenu

export default function MyComponentHeader() {
    const [showDropdown,setShowDropdown] = useState(false);
    const dropdownRef = useRef(null); // qui permettra d'ecouter l'evement a n'importe quel endroit du Dom 

    const handleToggle = () => {
        setShowDropdown(prevShowDropdown => !prevShowDropdown)
        

    };

    const handleClickOuside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setShowDropdown(false);
            
        }
    };

     useEffect (() =>{
        if(showDropdown){
          document.addEventListener('mousedown',handleClickOuside)

        }else {
            document.removeEventListener('mousedown', handleClickOuside);
          }
      
          return () => {
            document.removeEventListener('mousedown', handleClickOuside);
          };
        }, [showDropdown]);


        return (
            <div>
                <Header initshowDropdown={showDropdown} onClick={()=> handleToggle()} />
            </div>
        )


}









 function Header({initshowDropdown  , onClick}) {
    const [scrolled, setScrolled] = useState(false);
    const [isShow,setisShow] = useState(initshowDropdown)
    console.log(initshowDropdown)


    function navigateTo(e, params) {
        // e.preventDefault();
        if (params === '3d') {
            Router.push('/cv')
        } else {
            const titleElement = document.getElementById(params)
            console.log('params', params, titleElement)
            titleElement && titleElement.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <>
            <StyleDropDown  >
                <StyleDropDownToogle variant="light" id="dropdown-basic" >
                    <span>Menu <FiMenu /> </span>
                </StyleDropDownToogle>
               
               
            </StyleDropDown>
        </>
    )
}




class HangleScroll extends PureComponent {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.outside = false;
    }
    // Gérer le scroll et le unmounting
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = window.scrollY;
        if (scrollTop > 350 && !this.outside) {
            this.outside = true;
            this.props.setBorder(true);
        }
        if (scrollTop < 350 && this.outside) {
            this.outside = false;
            this.props.setBorder(false);
        }
    }

    render() {
        return null;
    }
}
