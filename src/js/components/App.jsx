import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const App = props => (
  <Switch>
    <Route exact path="/" component={Page1} />
    <Route
      exact
      path="/Page2"
      render={() => (
          props.back.every(element => (element === 'hide')) && props.back.length !== 0 ? (

            <Redirect to="/Page3" />
          ) : (
            <Page2 />
          )
      )}
    />
    <Route path="/Page3" component={Page3} />
  </Switch>
);


const mapStateToProps = state => ({
  back: state.setBack,
});

App.propTypes = {
  back: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
