 import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible'; 

const Accordion = (props) => { 

    const [openPosition, setopenPosition] = useState(0)
    const [closeAll, setcloseAll] = useState(true)

    const handleTriggerClick  = (position) => {  
        setopenPosition(position)
        setcloseAll((!closeAll && position === openPosition) ? true : false)    
    }
 
    return (
        <>
        {
            props.children.map((node, index) => { 
                return (
                    <Collapsible
                        key={"Collapsible-"+index}
                        handleTriggerClick={handleTriggerClick}
                        open={(!closeAll && openPosition === index)}
                        trigger={node.props['data-trigger']} 
                        accordionPosition={index}
                    >
                        {node}
                    </Collapsible>
                );
            })
        }
        </>
    );     
};
 

export default Accordion;