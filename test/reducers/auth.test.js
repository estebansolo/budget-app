import authReducer from '../../src/reducers/auth';

test('should setup default auth values', () => {
	const state = authReducer(undefined, {
		type: '@@INIT'
    });
    
	expect(state).toEqual({});
});

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: "uid_123"
    }
    
    const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
	const action = {
        type: 'LOGOUT'
    }
    
    const state = authReducer({ uid: 'anything' }, action);
	expect(state).toEqual({});
});