<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const features = [
  {
    title: 'Funcionalidades com IA',
    description: 'Chatbot que responde dúvidas sobre o time, cria imagens e interage com fãs de forma personalizada.'
  },
  {
    title: 'Interação Social',
    description: 'Envie figurinhas temáticas, participe do bate-papo e reaja com emojis em tempo real.'
  },
  {
    title: 'Segurança e Comunidade',
    description: 'Moderação por IA, sistema de denúncias e ambiente saudável para todos os fãs.'
  },
  {
    title: 'Acesso Instantâneo',
    description: 'Sem necessidade de e-mail ou senha. Entre, fale e interaja imediatamente.'
  }
];

const icons = [
    {
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/tarcisio-de-oliveira-veloso/'
    },
    {
      icon: 'mdi-github',
      href: 'https://github.com/TarcisioOliveira2021'
    }
];

function iniciarChat() {
  router.push({path: '/chat'});
}
</script>

<template>
  <section id="home" class="section">
    <v-toolbar :elevation="8">
      <img class="logo_furia" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="Logo"
        width="40px" height="40px" />
      <v-toolbar-title class="d-flex align-center">
        <span class="text-h5">F U R I A</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-container class="site-navbar">
        <v-btn variant="plain" rounded="lg" color="#000000" text="Sobre" href="#sobre"></v-btn>
        <v-divider class="mx-3 align-self-center" length="24" thickness="2" vertical></v-divider>
        <v-btn variant="plain" rounded="lg" color="#000000" text="Start" href="#start"></v-btn>
      </v-container>
    </v-toolbar>

    <v-container class="d-flex flex-column align-center justify-center site-content">
      <v-row>
        <v-col cols="12" md="8">
          <h1 class="Title">Participe da revolução</h1>
          <p class="subtitle">O Fala Ai FURIA é uma plataforma de comunicação e interação entre jogadores e fãs de
            esports, com foco em criar uma comunidade unida e engajada.</p>
        </v-col>

        <v-col cols="12" md="8">
          <v-btn icon variant="flat" color="#000000" class="arrow-down" text="" href="#sobre">
            <v-icon left>mdi-arrow-down</v-icon>
            <v-tooltip activator="parent" location="bottom">Arraste para baixo para saber mais</v-tooltip>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section id="sobre" class="about-session">
      <v-container class="d-flex flex-column align-center justify-center about-content">
        <v-row>
          <v-col cols="12" md="8">
            <h1 class="Title">Feito pela comunidade pensando em você</h1>
            <p class="subtitle">O Fala Ai FURIA foi desenvolvido pensando na comunidade de CS 
              <br>uma plataforma para fãs interagirem livremente com muito mais que apenas texto.</p>

            <v-carousel height="300" show-arrows="hover" cycle hide-delimiter-background>
              <v-carousel-item v-for="(item, i) in features" :key="i">
                <v-sheet
                  :height="'100%'"
                  :color="'#000000'"
                >
                  <h1 class="card-Title">{{ item.title }}</h1>
                  <p class="card-subtitle">{{ item.description }}</p>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            
          </v-col>
        </v-row>
      </v-container>
  </section>

  <section id="start" class="start-session">
      <v-container class="d-flex flex-column align-center justify-center site-content">
      <v-row>
        <v-col cols="12" md="8">
          <h1 class="Title">Começe agora a interagir com o universo da <span class="furia-text">FURIA</span></h1>
          <p class="subtitle">Pronto para o gamechange ? <br> Vamos dar GG juntos !</p>
        </v-col>

        <v-col cols="12" md="8">
          <v-btn variant="tonal" rounded="lg" color="#FFFFFF" :onclick="iniciarChat"><span class="start-text">Começar</span>
            <v-tooltip activator="parent" location="bottom">GG easy</v-tooltip>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <v-footer
    class="footer-section"
    color="indigo-lighten-1"
  >
    <div class="">
      <v-btn
        v-for="(item, icon) in icons"
        :key="icon"
        :icon="item.icon"
        :href="item.href"
        density="comfortable"
        variant="plain"
        color="#000000"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Prova de conceito para o desafio tech da <a href="https://www.furia.gg/" target="_blank" style="text-decoration: underline; ">FURIA</a>
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} <br><strong>zRyuk_Dev ©</strong></div>
  </v-footer>
</template>

<style scoped>
@keyframes shakeScroll {
  0%   { transform: translateY(0); }
  20%  { transform: translateY(10px); }
  40%  { transform: translateY(-5px); }
  60%  { transform: translateY(10px); }
  80%  { transform: translateY(-2px); }
  100% { transform: translateY(0); }
}

.furia-text{
  font-family: 'moonhouse', sans-serif;
}

.start-text{
  font-family: 'moonhouse', sans-serif;
  font-size: 18px !important;
}

.start-session{
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

.about-session{
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.arrow-down:hover {
  animation: shakeScroll 0.6s ease-in-out;
}

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

.card-subtitle {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  font-size: 16px !important;
  color: white;
  margin-left: 3rem;
  margin-right: 3rem;
}

.card-Title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 30px !important;
  color: white;
}

.site-content .v-row {
  justify-content: center !important;
}

.site-content {
  margin-top: 10em !important;
  height: 600px !important;
}

.about-content .v-row{
  justify-content: center !important;
}

.about-content {
  margin-top: 1em !important;
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

.section {
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

.footer-section{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
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
