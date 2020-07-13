import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import Dashboard from '../pages/Dashboard';
import UserList from '../pages/User/List';
import UserCreate from '../pages/User/Create';

import ProductList from '../pages/Product/List';
import ProductCreate from '../pages/Product/Create';

import ServiceList from '../pages/Service/List';
import ServiceCreate from '../pages/Service/Create';

import CommandList from '../pages/Command/List';
import CommandCreate from '../pages/Command/Create';

import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/welcome/:token" exact component={SignIn} />
      <Route path="/forgot/:token" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/users" exact component={UserList} isPrivate />
      <Route path="/users/:id" component={UserCreate} isPrivate />
      <Route path="/products" exact component={ProductList} isPrivate />
      <Route path="/products/:id" component={ProductCreate} isPrivate />
      <Route path="/services" exact component={ServiceList} isPrivate />
      <Route path="/services/:id" component={ServiceCreate} isPrivate />
      <Route path="/command" exact component={CommandList} isPrivate />
      <Route path="/command/:id" component={CommandCreate} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
