import React from 'react'
import { Route,Redirect} from 'react-router-dom'
function PrivateRoute({isLogeIn,children,...props}) {
    console.log({isLogeIn})
     return (
        // لازم كلمة children محجوزة انه كل اشي بين فتحة التاغ اسمه شيلدرن
        <Route {...props}>
        {isLogeIn? children : <Redirect to="/" />}
        {isLogeIn===false }
      </Route>
    )
}

export default PrivateRoute
