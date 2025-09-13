<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-content">
        <!-- Logo -->
        <div class="logo-section">
          <router-link to="/" class="logo-link">
            <img src="../assets/Logo.png" alt="Logo" class="logo-image">      
          </router-link>
        </div>

        <!-- Desktop -->
        <div class="desktop-nav">
          <router-link 
            to="/" 
            class="nav-link"
            :class="{ 'active': $route.name === 'LandingPage' }"
          >
            Home
          </router-link>
          <router-link 
            to="/create" 
            class="nav-link"
            :class="{ 'active': $route.name === 'CreateInvoice' }"
          >
            Create Invoice
          </router-link>
          <router-link 
            to="/history" 
            class="nav-link"
            :class="{ 'active': $route.name === 'HistoryInvoice' }"
          >
            Invoice History
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="mobile-menu-button">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="menu-toggle"
            aria-label="Toggle Menu"
          >
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hamburger-icon">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile -->
      <div v-if="mobileMenuOpen" class="mobile-nav">
        <div class="mobile-nav-content">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false"
            class="mobile-nav-link"
            :class="{ 'active': $route.name === 'Home' }"
          >
            Home
          </router-link>
          <router-link 
            to="/create" 
            @click="mobileMenuOpen = false"
            class="mobile-nav-link"
            :class="{ 'active': $route.name === 'CreateInvoice' }"
          >
            Create Invoice
          </router-link>
          <router-link 
            to="/history" 
            @click="mobileMenuOpen = false"
            class="mobile-nav-link"
            :class="{ 'active': $route.name === 'History' }"
          >
            Invoice History
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .navbar-container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .navbar-container {
    padding: 0 2rem;
  }
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 35%;
  height: auto;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  color: #4b5563;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.1s ease;
}

.nav-link:hover {
  background-color: #6684c5;
  color: white;
  border-radius: 1rem;
}

.nav-link.active {
  color: #2563eb;
  border-bottom-color: #ffffff;
}

.mobile-menu-button {
  display: block;
}

@media (min-width: 768px) {
  .mobile-menu-button {
    display: none;
  }
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-icon {
  width: 24px;
  height: 24px;
  color: #4b5563;
}

.mobile-nav {
  background-color: white;
  border-top: 1px solid #e5e7eb;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}

.mobile-nav-content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 0.375rem;
}

.mobile-nav-link:hover {
  color: #1f2937;
  background-color: #f9fafb;
}

.mobile-nav-link.active {
  background-color: #eff6ff;
  color: #2563eb;
}
</style>
