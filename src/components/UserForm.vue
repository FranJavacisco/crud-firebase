<template>
    <div>
        <h2>Añadir Usuario</h2>
        <form @submit.prevent="submitForm">
            <input v-model="name" type="text" placeholder="Nombre" required />
            <input v-model="email" type="email" placeholder="Correo Electrónico" required />
            <button type="submit">Añadir</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        submitForm() {
            this.$store.dispatch('addUser', { name: this.name, email: this.email });
            this.name = '';
            this.email = '';
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}
</style>