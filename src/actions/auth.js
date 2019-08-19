import { firebase, googleAuthProvider } from '../firebase/firebase';
import { startSetExpenses } from './expenses';
import { history } from '../routers/AppRouter';
import { setAuth, removeAuth } from '../store/localStorage';

export const login = uid => ({
	type: 'LOGIN',
	uid
});

export const startLogin = (anonym = false) => {
	return dispatch => {
		if (anonym) {
			setAuth('Anonymously');
			dispatch(login('Anonymously'));
			dispatch(startSetExpenses()).then(() => history.push('/dashboard'));
		} else {
			return firebase.auth().signInWithPopup(googleAuthProvider);
		}
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		if (uid === 'Anonymously') {
			removeAuth();
			dispatch(logout());
			history.push('/');
		} else {
			return firebase.auth().signOut();
		}
	};
};
