import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function CardMember({imageUrl, facebookLink, twitterLink, linkedinLink, name, position}) {
  return (
    <div className='card'>
        <div className='top'>
            <img src={imageUrl} alt='user'></img>
            <div className='social-links'>
                <a href={facebookLink} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href={twitterLink} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter}/></a>
                <a href={linkedinLink} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedinIn}/></a>
            </div>
        </div>
        <div className='bottom'>
            <h3>{name}</h3>
            <span className='position'>{position}</span>
        </div>
    </div>
  )
}

export default CardMember
