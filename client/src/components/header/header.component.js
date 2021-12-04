import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, ProfileName } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrenUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

const Header = () => {
  const currentUser = useSelector(selectCurrenUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();
  const startSignOut = () => dispatch(signOutStart());
  return(
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop" >SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick = {startSignOut}>
        SIGN OUT
        <ProfileName>Hi, {currentUser.displayName}</ProfileName>
        </OptionLink>
      ) : (
        <OptionLink to="/signin" >
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }

  </HeaderContainer>
)};

export default Header;
