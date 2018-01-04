import React from 'react';

const TeamMember = (props) => (
  <div className='teamMembers'>
    <div className='row'>
      {props.members.map((member) =>
        <div key={member.m_id} className='col s8 m8 l6 xl6 offset-s2 offset-m2'>
          <div className='card medium'>
            <div className='card-image activator waves-effect waves-block waves-light'>
              <img className='activator' src={require('../assets/images/team/member.png')} alt="" />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-lighten-4'>{member.name}<i className='small material-icons right vertical-more'>more_vert</i></span>
              <p className='grey-text grey-text text-lighten-1 light'>{member.position}</p>
            </div>
            <div className='card-reveal'>
              <span className='card-title'><i className='material-icons black-text right'>close</i></span>
              <br />
              <p className='card-title grey-text text-darken-4'>{member.name}</p>
              <hr />
              <p className='grey-text text-darken-4'>{member.position}</p>
              <div className="contact-info">
                <p><a href={`${member.socialLink}`} className='btn-floating grey lighten-2'><i className='fa fa-facebook black-text'></i></a></p>
                <p><a href={`tel:${member.contactNum}`} className='grey-text text-darken-4'><i className='material-icons black-text left'>phone</i>{member.contactNum}</a></p>
                <p className='grey-text text-darken-4'><i className='material-icons black-text left'>mail</i>{member.emailId}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default TeamMember;
