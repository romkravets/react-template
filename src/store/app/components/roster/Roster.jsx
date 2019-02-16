import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import FullRoster from '../fullRoster/FullRoster.jsx';
import Player from '../player/Player.jsx';

const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)


export default Roster
