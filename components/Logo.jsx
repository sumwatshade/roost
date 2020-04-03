import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({size}) => {
  return (
    <svg id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109.5 110.88"
      preserveAspectRatio
      width={size}>
      <defs>
        <style>{`
                .cls-1 {
                    fill:#ffefc1;
                }
                
                .cls-1,.cls-2,.cls-3 {
                    stroke:#603813;
                    stroke-miterlimit:10;
                }
                
                .cls-2 {
                    fill:#a67c52;
                }
                
                .cls-3 {
                    fill:none;
                }`}
        </style>
      </defs>
      <ellipse className="cls-1" cx="57.07" cy="47.5" rx="31" ry="47"/>
      <polyline
        className="cls-2"
        points="72.07 69.5 0.07 60.5 14.07 62.5 35.07 100.5 42.07 95.5 98.07 94.5 80.07 94.5 101.07 44.5 109.07 37.5 24.07 110.5"/>
      <line className="cls-3" x1="94.07" y1="50.5" x2="109.07" y2="25.5"/>
    </svg>);
};

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: '200px',
};
export default Logo;
