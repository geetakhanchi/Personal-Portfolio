import React from 'react'
import "../Style/Staticsection.css"
import SeparatorLine from "../Components/SepratorLine"
const StaticSection = () => {
    return (
        <div className='static'>
            <SeparatorLine />
            <label className='section_title'>Statistics</label>
            <div>
                <i style={{ color: "black", fontSize: "20px" }} class="fi fi-rr-comment-code"></i> <span style={{ color: "teal",  fontWeight: "700", margin: "10px" }}>1200+ Hours Practicle Coding</span>

            </div>
            <div>
                <i style={{ color: "black", fontSize: "20px" }} class="fi fi-rr-bulb"></i><span style={{ color: "teal",  fontWeight: "700", margin: "10px" }}>300+ Hours
                    DSA</span>
            </div>
            <div>
                <i style={{ color: "black", fontSize: "20px" }} class="fi fi-rr-calculator"></i><span style={{ color: "teal",  fontWeight: "700", margin: "10px" }}>100+ Hours
                    Math & Logic</span>
            </div>
            <div>
                <i style={{ color: "black", fontSize: "20px" }} class="fi fi-rr-document"></i><span style={{ color: "teal",  fontWeight: "700", margin: "10px" }}>50+
                    Mini Projects</span>
            </div>
            <div>
                <i style={{ color: "black", fontSize: "20px" }} class="fi fi-rr-edit-alt"></i><span style={{ color: "teal",  fontWeight: "700", margin: "10px" }}>5+
                    Projects</span>
            </div>
        </div>

    )
}

export default StaticSection