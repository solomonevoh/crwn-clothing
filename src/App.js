import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrenUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);
    //
    //     snapShot(userRef, snapshot => {
    //       setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //       });
    //     });
    //   }
    //   else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componenetWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
  <div>
    <Header />
    <Switch>
      <Route exact path='/'  component={HomePage} />
      <Route path='/shop'    component={ShopPage} />
      <Route exact path='/checkout'    component={CheckoutPage} />
      <Route
        exact
        path='/signin'
        render={() =>
          this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage/>
          )
        }
        />

    </Switch>
  </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenUser
})

export default connect(
  mapStateToProps
)(App);
