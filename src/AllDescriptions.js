import React from 'react';
import PropTypes from 'prop-types';

import Description from "./Description";


const AllDescriptions = props => 

<div>

    { props.offers.map((offers, index ) =>
        <Description key={index} 
        brandName={offers.brandName} 
        brandDescription={offers.brandDescription}
         />
    )}
</div>;


AllDescriptions.propTypes = {
    offers: PropTypes.array.isRequired,
    handleNewOfferEvent: PropTypes.func
}



export default AllDescriptions;