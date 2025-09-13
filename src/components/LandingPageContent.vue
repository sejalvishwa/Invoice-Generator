<script setup>
import plusIcon from '../assets/images/plusIcon.png'
import smart from '../assets/images/smart.png'
import history from '../assets/images/history.png'

const infoCards = [
  {
    image: plusIcon,
    bgColor: '#DBEAFE',
    title: "Easy Creation",
    description: "Create professional invoices in minutes with our intuitive form builder"
  },
  {
    image: smart,
    bgColor: '#DCFCE7',
    title: "Smart Management",
    description: "Edit, track, and organize all your invoices in one centralized location"
  },
  {
    image: history,
    bgColor: '#F3E8FF',
    title: "Complete History",
    description: "Access your complete invoice history with powerful search and filtering"
  }
];
</script>

<template>
  <div class="content-heading">
    <h2 class="content-heading-title">Everything you need to manage invoices</h2>
  </div>

  <div class="content-paragraph-section">
    <p class="content-paragraph">
      Streamline your billing process with our comprehensive invoice <br/>
      <span style="display: flex; justify-content: center; align-items: center;">
        management system
      </span>
    </p>
  </div>

  <div class="info-card-section">
    <div class="info-card-grid">
      <div class="info-card-main" v-for="(card, index) in infoCards" :key="index">
        <div class="info-card-image-section" :style="{ backgroundColor: card.bgColor }">
          <img :src="card.image" alt="" class="info-card-image">
        </div>
        <div class="info-heading-section">
          <h3 class="info-heading">{{ card.title }}</h3>
        </div>
        <div class="info-paragraph-section">
          <p class="info-paragraph">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.content-heading-title {
  font-size: 2.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-align: center;
}

.content-paragraph-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
}

.content-paragraph {
  font-size: 1.4rem;
  color: rgb(94, 93, 93);
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.info-card-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
}

.info-card-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.info-card-main {
  background-color: #fff;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  text-align: center;
  width: 250px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  cursor: pointer;
}

.info-card-main:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transform: translateY(-2px);
  border: 1px solid rgba(0,0,0,0.1);
}

.info-card-image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
}

.info-card-image {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}

.info-heading-section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
}

.info-paragraph-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.5rem;
}

.info-paragraph {
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #505563;
}

/* Responsive Layout */
@media (max-width: 1024px) {
  .info-card-grid {
    gap: 1.5rem;
  }
}

@media (min-width: 820px) and (max-width: 1180px) {
  .info-card-grid {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 2rem;
  }

  .info-card-main {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .content-heading-title {
    font-size: 2rem;
    text-align: center;
  }

  .content-paragraph {
    font-size: 1.2rem;
    text-align: center;
  }

  .info-card-grid {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .content-heading-title {
    font-size: 1.5rem;
  }

  .content-paragraph {
    font-size: 1rem;
  }

  .info-card-main {
    width: 90%;
    padding: 1rem;
  }

  .info-card-image-section {
    width: 4rem;
    height: 4rem;
  }

  .info-card-image {
    width: 2rem;
    height: 2rem;
  }

  .info-heading-section {
    font-size: 1rem;
  }

  .info-paragraph {
    font-size: 1rem;
  }
}
</style>
