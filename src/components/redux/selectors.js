export const getFilter = (state) => state.filter;

export const getContacts = (state) => state.contacts;

export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;
