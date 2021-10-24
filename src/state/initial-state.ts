import authInitialState from './entities/auth/auth.initial-state';
import { profileInitialState } from './entities/profile/profile.initial-state';
import { IState } from './interfaces';

const rootInitialState: IState = {
    auth: authInitialState,
    profile: profileInitialState,
};

export default rootInitialState;
