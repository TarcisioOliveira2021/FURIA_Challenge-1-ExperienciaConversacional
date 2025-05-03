<script setup lang="ts">
</script>

<template>
  <div class="container-app">
    <v-toolbar :elevation="8">
      <img class="logo_furia" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="Logo"
        width="40px" height="40px" />
      <v-toolbar-title class="d-flex align-center">
        <span class="text-h5">F U R I A</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-container class="site-navbar">
        <v-btn variant="plain" rounded="lg" color="#000000" to="#sobre" text="Sobre"></v-btn>
        <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical></v-divider>
        <v-btn variant="plain" rounded="lg" color="#000000" to="#start" text="Start"></v-btn>
      </v-container>
    </v-toolbar>

    <v-container class="d-flex flex-column align-center justify-center site-content">
      <v-row>
        <v-col cols="12" md="8">
          <h1 class="Title">Participe da revolução</h1>
          <p class="subtitle">O Fala Ai FURIA é uma plataforma de comunicação e interação entre jogadores e fãs de
            esports, com foco em criar uma comunidade unida e engajada.</p>
          
          <v-btn>
            <v-icon class="text-black">mdi-magnify</v-icon>
            <span>Começar</span>
          </v-btn>

        </v-col>
      </v-row>
    </v-container>


    <section id="sobre">
      <span>Sessao de sobre</span>
    </section>

    <section id="start">
      <span>Sessao de começar</span>
    </section>

  </div>
</template>

<style scoped>
.subtitle {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 18px !important;
  color: white;
  margin-left: 3rem;
  margin-right: 3rem;
}

.Title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 64px !important;
  color: white;
}

.site-content .v-row {
  justify-content: center !important;
}

.site-content {
  margin-top: 5em !important;
  height: 600px !important;
}

.site-navbar {
  width: 200px !important;
  padding: 0 !important;
  display: flex;
}

.text-h5 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 14px !important;
  cursor: default;
  color: #000000;
}

.logo_furia {
  padding-left: 1.5em;
  cursor: pointer;
}

.logo_furia:hover {
  filter: drop-shadow(0 0 8px #000000cc);
}

.v-toolbar-title {
  flex: none;
}

.container-app {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background-image: url('./assets/background_001.png');
  background-size: cover;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
