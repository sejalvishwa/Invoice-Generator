<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {

    components:{
        AppNavbar,
        AppFooter,
    },

  name: 'CreateInvoice',
  data() {
    return {
      invoice: {
        id: Date.now(),
        invoiceNumber: `INV-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        dueDate: '',
        company: {
          name: '',
          email: '',
          phone: '',
          address: ''
        },
        client: {
          name: '',
          email: '',
          address: ''
        },
        items: [
          { description: '', quantity: 1, rate: 0 }
        ],
        taxRate: 10,
        status: 'pending'
      }
    }
  },
  computed: {
    subtotal() {
      return this.invoice.items.reduce((sum, item) => {
        const quantity = Number(item.quantity) || 0
        const rate = Number(item.rate) || 0
        return sum + (quantity * rate)
      }, 0)
    },
    tax() {
      const taxRate = Number(this.invoice.taxRate) || 0
      return this.subtotal * (taxRate / 100)
    },
    total() {
      return this.subtotal + this.tax
    }
  },
  methods: {
    getItemTotal(item) {
      const quantity = Number(item.quantity) || 0
      const rate = Number(item.rate) || 0
      return (quantity * rate).toFixed(2)
    },
    addItem() {
      this.invoice.items.push({ description: '', quantity: 1, rate: 0 })
    },
    removeItem(index) {
      if (this.invoice.items.length > 1) {
        this.invoice.items.splice(index, 1)
      }
    },
    saveInvoice() {
      const invoices = JSON.parse(localStorage.getItem('invoices') || '[]')
      invoices.push({
        ...this.invoice,
        subtotal: this.subtotal,
        tax: this.tax,
        total: this.total
      })
      localStorage.setItem('invoices', JSON.stringify(invoices))
      this.$router.push('/history')
    }
  }
}
</script>

<template>
    <AppNavbar/>
  <div class="invoice-container">
    <div class="invoice-card">
      <h1 class="page-title">Create New Invoice</h1>
      
      <form @submit.prevent="saveInvoice" class="invoice-form">
        <!-- Company Information -->
        <div class="form-section">
          <h2 class="section-title">Company Information</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Company Name</label>
              <input 
                v-model="invoice.company.name" 
                type="text" 
                required
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input 
                v-model="invoice.company.email" 
                type="email" 
                required
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Phone</label>
              <input 
                v-model="invoice.company.phone" 
                type="tel"
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Address</label>
              <input 
                v-model="invoice.company.address" 
                type="text"
                class="form-input"
              >
            </div>
          </div>
        </div>

        <!-- Client Information -->
        <div class="form-section">
          <h2 class="section-title">Client Information</h2>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Client Name</label>
              <input 
                v-model="invoice.client.name" 
                type="text" 
                required
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Client Email</label>
              <input 
                v-model="invoice.client.email" 
                type="email" 
                required
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Client Address</label>
              <input 
                v-model="invoice.client.address" 
                type="text"
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Due Date</label>
              <input 
                v-model="invoice.dueDate" 
                type="date" 
                required
                class="form-input"
              >
            </div>
          </div>
        </div>

        <!-- Invoice Items -->
        <div class="form-section">
          <div class="items-header">
            <h2 class="section-title">Invoice Items</h2>
            <button 
              type="button" 
              @click="addItem"
              class="add-item-btn"
            >
              Add Item
            </button>
          </div>
          
          <div class="items-list">
            <div 
              v-for="(item, index) in invoice.items" 
              :key="index"
              class="item-row"
            >
              <div class="form-group">
                <label class="form-label">Description</label>
                <input 
                  v-model="item.description" 
                  type="text" 
                  required
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label class="form-label">Quantity</label>
                <input 
                  v-model.number="item.quantity" 
                  type="number" 
                  min="1" 
                  required
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label class="form-label">Rate</label>
                <input 
                  v-model.number="item.rate" 
                  type="number" 
                  step="0.01" 
                  min="0" 
                  required
                  class="form-input"
                >
              </div>
              <div class="form-group">
                <label class="form-label">Total</label>
                <input 
                  :value="getItemTotal(item)" 
                  type="text" 
                  readonly
                  class="form-input"
                >
              </div>
              <div class="item-actions">
                <button 
                  type="button" 
                  @click="removeItem(index)"
                  class="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Invoice Summary -->
        <div class="form-section">
          <h2 class="section-title">Invoice Summary</h2>
          <div class="summary-section">
            <div class="summary-row">
              <span class="summary-label">Subtotal:</span>
              <span class="summary-value">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Tax ({{ invoice.taxRate }}%):</span>
              <span class="summary-value">${{ tax.toFixed(2) }}</span>
            </div>
            <div class="summary-row summary-total">
              <span>Total:</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
          <div class="tax-input-group">
            <label class="form-label">Tax Rate (%)</label>
            <input 
              v-model.number="invoice.taxRate" 
              type="number" 
              step="0.01" 
              min="0" 
              max="100"
              class="form-input tax-input"
            >
          </div>
        </div>

        <!-- Submit Button -->
        <div class="form-actions">
          <router-link 
            to="/history" 
            class="cancel-btn"
          >
            Cancel
          </router-link>
          <button 
            type="submit"
            class="submit-btn"
          >
            Save Invoice
          </button>
        </div>
      </form>
    </div>
  </div>
  <AppFooter/>
</template>

<style scoped>

@import '../styles/CreateInvoice.css';

</style>