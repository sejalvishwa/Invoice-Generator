<script>
</script>

<template>
<section class="hero-section">
 <div class="hero-container">
<div class="left-section">
  <h1 class="hero-title">Invoice Gen</h1>
  <p class="hero-subtitle">Professional Invoice Generator</p>

  <div>
    <p class="hero-content">Create, manage, and track your invoices with ease. Our intuitive platform helps you generate professional invoices in minutes.</p>
  </div>

<div>
  <button class="hero-button">
    <router-link to="/create" class="hero-link">Start Creating Invoices</router-link>
  </button>
</div>

</div>

<div class="right-section">
<div class="hero-image-section">
    <img src="../assets/images/home-bnr.png" alt="" class="hero-image">
</div>
</div>
 </div>
</section>
</template>

<style scoped>

@media (max-width:480px) {
  .hero-container{
    display: flex;
    flex-direction: column;
  }

  .hero-title{
    font-size: 2.5rem;
  }

  .left-section{
    margin-top: -4rem;
    margin-bottom: 2rem;
  }

  .hero-image{
    display: none;
  }

}


@media (max-width:1024px) {
    .hero-image{
        display: none;
    }
}

.hero-section {
  background: linear-gradient(135deg, #4e6eb4 0%, #6c87e0 100%);
  color: white;
  padding: 5rem 0;
}

.hero-container{
    display:flex;
    justify-content: space-between;
}

.left-section{
    padding-left: 3rem;
}

.hero-title{
    font-size: 5rem;
}

.hero-subtitle{
    font-size: 2rem;
    margin-top: -2rem;
}
.hero-content{
    font-size: 1.2rem;
     color: #c9dbf3;
}
.hero-button {
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #ffffff;
  color: #0f3485;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.hero-button:hover {
  transform: scale(1.1);
  background-color: rgb(212, 245, 234);
}

.hero-link {
  text-decoration: none;
  color: inherit;
  display: block;
}


.hero-image{
    width: 80%;
}

</style>