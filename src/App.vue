<template>
  <div id="app">
    <UserForm />
    <UserList />
  </div>
</template>

<script>
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default {
  name: 'App',
  components: {
    UserForm,
    UserList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
