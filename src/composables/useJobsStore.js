import { reactive } from 'vue'
import API_CONFIG from '@/config/api.js'

const jobsStore = reactive({
  jobs: [],
  loading: false,
  loaded: false,
  error: null
})

export function useJobsStore() {
  const loadJobs = async () => {
    if (jobsStore.loaded && jobsStore.jobs.length > 0) {
      return jobsStore.jobs
    }
  
    jobsStore.loading = true
    jobsStore.error = null
  
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/api/jobs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
  
      if (response.ok) {
        const jobs = await response.json()
        jobsStore.jobs = jobs
        jobsStore.loaded = true
        return jobs
      } else {
        throw new Error(`HTTP ${response.status}`)
      }
    } catch (error) {
      jobsStore.error = error.message
      jobsStore.jobs = []
      return []
    } finally {
      jobsStore.loading = false
    }
  }  

  const preloadJobs = () => {
    // Pré-carregar em background sem bloquear a UI
    setTimeout(() => {
      loadJobs()
    }, 1000)
  }

  return {
    jobsStore,
    loadJobs,
    preloadJobs
  }
}
