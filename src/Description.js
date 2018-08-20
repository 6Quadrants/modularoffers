import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'reactstrap';

import brandlogo from "./logo.svg";



const Description = props => 

<div>


    <div className="offer">
        <div className="offer-body">    
                <div className="offer-header">
                    <p className = "header-highlight">
                    {props.brandName}
                    </p>
                </div>
            <div className="inner-body">
                <div className="inner-content-one">
                    <div className="logo-body">
                        <img src={brandlogo} className = "logo" />
                </div>

                <div className="offer-text">
                    <div className="text-description">
                        <p className = "pg-highlight">
                        {props.brandDescription}
                        </p>
                    </div>
                </div>
                </div>

                <div className="cta-block">
                    <button className="btn cta">
                        <h3 className="button-text">CLICK THIS</h3>
                    </button>
                    <button className="btn cta">
                        <h3 className="button-text">CLICK THIS</h3>
                    </button>
                </div>
            </div>
        </div>
    </div>


</div>;

Description.propTypes = {
    
    brandName: PropTypes.string.isRequired,
    brandDescription: PropTypes.string.isRequired,

}

export default Description;

