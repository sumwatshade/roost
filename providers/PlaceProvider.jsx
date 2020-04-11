import React from 'react';

const PlaceContext = React.createContext({ data: {}, setData: () => {}});

const PlaceProvider = ({ children }) => {
    const [selectedPlace, setSelectedPlace] = React.useState({});

    console.log(selectedPlace);
    return (
        <PlaceContext.Provider value={{
            data: selectedPlace,
            setData: setSelectedPlace
        }}>
            {children}
        </PlaceContext.Provider>
    );
}

export default PlaceProvider;
export {
    PlaceContext
};