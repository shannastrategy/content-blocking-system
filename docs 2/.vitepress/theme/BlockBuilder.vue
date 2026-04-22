<script setup>
import { computed, ref } from 'vue'

const colorOptions = [
  { label: 'Green', value: 'green' },
  { label: 'Teal', value: 'teal' },
  { label: 'Blue', value: 'blue' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Gray', value: 'gray' },
  { label: 'Purple', value: 'purple' }
]

const viewMode = ref('web')
const copied = ref(false)

const blocks = ref([])

const form = ref({
  title: '',
  clientQuestion: '',
  jobsToBeDone: '',
  whyItMatters: '',
  businessGoal: '',
  cta: '',
  color: 'blue'
})

function resetForm() {
  form.value = {
    title: '',
    clientQuestion: '',
    jobsToBeDone: '',
    whyItMatters: '',
    businessGoal: '',
    cta: '',
    color: 'blue'
  }
}

function addBlock() {
  if (!form.value.title.trim()) return

  blocks.value.push({
    id: crypto.randomUUID(),
    title: form.value.title.trim(),
    clientQuestion: form.value.clientQuestion.trim(),
    jobsToBeDone: form.value.jobsToBeDone.trim(),
    whyItMatters: form.value.whyItMatters.trim(),
    businessGoal: form.value.businessGoal.trim(),
    cta: form.value.cta.trim() || 'Learn more',
    color: form.value.color,
    expanded: true
  })

  resetForm()
}

function removeBlock(id) {
  blocks.value = blocks.value.filter(block => block.id !== id)
}

function moveBlock(index, direction) {
  const newIndex = index + direction
  if (newIndex < 0 || newIndex >= blocks.value.length) return

  const updated = [...blocks.value]
  const [moved] = updated.splice(index, 1)
  updated.splice(newIndex, 0, moved)
  blocks.value = updated
}

function toggleExpanded(id) {
  blocks.value = blocks.value.map(block =>
    block.id === id ? { ...block, expanded: !block.expanded } : block
  )
}

function clearBlocks() {
  blocks.value = []
}

function loadExample() {
  blocks.value = [
    {
      id: crypto.randomUUID(),
      title: 'Notifications',
      clientQuestion: 'What needs my attention right now?',
      jobsToBeDone: 'Review alerts and decide whether I need to act.',
      whyItMatters: 'Missing something important creates stress and can delay action.',
      businessGoal: 'Increase engagement with high-priority account actions.',
      cta: 'Review now',
      color: 'green',
      expanded: true
    },
    {
      id: crypto.randomUUID(),
      title: 'Account value',
      clientQuestion: 'Where do I stand right now?',
      jobsToBeDone: 'Get a quick read on account value and recent changes.',
      whyItMatters: 'Users need clarity before they make decisions.',
      businessGoal: 'Improve confidence and understanding of account status.',
      cta: 'View details',
      color: 'teal',
      expanded: true
    },
    {
      id: crypto.randomUUID(),
      title: 'Goals',
      clientQuestion: 'Am I on track?',
      jobsToBeDone: 'Understand progress and what to do next.',
      whyItMatters: 'Progress gives people confidence and direction.',
      businessGoal: 'Increase engagement with goal tracking and next steps.',
      cta: 'View goals',
      color: 'blue',
      expanded: true
    }
  ]
}

const exportPayload = computed(() => ({
  pageName: 'Build a page',
  viewMode: viewMode.value,
  blocks: blocks.value.map((block, index) => ({
    order: index + 1,
    title: block.title,
    clientQuestion: block.clientQuestion,
    jobsToBeDone: block.jobsToBeDone,
    whyItMatters: block.whyItMatters,
    businessGoal: block.businessGoal,
    cta: block.cta,
    color: block.color
  }))
}))

function downloadJson() {
  const blob = new Blob([JSON.stringify(exportPayload.value, null, 2)], {
    type: 'application/json'
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'content-block-setup.json'
  link.click()
  URL.revokeObjectURL(url)
}

async function copySummary() {
  const text = [
    `View mode: ${viewMode.value}`,
    '',
    ...blocks.value.map((block, index) => {
      return [
        `${index + 1}. ${block.title}`,
        `Client question: ${block.clientQuestion}`,
        `Jobs to be done: ${block.jobsToBeDone}`,
        `Why it matters: ${block.whyItMatters}`,
        `Business goal: ${block.businessGoal}`,
        `CTA: ${block.cta}`,
        `Color: ${block.color}`
      ].join('\n')
    })
  ].join('\n\n')

  await navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

function exportDoc() {
  if (!blocks.value.length) return

  const doc = [
    'Account overview page',
    '',
    ...blocks.value.map((block, index) => {
      return [
        `${index + 1}. ${block.title}`,
        '',
        'Client question',
        block.clientQuestion || '',
        '',
        'Jobs to be done',
        block.jobsToBeDone || '',
        '',
        'Why it matters',
        block.whyItMatters || '',
        '',
        'Business goal',
        block.businessGoal || '',
        '',
        'CTA',
        block.cta || '',
        '',
        '---',
        ''
      ].join('\n')
    })
  ].join('\n')

  const blob = new Blob([doc], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'content-blocks.txt'
  link.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="builder-shell">
    <div class="builder-panel">
      <h2>Build a page</h2>
      <p class="builder-intro">
        Start with one block. Add what the user needs, why it matters, and what the business is trying to do. Then add it to the page.
      </p>

      <p class="builder-hint">
        Try starting with something simple like Notifications, Account value, or Goals.
      </p>

      <div class="builder-toolbar">
        <button @click="loadExample">Try an example</button>
        <button @click="clearBlocks">Start over</button>
      </div>

      <div class="builder-form">
        <label>
          <span>Block name</span>
          <input v-model="form.title" type="text" placeholder="Goals" />
        </label>

        <label>
          <span>Client question / intent</span>
          <textarea
            v-model="form.clientQuestion"
            rows="2"
            placeholder="What am I working toward, and am I on track?"
          />
        </label>

        <label>
          <span>Jobs to be done / action</span>
          <textarea
            v-model="form.jobsToBeDone"
            rows="2"
            placeholder="Understand progress and decide what to do next."
          />
        </label>

        <label>
          <span>Why it matters / motivation</span>
          <textarea
            v-model="form.whyItMatters"
            rows="2"
            placeholder="Clear progress helps build confidence."
          />
        </label>

        <label>
          <span>Business goal</span>
          <textarea
            v-model="form.businessGoal"
            rows="2"
            placeholder="Increase engagement with goal tracking."
          />
        </label>

        <label>
          <span>CTA</span>
          <input v-model="form.cta" type="text" placeholder="View goals" />
        </label>

        <label>
          <span>Color</span>
          <select v-model="form.color">
            <option
              v-for="option in colorOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </label>

        <button class="primary-btn" @click="addBlock">Add block</button>
      </div>

      <div class="builder-export">
        <button @click="downloadJson">Download setup</button>
        <button @click="copySummary">Copy setup</button>
        <button @click="exportDoc">Export to doc</button>
        <span v-if="copied" class="copied-note">Copied</span>
      </div>
    </div>

    <div class="preview-panel">
      <div class="preview-top">
        <h2>Page preview</h2>

        <div class="view-toggle">
          <button
            :class="{ active: viewMode === 'web' }"
            @click="viewMode = 'web'"
          >
            Web
          </button>
          <button
            :class="{ active: viewMode === 'mobile' }"
            @click="viewMode = 'mobile'"
          >
            Mobile
          </button>
        </div>
      </div>

      <div :class="['preview-frame', viewMode]">
        <p class="builder-hint">
          {{ blocks.length }} block<span v-if="blocks.length !== 1">s</span> on the page
        </p>

        <div v-if="!blocks.length" class="empty-state">
          Add your first block to start building the page.
        </div>

        <div v-else class="assembled-list">
          <div
            v-for="(block, index) in blocks"
            :key="block.id"
            :class="['assembled-card', `color-${block.color}`]"
          >
            <div class="assembled-header">
              <div>
                <div class="assembled-label">{{ block.title }}</div>
                <h3>{{ block.title }}</h3>
              </div>

              <div class="assembled-actions">
                <button @click="moveBlock(index, -1)">↑</button>
                <button @click="moveBlock(index, 1)">↓</button>
                <button @click="toggleExpanded(block.id)">
                  {{ block.expanded ? 'Hide' : 'Show' }}
                </button>
                <button @click="removeBlock(block.id)">Remove</button>
              </div>
            </div>

            <div v-if="block.expanded" class="assembled-body">
              <p><strong>Client question</strong><br />{{ block.clientQuestion }}</p>
              <p><strong>Jobs to be done</strong><br />{{ block.jobsToBeDone }}</p>
              <p><strong>Why it matters</strong><br />{{ block.whyItMatters }}</p>
              <p><strong>Business goal</strong><br />{{ block.businessGoal }}</p>
              <a href="#">{{ block.cta }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.builder-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.builder-panel {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 2rem;
}

.builder-intro {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.builder-toolbar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.builder-toolbar button,
.builder-export button {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.builder-toolbar button:hover,
.builder-export button:hover {
  border-color: #1e40af;
  color: #1e40af;
}

.builder-form {
  margin-bottom: 1.5rem;
}

.builder-form label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.builder-form label span {
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.builder-form input,
.builder-form textarea,
.builder-form select {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-family: inherit;
}

.builder-form input:focus,
.builder-form textarea:focus,
.builder-form select:focus {
  outline: none;
  border-color: #1e40af;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.primary-btn {
  width: 100%;
  padding: 0.75rem;
  background: #1e40af;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.primary-btn:hover {
  background: #1e3a8a;
}

.builder-export {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.builder-export button {
  flex: 1;
  min-width: 120px;
}

.copied-note {
  color: #10b981;
  font-weight: 600;
  padding: 0.5rem 1rem;
}

.preview-panel {
  display: flex;
  flex-direction: column;
}

.preview-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.view-toggle {
  display: flex;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  overflow: hidden;
}

.view-toggle button {
  padding: 0.5rem 1rem;
  border: none;
  background: white;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s;
}

.view-toggle button.active {
  background: #1e40af;
  color: white;
}

.preview-frame {
  flex: 1;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  background: white;
  min-height: 500px;
  overflow: auto;
}

.preview-frame.mobile {
  max-width: 375px;
  margin: 0 auto;
}

.empty-state {
  text-align: center;
  color: #9ca3af;
  padding: 3rem 1rem;
}

.assembled-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.assembled-card {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.assembled-card.color-green {
  border-left-color: #10b981;
  border-left-width: 6px;
}

.assembled-card.color-teal {
  border-left-color: #14b8a6;
  border-left-width: 6px;
}

.assembled-card.color-blue {
  border-left-color: #3b82f6;
  border-left-width: 6px;
}

.assembled-card.color-orange {
  border-left-color: #f97316;
  border-left-width: 6px;
}

.assembled-card.color-yellow {
  border-left-color: #eab308;
  border-left-width: 6px;
}

.assembled-card.color-gray {
  border-left-color: #6b7280;
  border-left-width: 6px;
}

.assembled-card.color-purple {
  border-left-color: #a855f7;
  border-left-width: 6px;
}

.assembled-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.assembled-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.assembled-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.assembled-actions {
  display: flex;
  gap: 0.5rem;
}

.assembled-actions button {
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.assembled-actions button:hover {
  border-color: #1e40af;
  color: #1e40af;
}

.assembled-body {
  padding: 1rem;
}

.assembled-body p {
  margin: 0.75rem 0;
  line-height: 1.6;
}

.assembled-body a {
  display: inline-block;
  margin-top: 0.75rem;
  color: #1e40af;
  text-decoration: none;
  font-weight: 600;
}

.assembled-body a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .builder-shell {
    grid-template-columns: 1fr;
  }

  .preview-frame.mobile {
    max-width: 100%;
  }
}
</style>
