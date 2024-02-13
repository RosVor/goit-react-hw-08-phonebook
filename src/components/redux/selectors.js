export const getFilter = (state) => state.contacts.filter;

export const getContacts = (state) => state.contacts.items;

export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectLoading = state => state.contacts.loading;
