import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		isAuth: false
	},
	reducers: {
		setLogin(state) {
			state.isAuth = true
		},
		unsetLogin(state) {
			state.isAuth = false
		}
	}
})

export default userSlice.reducer
export const {setLogin, unsetLogin} = userSlice.actions