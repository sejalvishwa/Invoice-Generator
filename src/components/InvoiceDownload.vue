<template>
  <div class="invoice-container" v-if="invoice">
    <!-- Header -->
    <div class="invoice-header">
      <div class="company-logo">
        <img :src="invoice.company.logo || CompanyLogo" alt="Company Logo" />
      </div>
      <div class="invoice-title">
        <h1>TAX INVOICE</h1>
      </div>
    </div>

    
    <div class="invoice-details">
      <div class="company-box">
        <h3>From:</h3>
        <p><strong>{{ invoice.company.name }}</strong></p>
        <p>{{ invoice.company.address }}</p>
        <p>Email: {{ invoice.company.email }}</p>
        <p>Phone: {{ invoice.company.phone }}</p>
      </div>

      <div class="invoice-box">
        <p><strong>Invoice #:</strong> {{ invoice.invoiceNumber }}</p>
        <p><strong>Date:</strong> {{ formatDate(invoice.date) }}</p>
        <p><strong>Due Date:</strong> {{ formatDate(invoice.dueDate) }}</p>
      </div>
    </div>

   
    <div class="client-box">
      <h3>Bill To:</h3>
      <p><strong>{{ invoice.client.name }}</strong></p>
      <p>{{ invoice.client.address }}</p>
      <p>Email: {{ invoice.client.email }}</p>
    </div>

  
    <table class="items-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in invoice.items" :key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.rate.toFixed(2) }}</td>
          <td>${{ (item.quantity * item.rate).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>


    <div class="summary-box">
      <p><strong>Subtotal:</strong> ${{ subtotal.toFixed(2) }}</p>
      <p><strong>Tax ({{ invoice.taxRate }}%):</strong> ${{ tax.toFixed(2) }}</p>
      <p><strong>Total:</strong> ${{ total.toFixed(2) }}</p>
    </div>

    <button @click="printPage">Print / Save as PDF</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CompanyLogo from '../assets/Logo.png'

const route = useRoute()
const invoice = ref(null)

onMounted(() => {
  const invoices = JSON.parse(localStorage.getItem('invoices') || '[]')
  const foundInvoice = invoices.find(inv => inv.id == route.params.id)
  if (foundInvoice) {
    invoice.value = foundInvoice
    setTimeout(() => window.print(), 1000)
  } else {
    window.location.href = '/history'
  }
})

const subtotal = computed(() =>
  invoice.value?.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0) || 0
)

const tax = computed(() => subtotal.value * (invoice.value?.taxRate / 100 || 0))

const total = computed(() => subtotal.value + tax.value)

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString()

const printPage = () => window.print()
</script>

<style scoped>
.invoice-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  box-shadow: 0 0 15px rgba(0,0,0,0.05);
  background: #fff;
}


.invoice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.company-logo img {
  max-width: 150px;
}

.invoice-title h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin: 0;
}


.invoice-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.company-box, .invoice-box {
  border: 1px solid #ddd;
  padding: 1rem;
  width: 48%;
  background: #f9f9f9;
  border-radius: 5px;
}

.client-box {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  background: #f1f1f1;
}


.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.items-table th, .items-table td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}

.items-table th {
  background: #2c3e50;
  color: #fff;
}


.summary-box {
  width: 300px;
  margin-left: auto;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  background: #f9f9f9;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}


@media print {
  button {
    display: none;
  }
  .invoice-container {
    box-shadow: none;
    border: none;
  }
}
</style>
