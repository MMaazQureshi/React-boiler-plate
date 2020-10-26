import React from 'react';
import { AuthService } from './auth.service';

const AuthContext = React.createContext<AuthService>(null);

export default AuthContext;
