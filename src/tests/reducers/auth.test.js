import authReducer from '../../reducers/auth';

let uid;
beforeEach(() => {
    uid = '1';
});

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});