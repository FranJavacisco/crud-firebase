<template>
    <div>
        <h2>Lista de Usuarios</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="deleteUser(user.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.getters.users;
        }
    },
    methods: {
        deleteUser(userId) {
            this.$store.dispatch('removeUser', userId);
        }
    },
    created() {
        this.$store.dispatch('fetchUsers');
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}
</style>