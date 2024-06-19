import { Row, Col } from "react-bootstrap";
import styled from "styled-components";



const StyledRow = styled(Row)`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    `;

const StyledCol = styled(Col)`
    display: flex;
    flex-direction: column;  
    margin-bottom: ${props => {
        if (props.margin) {
            return props.margin;
        }
        return 0;
    }};
    `;

const InterCalaire = styled.div`
height:100%;
width:100%;
position:relative;
`;


export { StyledRow, StyledCol, InterCalaire }