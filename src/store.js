// src/store.js

import { createStore } from 'vuex';
import { db } from './firebaseConfig';

export default createStore({
    state: {
        users: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
        removeUser(state, userId) {
            state.users = state.users.filter(user => user.id !== userId);
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            const snapshot = await db.collection('users').get();
            const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            commit('setUsers', users);
        },
        async addUser({ commit }, user) {
            const docRef = await db.collection('users').add(user);
            commit('addUser', { id: docRef.id, ...user });
        },
        async removeUser({ commit }, userId) {
            await db.collection('users').doc(userId).delete();
            commit('removeUser', userId);
        }
    },
    getters: {
        users: state => state.users
    }
});

