import React from 'react';
const WavyTransition = ({ fillColor, inverted }) => (


    (!inverted)
        ?
            <div style={{ overflow: 'hidden', lineHeight: 0, marginBottom: '-2px' }}> {/* Negative margin to overlap */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100" preserveAspectRatio="none" style={{ display: 'block', marginBottom: 0, padding: 0 }}>
                    <path d="M0,0 C150,200 650,0 800,100 L800,100 L0,100 Z" fill={fillColor}></path>
                </svg>
            </div> :
            <div style={{ overflow: 'hidden', lineHeight: 0, marginTop: '-2px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100" preserveAspectRatio="none" style={{ display: 'block', transform: 'rotate(180deg)' }}>
                    <path d="M0,0 C150,200 650,0 800,100 L800,100 L0,100 Z" fill={fillColor}></path>
                </svg>
            </div>




);

export default WavyTransition;