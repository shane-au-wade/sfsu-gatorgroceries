import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/publicHome'
import SignIn from '../pages/publicSignIn'
import Survey from '../pages/publicSurvey'
import PublicEvents from '../pages/publicEvents'
import PublicCreateOrder from '../pages/publicCreateOrder'
import PublicOrderPlaced from '../pages/publicOrderPlaced'
// import EditOrder from './public/components/editOrder'
// import ConfirmOrder from './public/components/confirmOrder'

// import CookieJar from './admin/components/cookie-jar/cookieJar'
// import AdminEvents from './admin/components/events/AdminEvents'
// import AdminCreateEvent from './admin/components/createEvent/AdminCreateEvent'
// import AdminEditEvent from './admin/components/createEvent/AdminEditEvent'
// import AdminPreviewEvent from './admin/components/createEvent/AdminPreviewEvent'
// import AdminCheckin from './admin/components/checkin/AdminCheckin'
// import Receipt from './admin/components/checkin/Receipt'
// import AdminAccounts from './admin/components/accounts/AdminAccounts'
// import AdminCreateUser from './admin/components/accounts/AdminCreateUser'; 
// import AdminData from './admin/components/data/AdminData'
// import AdminLogin from './admin/components/login/AdminLogin'
// import ForgotPassword from './admin/components/forgotPassword/forgotPassword';
// import RequestNewPassword from './admin/components/request-new-password/request-new-password'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/signin' component={SignIn} />
    <Route path='/survey' component={Survey} />
    <Route path='/events' component={PublicEvents} />
    <Route path='/create-order' component={PublicCreateOrder} />
    <Route path='/order-placed' component={PublicOrderPlaced} />
    {/* <Route path='/edit-order/:order_id' component={EditOrder} /> */}
    {/* <Route path='/confirm-order/:order_id' component={ConfirmOrder} /> */}
    {/* <Route path='/admin/cookie-jar' component={CookieJar} /> */}
    {/* <Route path='/admin/login' component={AdminLogin}/> */}
    {/* <Route path='/admin/request-new-password' component={RequestNewPassword}/> */}
    {/* <Route path='/admin/forgot-password' component={ForgotPassword}/> */}
    {/* <Route path='/admin/events' component={AdminEvents} /> */}
    {/* <Route path='/admin/create-event' component={AdminCreateEvent} /> */}
    {/* <Route path='/admin/edit-event' component={AdminEditEvent} /> */}
    {/* <Route path='/admin/preview-event' component={AdminPreviewEvent} /> */}
    {/* <Route path='/admin/checkin' component={AdminCheckin} /> */}
    {/* <Route path='/admin/receipt' component={Receipt} /> */}
    {/* <Route path='/admin/accounts' component={AdminAccounts} /> */}
    {/* <Route path='/admin/create-user' component={AdminCreateUser} /> */}
    {/* <Route path='/admin/data' component={AdminData} /> */}
  </Switch>
)

export default Routes