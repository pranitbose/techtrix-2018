import React from 'react';

const TeamMember = (props) => (
  <div className='teamMembers'>
      {props.members.map((member) =>
        <div key={member.m_id} className='card'>
          <div className='card-image'>
            <img src={require(`../assets/images/team/${member.name.split(' ')[0].toLowerCase()}.jpg`)} alt="Team Member Image" />
            <a href={`${member.socialLink}`} className='btn-floating halfway-fab waves-effect waves-light light-blue darken-4' rel="noopener noreferrer" target="_blank">
              <i className='fa fa-facebook white-text'></i>
            </a>
          </div>
          <div className='card-content'>
            <p className='card-title grey-text text-darken-4'>{member.name}</p>
            <hr />
            <p className='grey-text text-darken-4'>{member.position}</p>
            <br />
            <div className="contact-info">
              <p><a href={`tel:${member.contactNum}`} className='grey-text text-darken-4'><i className='material-icons black-text left'>phone</i>{member.contactNum}</a></p>
              <br />
              <p className='grey-text text-darken-4'><i className='material-icons black-text left'>mail</i>{member.emailId}</p>
            </div>
          </div>
        </div>
      )}
  </div>
);

export default TeamMember;
