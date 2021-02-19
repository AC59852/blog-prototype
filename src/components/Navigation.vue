<template>
  <header>
      <nav id="topNav">
          <div class="navCon">
              <ul>
                <li><router-link to="/"><img src="/img/svgs/home.svg" alt="Home"></router-link></li>
                <li><router-link to="/feed"><img src="/img/svgs/rss.svg" alt="Subscriptions"></router-link></li>
                <li><router-link to="/trending"><img src="/img/svgs/fire.svg" alt="Trending"></router-link></li>
                <li><router-link to="/discover"><img src="/img/svgs/compass.svg" alt="Recents"></router-link></li>
          </ul>
          </div>
          <router-link class="settingsBtn" to="/settings"><img src="/img/svgs/settings.svg" alt=""></router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>