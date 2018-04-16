import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Trips from './Trips'
import { Plan } from './Plan'
import Itinerary from './Itinerary'

export const PlanHome = () => (
  <plan>
    <Switch>
      {/* <Route exact path='/plan' component={Trips}/> */}
      <Route exact path='/plan' component={Plan}/>
      <Route path='/plan/:number' render={(props) => (
        <Itinerary {...props}
          title = 'Itinerary'
          description = "Description" />
      )}/>
    </Switch>
  </plan>
)


