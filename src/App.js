import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/home/Home';
import Vmeetchatlanding from './component/vmeetchatlanding/Vmeetchatlanding';
import Download_center from './component/download-center/Download_center';
import ProfileSidebar from './component/profilesidebar/ProfileSidebar';
import Signin from './component/signin/Signin';
import Joinmeeting from './component/joinmeeting/Joinmeeting';
import Signupfirst from './component/signupfirst/Signupfirst';
import Mailsend from './component/mailsend/Mailsend';
import Welcomevmeet from './component/welcomevmeet/Welcomevmeet';
import Mettings from './component/mettings/Mettings';
import Zoomroom from './component/zoomroom/Zoomroom';
import Calendarintegration from './component/calendar-Integration/CalendarIntegration';
import Devicemanagement from './component/DeviceManagement/DeviceManagement';
import DigitalSignageContent from './component/DigitalSignageContent/DigitalSignageContent';
import Meetingdetails from './component/meetingdetails/Meetingdetails';
import Videochat from './component/videochat/Videochat';
import Webinar from './component/webinar/Webinar';
import Recording from './component/recording/Recording';
import Usermanagement from './component/usermanagement/Usermanagement';
import Security from './component/security/Security';
import UsermanagementUser from './component/usermanagemnet-user/UsermanagementUser';
import Rolemanagement from './component/rolemanagement/Rolemanagement';
import Groupmanagement from './component/groupmanagement/Groupmanagement';
import Billing from './component/billing/Billing';

import Videoend from './component/endvideo/Endvideo';
// import Footer from './component/footer/Footer';
import Pricing from './component/planspricing/Pricing';
import Profile from './component/profile/Profile';
import Acountprofile from './component/account-profile/AccountProfile';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/vmeetchatlanding" component={Vmeetchatlanding} />
        <Route exact path="/download-center" component={Download_center} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/joinmeeting" component={Joinmeeting} />
        <Route exact path="/signupfirst" component={Signupfirst} />
        <Route exact path="/mailsend" component={Mailsend} />
        <Route exact path="/welcomevmeet" component={Welcomevmeet} />
        <Route exact path="/profilesidebar" component={ProfileSidebar} />
        <Route exact path="/mettings" component={Mettings} />
        <Route exact path="/zoomroom" component={Zoomroom} />
        <Route exact path="/calendarintegration" component={Calendarintegration} />
        <Route exact path="/devicemanagement" component={Devicemanagement} />
        <Route exact path="/digitalsignage" component={DigitalSignageContent} />
        <Route exact path="/meetingdetails" component={Meetingdetails} />
        <Route exact path="/videochat" component={Videochat} />
        <Route exact path="/endvideo" component={Videoend} />
        <Route exact path="/webinar" component={Webinar} />
        <Route exact path="/recording" component={Recording} />
        <Route exact path="/usermanagement" component={Usermanagement} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/usermanagementusers" component={UsermanagementUser}/>
        <Route exact path="/rolemanagement" component={Rolemanagement} />
        <Route exact path="/groupmanagement" component={Groupmanagement} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/endvideo" component={Videoend} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/accountprofile" component={Acountprofile} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;

