<template>
  <v-container fluid class="home-root pa-0">
    <v-row class="fill-height" no-gutters align="center">
      <!-- HERO (esquerda) -->
      <v-col cols="12" md="7" class="hero-col d-flex align-center">
        <div class="hero-inner">
          <h1 class="hero-title">Transforme Seu Lar no Melhor Estúdio Fitness com Este Guia!</h1>
          <v-btn color="primary" class="mt-6 hero-cta">Descubra Agora</v-btn>
        </div>
      </v-col>

      <!-- LOGIN (direita) -->
      <v-col cols="12" md="5" class="d-flex align-center justify-center">
        <v-card class="login-card pa-6" elevation="8">
          <v-card-title class="text-h6">Fazer Login</v-card-title>
          <v-divider class="mb-4" />
          <v-card-text>
            <v-form @submit.prevent="submit" class="d-flex flex-column">
              <v-text-field v-model="email" label="E-mail" outlined class="mb-4" />
              <v-text-field v-model="password" label="Senha" type="password" outlined class="mb-4" />

              <v-btn type="submit" color="primary" class="mb-3" block>Entrar</v-btn>
              <div class="text-center text-caption mt-2">Ou</div>
              <v-btn variant="outlined" class="mt-3" block>
                <span class="g-button"></span>
                <span class="ms-2">Google</span>
              </v-btn>

              <div class="text-center text-caption mt-4">Novo no VidaFit? <a href="#">Criar conta</a></div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const submit = () => {
  console.log('submitting', { email: email.value, password: password.value })
}
</script>

<style scoped>
.home-root {
  min-height: 100vh;
  width: 100vw;
}

/* HERO */
.hero-col {
  background: linear-gradient(90deg, rgba(13,47,97,0.95) 0%, rgba(33,150,243,0.85) 60%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100vh;
  padding: 6rem 4rem;
  display: flex;
  align-items: center;
}

.hero-inner {
  max-width: 640px;
  color: #fff;
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: 1.02;
  font-weight: 800;
  margin: 0 0 1.2rem 0;
  text-shadow: 0 10px 30px rgba(0,0,0,0.55);
}

.hero-cta {
  background: var(--v-theme-primary);
  color: #fff;
  box-shadow: 0 6px 18px rgba(16,24,40,0.25);
  border-radius: 8px;
}

/* LOGIN */
.login-card {
  width: 360px;
  border-radius: 10px;
}

.v-card {
  border-radius: 12px;
}

@media (max-width: 959px) {
  .hero-col { padding: 2rem; min-height: 40vh; }
  .login-card { width: 90%; }
}
</style>