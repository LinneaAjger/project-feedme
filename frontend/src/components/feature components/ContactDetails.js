import React from "react";
import styled from "styled-components/macro";

const ContactDetails = ({name, email, linkedin}) => {
    return (
        <ContactSection>
            <p>{name}</p>
            <div>
                <div>
                    <a href={`mailto: ${email}`}>
                        <svg width="30px" height="30px" viewBox="0 -4 34 34" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(1 1)">
                                    <rect stroke="#474747" stroke-width="2" width="32" height="24" rx="1"/>
                                    <path d="M31.5.5L15.917 13.083M.5.5l15.584 12.583" stroke="#575757" stroke-linecap="square"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href={linkedin}>
                        <svg fill="#000000" width="30px" height="30px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M3.335 6.498a1.152 1.152 0 0 1-1.248 1.148h-.015a1.15 1.15 0 1 1 .03-2.295 1.147 1.147 0 0 1 1.233 1.147zM.982 8.553h2.206v6.637H.982zm10.165 2.83v3.807H8.941v-3.55c0-.893-.319-1.502-1.12-1.502a1.21 1.21 0 0 0-1.13.807 1.516 1.516 0 0 0-.073.538v3.708H4.41s.03-6.017 0-6.639h2.21v.94l-.016.023h.015V9.49a2.19 2.19 0 0 1 1.989-1.095c1.451 0 2.54.949 2.54 2.988z"/></svg>
                    </a>
                </div>
            </div>
        </ContactSection>

    )
}

export default ContactDetails

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 15px;
    
    div {
        display: flex;
        flex-direction: row;
    }`

