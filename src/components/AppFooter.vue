<!-- <script>
</script> -->

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Company Info Section -->
        <div class="footer-section">
          <h3 class="footer-title">InvoiceGen</h3>
          <p class="footer-description">
            Professional invoice generation made simple. Create, manage, and track your invoices with ease.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/create" class="footer-link">Create Invoice</router-link></li>
            <li><router-link to="/history" class="footer-link">Invoice History</router-link></li>
            <!-- <li><a href="#" class="footer-link">Help Center</a></li> -->
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Contact Us</h4>
          <div class="contact-info">
            <p class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              johndeo@example.com
            </p>
            <p class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +1 (555) 123-4567
            </p>
            <p class="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              123 Business Ave, Suite 100
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            &copy; 2025 InvoiceGen. All rights reserved.
          </p>
          <div class="footer-bottom-links">
            <a href="#" class="footer-bottom-link">Privacy Policy</a>
            <a href="#" class="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: #ffffff;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 60px 0 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.footer-subtitle {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #e2e8f0;
}

.footer-description {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
  color: #cbd5e1;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #cbd5e1;
  margin: 0;
}

.contact-item svg {
  flex-shrink: 0;
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright {
  font-size: 14px;
  color: #cbd5e1;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #ffffff;
}


@media (min-width: 853px) and (max-width: 1280px) {
  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 0;
    gap: 2rem;
  }

  .footer-section {
    flex: 1;
    margin-left: 0;
  }
  
  .footer-title {
    font-size: 22px;
  }

  .footer-subtitle {
    font-size: 16px;
  }
}


@media (max-width: 852px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 40px 0 32px;
  }

  .footer-section {
    margin-left: 0;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-links {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }
}


@media (max-width: 480px) {
  .footer-container {
    padding: 0 16px;
  }

  .footer-content {
    gap: 10px;
    padding: 32px 0 24px;
  }

  .footer-title {
    font-size: 20px;
  }

  .footer-subtitle {
    font-size: 16px;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .contact-item {
    font-size: 13px;
  }

  .footer-bottom-links {
    gap: 16px;
  }
}
</style>
