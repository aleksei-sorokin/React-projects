import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		isAuth: false,
		id: null
	},
	reducers: {
		setLogin(state, action) {
			state.isAuth = true
			state.id = action.payload
		},
		unsetLogin(state) {
			state.isAuth = false
			state.id = null
		}
	}
})

export default userSlice.reducer
export const {setLogin, unsetLogin} = userSlice.actions