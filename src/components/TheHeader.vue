<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Jogging Track
      </router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact to="/login">
            <i class="ion-compose"></i>Log in
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/signup"
          >
            <i class="ion-compose"></i>Sign up
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact to="/home">
            Home
          </router-link>
        </li>
        <li class="nav-item" v-if="isAllowedEntry">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/record"
          >
            Record
          </router-link>
        </li>
        <li class="nav-item" v-if="isAllowedUser">
          <router-link class="nav-link" active-class="active" exact to="/user">
            User
          </router-link>
        </li>
        <li class="nav-item" v-if="currentUser.role === 'USER'">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            to="/report"
          >
            Report
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" exact to="/#">
            <i class="ion-arrow-return-right" @click="handleLogout"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGOUT } from '@/store/actions'
import { isUserOrAdmin, isManagerOrAdmin } from '@/helpers'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated']),
    isAllowedEntry() {
      return isUserOrAdmin(this.currentUser)
    },
    isAllowedUser() {
      return isManagerOrAdmin(this.currentUser)
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>
