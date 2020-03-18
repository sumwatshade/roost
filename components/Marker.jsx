import {useState} from 'react';
import {motion} from 'framer-motion';

const Marker = ({name, venmo, color, lat, lng}) => {

    const [clicked, setClicked] = useState(false)

    return (
        <motion.div 
            layoutTransition
            style={{
                minWidth: '100px',
                minHeight: '10px',
                border: '1px solid grey',
                borderRadius: '3px',
                backgroundColor: color,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            lat={lat}
            lng={lng}
            onClick={() => setClicked(!clicked)}>
            <div className="name">{name}</div>
            {clicked ? <div className="modal">{venmo}</div> : '' }
        </motion.div>
    )
}

Marker.defaultProps = {
    name: 'Luke',
    color: 'red',
    venmo: '@luke-shadler'
}

export default Marker