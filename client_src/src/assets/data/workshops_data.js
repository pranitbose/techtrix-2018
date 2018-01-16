import React from 'react';

export default {
  workshops: [
    {
      id: 1,
      info: (
        <div className='workshopInfo'>
          <h6 className="amber-text">WHAT YOU WILL LEARN IN THIS WORKSHOP :-</h6>
          <ol>
            <li>What "the Internet of Things" means and how it relates to Cloud computing
          concepts.</li>
            <li>How open platforms allow you to store your sensor data in the Cloud.</li>
            <li>The basic usage of the Arduino environment for creating your own embedded projects at low cost.</li>
            <li>How to connect your Arduino with your Android phone.</li>
            <li>How to send data to the Internet and talk to the Cloud.</li>
            <li>How to update sensor readings on Twitter (Social Networking Sites).</li>
            <li>Control a Relay Switch by texting from your Phone.</li>
          </ol>
          <br />
          <h6 className="amber-text">COMPETITION :-</h6>
          <p>After the hands on theory and practical experience from the workshop, a competition will be conducted for the participants.</p>
          <h6 className="amber-text">CERTIFICATE DISTRIBUTION :-</h6>
          <p>On behalf of Techtron Technologies Certificate of Merit will be provided to all Zonal Round Winners and Certificate of Participation will be provided to all the Zonal Round Participants (Excluding Merit Participants).</p>
        </div>
      ),
      name: "IOT WORKSHOP",
      venue: "RCC Institute of Information Technology, Canal South Road, Beliaghata, Kolkata - 700015.",
      date: "8th - 9th February, 2018",
      fee: "990",
      img: require('../images/workshops/iot.jpg'),
      pdf: require('../docs/workshops/iot.pdf'),
      contacts: ["Himadri Biswas ( +91 8296009994 )","Barun Kumar Singh ( +91 8348591468 ) "],
      faculty: []
    },
    {
      id: 2,
      info: (
        <div className='workshopInfo'>
          <h6 className="amber-text">COMPETITION :-</h6>
          <p>After the hands on theory and practical experience from the workshop, a competition will be conducted for the participants.</p>
          <h6 className="amber-text">CERTIFICATE DISTRIBUTION :-</h6>
          <p>On behalf of Techtron Technologies Certificate of Merit will be provided to all Zonal Round Winners and Certificate of Participation will be provided to all the Zonal Round Participants (Excluding Merit Participants).</p>
        </div>
      ),
      name: "ANDROID WORKSHOP",
      venue: "RCC Institute of Information Technology, Canal South Road, Beliaghata, Kolkata - 700015.",
      date: "8th - 9th February, 2018",
      fee: "990",
      img: require('../images/workshops/android.jpg'),
      pdf: require('../docs/workshops/android.pdf'),
      contacts: ["Himadri Biswas ( +91 8296009994 )","Barun Kumar Singh ( +91 8348591468 ) "],
      faculty: []
    },
    {
      id: 3,
      info: (
        <div className='workshopInfo'>
          <h6 className="amber-text">COMPETITION :-</h6>
          <p>After the hands on theory and practical experience from the workshop, a competition will be conducted for the participants.</p>
          <h6 className="amber-text">CERTIFICATE DISTRIBUTION :-</h6>
          <p>On behalf of Techtron Technologies Certificate of Merit will be provided to all Zonal Round Winners and Certificate of Participation will be provided to all the Zonal Round Participants (Excluding Merit Participants).</p>
        </div>
      ),
      name: "PYTHON WORKSHOP",
      venue: "RCC Institute of Information Technology, Canal South Road, Beliaghata, Kolkata - 700015.",
      date: "8th - 9th February, 2018",
      fee: "990",
      img: require('../images/workshops/python.jpg'),
      pdf: require('../docs/workshops/python.pdf'),
      contacts: ["Himadri Biswas ( +91 8296009994 )","Barun Kumar Singh ( +91 8348591468 ) "],
      faculty: []
    },
    {
      id: 4,
      info: (
        <div className='workshopInfo'>
          <p>ELAN & NVISION IIT Hyderabad sponsored 2 Days workshop on Cyber Security at RCC Institute of Information Technology, Kolkata.</p>
          <h6 className="amber-text">Benefits to students :-</h6>
          <ol>
            <li>Participation Certificate to every candidate from ELAN & NVISION IIT HYDERABAD.</li>
            <li>Software Tool kit to every candidate.</li>
            <li>Excellence Certificate to winners of the workshop.</li>
            <li>Coordination Certificate to coordinators of the workshop.</li>
            <li>After the workshop participate in the Braintech Championship and get a chance to win scholarship of Rs. 1 Lac</li>
          </ol>
          <br />
          <h6 className="amber-text">Registration link :-</h6>
          <p><a href="https://goo.gl/ZC9BBx" className='waves-effect waves-light btn amber darken-2 black-text' target="_blank" rel="noopener noreferrer" style={{fontFamily: 'orbitron'}}>Register</a></p>
       </div>
      ),
      name: "CYBER SECURITY WORKSHOP",
      venue: "RCC Institute of Information Technology, Canal South Road, Beliaghata, Kolkata - 700015.",
      date: "10th - 11th February, 2018",
      fee: "1000",
      img: require('../images/workshops/cyber_security.jpeg'),
      pdf: '',
      contacts: ["Prashant Upadhyay ( +91 9051739884 )","Barun Kumar Singh ( +91 8348591468 )"],
      faculty: ["Prof. Rajib Saha ( +91 9830373904 )"]
    }

  ]
}
