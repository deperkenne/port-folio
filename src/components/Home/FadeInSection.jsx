import { useRef, useState, useEffect } from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

  

    return (
        <div
            style={props.style}
            // className={` ${props.className || 'fade-in-section'} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


export default FadeInSection;