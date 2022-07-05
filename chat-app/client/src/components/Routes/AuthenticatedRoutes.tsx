import * as React from 'react';
import { Route } from 'react-router-dom';

export interface AuthenticatedRoutesProps {
    appProps: boolean
}

export default function AuthenticatedRoutes (props: AuthenticatedRoutesProps) {
  return (
    <Route />
  );
}
