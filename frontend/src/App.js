import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TimerComponent from './components/Timer/TimerComponent';
import HistoryComponent from './components/HistoryComponent';
import Header from './components/Header';
import { Container } from 'reactstrap';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/' exact component={TimerComponent} />
        <Route path='/listhistory' component={HistoryComponent} />
      </Container>
    </Router>
  )
}

export default App;
