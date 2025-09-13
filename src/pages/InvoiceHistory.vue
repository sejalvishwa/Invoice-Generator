<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { ref, computed, onMounted } from 'vue'

const invoices = ref([])
const searchTerm = ref('')
const statusFilter = ref('')

const filteredInvoices = computed(() => {
  return invoices.value.filter(invoice => {
    const matchesSearch =
      invoice.client.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.value.toLowerCase())

    const matchesStatus = statusFilter.value === '' || invoice.status === statusFilter.value

    return matchesSearch && matchesStatus
  })
})

const totalRevenue = computed(() =>
  invoices.value.reduce((sum, invoice) => sum + invoice.total, 0)
)

const pendingAmount = computed(() =>
  invoices.value
    .filter(invoice => invoice.status === 'pending')
    .reduce((sum, invoice) => sum + invoice.total, 0)
)

const getStatusClass = (status) => {
  switch (status) {
    case 'paid':
      return 'status-paid'
    case 'pending':
      return 'status-pending'
    case 'overdue':
      return 'status-overdue'
    default:
      return 'status-default'
  }
}

const formatDate = (dateString) => new Date(dateString).toLocaleDateString()

const toggleStatus = (invoice) => {
  invoice.status = invoice.status === 'paid' ? 'pending' : 'paid'
  localStorage.setItem('invoices', JSON.stringify(invoices.value))
}

const deleteInvoice = (id) => {
  if (confirm('Are you sure you want to delete this invoice?')) {
    invoices.value = invoices.value.filter(invoice => invoice.id !== id)
    localStorage.setItem('invoices', JSON.stringify(invoices.value))
  }
}

onMounted(() => {
  invoices.value = JSON.parse(localStorage.getItem('invoices') || '[]')
})
</script>

<template>
  <AppNavbar />

  <div class="history-container">
    <div class="history-header">
      <h1 class="history-title">Invoice History</h1>
      <router-link to="/create" class="btn-create">+ Create New Invoice</router-link>
    </div>

    <div class="search-filters">
      <input v-model="searchTerm" type="text" placeholder="Search by client or invoice number" />
      <select v-model="statusFilter">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>

    <div v-if="filteredInvoices.length === 0" class="empty-state">
      <p>No invoices found. Try creating one.</p>
    </div>

    <div class="invoices-list">
      <div v-for="invoice in filteredInvoices" :key="invoice.id" class="invoice-card">
        <div class="invoice-top">
          <div>
            <h3>{{ invoice.invoiceNumber }}</h3>
            <span :class="['status-badge', getStatusClass(invoice.status)]">{{ invoice.status }}</span>
          </div>
          <p class="invoice-total">${{ invoice.total.toFixed(2) }}</p>
        </div>

        <div class="invoice-info">
          <p><strong>Client:</strong> {{ invoice.client.name }}</p>
          <p><strong>Created:</strong> {{ formatDate(invoice.date) }}</p>
          <p><strong>Due:</strong> {{ formatDate(invoice.dueDate) }}</p>
        </div>

        <div class="invoice-actions">
          <router-link :to="`/edit/${invoice.id}`" class="btn-edit">Edit</router-link>
          <button @click="toggleStatus(invoice)" class="btn-paid">
            {{ invoice.status === 'paid' ? 'Unpaid' : 'Mark Paid' }}
          </button>
          <button @click="deleteInvoice(invoice.id)" class="btn-delete">Delete</button>
          <a :href="`/download/${invoice.id}`" target="_blank" class="btn-download">Download</a>
        </div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div>Total Invoices</div>
        <div>{{ invoices.length }}</div>
      </div>
      <div class="stat-card">
        <div>Total Revenue</div>
        <div>${{ totalRevenue.toFixed(2) }}</div>
      </div>
      <div class="stat-card">
        <div>Pending Amount</div>
        <div>${{ pendingAmount.toFixed(2) }}</div>
      </div>
    </div>
  </div>

  <AppFooter />
</template>

<style scoped>
.history-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.history-title {
  font-size: 2rem;
  font-weight: bold;
}

.btn-create {
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
}

.search-filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-filters input,
.search-filters select {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-width: 250px;
}

.empty-state {
  text-align: center;
  font-style: italic;
  color: #666;
}

.invoices-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.invoice-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
}

.invoice-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: bold;
}

.status-paid {
  background-color: #dcfce7;
  color: #166534;
}

.status-pending {
  background-color: #fef3c7;
  color: #92400e;
}

.status-overdue {
  background-color: #fee2e2;
  color: #991b1b;
}

.invoice-info {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.invoice-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
}

.invoice-actions .btn-edit,
.invoice-actions .btn-paid,
.invoice-actions .btn-delete,
.invoice-actions .btn-download {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  border-radius: 4px;
  min-width: 80px;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.btn-edit {
  background-color: #6c757d;
}

.btn-paid {
  background-color: #28a745;
}

.btn-delete {
  background-color: #dc3545;
}

.btn-download {
  background-color: #10b981;
}

.btn-download:hover {
  background-color: #059669;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.stat-card {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
}

.stat-card div {
  font-size: 1.25rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .search-filters {
    flex-direction: column;
    align-items: stretch;
  }

  .invoice-actions .btn-edit,
  .invoice-actions .btn-paid,
  .invoice-actions .btn-delete,
  .invoice-actions .btn-download {
    /* flex: 1 1 calc(50% - 0.5rem); */
    text-align: center;
  }
}

@media (max-width: 480px) {
  .invoice-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .invoice-actions .btn-edit,
  .invoice-actions .btn-paid,
  .invoice-actions .btn-delete,
  .invoice-actions .btn-download {
    width: 50;
    min-width: unset;
  }
}
</style>
