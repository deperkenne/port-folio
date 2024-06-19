import { useRef, useState, useEffect } from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    /* useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        domRef.current && observer.observe(domRef.current);
        return () => domRef.current && observer.unobserve(domRef.current);
    }, []); */

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