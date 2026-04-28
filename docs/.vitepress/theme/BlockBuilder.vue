<script setup>
import { ref } from 'vue'

const COLOR_MAP = [
  { pattern: /notification|alert/i,          color: '#ef4444' },
  { pattern: /summary|order|transaction/i,   color: '#10b981' },
  { pattern: /delivery|status|tracking/i,    color: '#3b82f6' },
  { pattern: /activity|update/i,             color: '#8b5cf6' },
  { pattern: /help|support|learn/i,          color: '#f59e0b' },
  { pattern: /preference|setting/i,          color: '#6b7280' },
]

function getBlockColor(title) {
  for (const { pattern, color } of COLOR_MAP) {
    if (pattern.test(title)) return color
  }
  return '#374151'
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const viewMode = ref('web')
const copied = ref(false)
const blocks = ref([])

const form = ref({
  title: '',
  userQuestion: '',
  jobsToBeDone: '',
  whyItMatters: '',
  businessGoal: ''
})

function resetForm() {
  form.value = { title: '', userQuestion: '', jobsToBeDone: '', whyItMatters: '', businessGoal: '' }
}

function addBlock() {
  if (!form.value.title.trim()) return
  blocks.value.push({
    id: crypto.randomUUID(),
    title: form.value.title.trim(),
    userQuestion: form.value.userQuestion.trim(),
    jobsToBeDone: form.value.jobsToBeDone.trim(),
    whyItMatters: form.value.whyItMatters.trim(),
    businessGoal: form.value.businessGoal.trim(),
    expanded: true
  })
  resetForm()
}

function removeBlock(id) {
  blocks.value = blocks.value.filter(b => b.id !== id)
}

function moveBlock(index, direction) {
  const next = index + direction
  if (next < 0 || next >= blocks.value.length) return
  const arr = [...blocks.value]
  ;[arr[index], arr[next]] = [arr[next], arr[index]]
  blocks.value = arr
}

function toggleExpanded(id) {
  const b = blocks.value.find(b => b.id === id)
  if (b) b.expanded = !b.expanded
}

function clearBlocks() {
  blocks.value = []
}

function loadExample() {
  blocks.value = [
    {
      id: crypto.randomUUID(),
      title: 'Notifications',
      userQuestion: 'Is there anything I need to know about my order?',
      jobsToBeDone: 'Stay on top of anything that needs attention.',
      whyItMatters: 'Missing an update creates anxiety and erodes trust.',
      businessGoal: 'Reduce support contacts by surfacing alerts proactively.',
      expanded: true
    },
    {
      id: crypto.randomUUID(),
      title: 'Order summary',
      userQuestion: 'What did I order and what did I pay?',
      jobsToBeDone: 'Get a quick snapshot of the purchase.',
      whyItMatters: 'They need confirmation before they can move on.',
      businessGoal: 'Reinforce purchase confidence and reduce returns.',
      expanded: true
    },
    {
      id: crypto.randomUUID(),
      title: 'Delivery status',
      userQuestion: 'Where is my stuff?',
      jobsToBeDone: 'Track the order and know when to expect it.',
      whyItMatters: 'Delivery uncertainty is the number-one source of post-purchase anxiety.',
      businessGoal: 'Reduce "where is my order" support contacts.',
      expanded: true
    },
    {
      id: crypto.randomUUID(),
      title: 'Recent activity',
      userQuestion: 'What just changed?',
      jobsToBeDone: 'Understand what happened since they last checked.',
      whyItMatters: 'Keeping people informed reduces support contacts.',
      businessGoal: 'Build trust through transparency.',
      expanded: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Help',
      userQuestion: "Something doesn't look right — what do I do?",
      jobsToBeDone: 'Get answers without contacting support.',
      whyItMatters: 'Easy access to help reduces frustration and builds confidence.',
      businessGoal: 'Deflect support contacts with contextual self-service.',
      expanded: false
    },
    {
      id: crypto.randomUUID(),
      title: 'Preferences',
      userQuestion: 'Can I change my delivery or notification settings?',
      jobsToBeDone: 'Adjust things to work better for them.',
      whyItMatters: 'Giving people control makes the experience feel personal.',
      businessGoal: 'Increase notification opt-in rates.',
      expanded: false
    }
  ]
}

async function copySummary() {
  const text = blocks.value.map((b, i) => [
    `${i + 1}. ${b.title}`,
    `User question: ${b.userQuestion}`,
    `Jobs to be done: ${b.jobsToBeDone}`,
    `Why it matters: ${b.whyItMatters}`,
    `Business goal: ${b.businessGoal}`
  ].join('\n')).join('\n\n')
  await navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

function downloadJson() {
  const data = {
    blocks: blocks.value.map((b, i) => ({
      order: i + 1,
      title: b.title,
      color: getBlockColor(b.title),
      userQuestion: b.userQuestion,
      jobsToBeDone: b.jobsToBeDone,
      whyItMatters: b.whyItMatters,
      businessGoal: b.businessGoal
    }))
  }
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'content-blocks.json'
  a.click()
  URL.revokeObjectURL(url)
}

function exportDoc() {
  if (!blocks.value.length) return
  const text = blocks.value.map((b, i) => [
    `${i + 1}. ${b.title}`,
    '', 'User question', b.userQuestion,
    '', 'Jobs to be done', b.jobsToBeDone,
    '', 'Why it matters', b.whyItMatters,
    '', 'Business goal', b.businessGoal,
    '', '---'
  ].join('\n')).join('\n\n')
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'content-blocks.txt'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="builder-shell">

    <!-- Left panel: form -->
    <div class="builder-panel">
      <div class="panel-toolbar">
        <button class="toolbar-btn toolbar-btn--example" @click="loadExample">
          Try an example
        </button>
        <button
          class="toolbar-btn"
          @click="clearBlocks"
          :disabled="!blocks.length"
        >
          Clear all
        </button>
      </div>

      <div class="builder-form">
        <div class="form-field form-field--name">
          <label for="bb-title" class="field-label">Block name</label>
          <input
            id="bb-title"
            v-model="form.title"
            type="text"
            class="field-input"
            placeholder="e.g. Notifications, Order summary…"
            @keydown.enter="addBlock"
          />
        </div>

        <div class="form-field">
          <label for="bb-question" class="field-label">User question / intent</label>
          <textarea
            id="bb-question"
            v-model="form.userQuestion"
            rows="2"
            class="field-input"
            placeholder="What is the user trying to figure out?"
          />
        </div>

        <div class="form-field">
          <label for="bb-jtbd" class="field-label">Jobs to be done / action</label>
          <textarea
            id="bb-jtbd"
            v-model="form.jobsToBeDone"
            rows="2"
            class="field-input"
            placeholder="What do they need to do or decide?"
          />
        </div>

        <div class="form-field">
          <label for="bb-why" class="field-label">Why it matters / motivation</label>
          <textarea
            id="bb-why"
            v-model="form.whyItMatters"
            rows="2"
            class="field-input"
            placeholder="What's the emotional or practical stake?"
          />
        </div>

        <div class="form-field">
          <label for="bb-goal" class="field-label">Business goal</label>
          <textarea
            id="bb-goal"
            v-model="form.businessGoal"
            rows="2"
            class="field-input"
            placeholder="What does the business need this to do?"
          />
        </div>

        <button
          class="add-btn"
          @click="addBlock"
          :disabled="!form.title.trim()"
        >
          Add to page
        </button>
      </div>

      <div v-if="blocks.length" class="export-row">
        <button class="export-btn" @click="copySummary">Copy</button>
        <button class="export-btn" @click="downloadJson">Download</button>
        <button class="export-btn" @click="exportDoc">Export</button>
        <span v-if="copied" class="copied-note" aria-live="polite">Copied!</span>
      </div>
    </div>

    <!-- Right panel: preview -->
    <div class="preview-panel">
      <div class="preview-top">
        <div class="preview-meta">
          <span class="preview-title">Page preview</span>
          <span class="block-count" aria-live="polite">
            {{ blocks.length }} {{ blocks.length === 1 ? 'block' : 'blocks' }}
          </span>
        </div>
        <div class="view-toggle" role="group" aria-label="Preview width">
          <button
            :class="['toggle-btn', { active: viewMode === 'web' }]"
            :aria-pressed="viewMode === 'web'"
            @click="viewMode = 'web'"
          >Web</button>
          <button
            :class="['toggle-btn', { active: viewMode === 'mobile' }]"
            :aria-pressed="viewMode === 'mobile'"
            @click="viewMode = 'mobile'"
          >Mobile</button>
        </div>
      </div>

      <div :class="['preview-viewport', { 'mobile-viewport': viewMode === 'mobile' }]">
        <div :class="['preview-frame', { 'mobile-frame': viewMode === 'mobile' }]">

          <div v-if="!blocks.length" class="empty-state">
            <p>Add your first block to start building the page.</p>
            <p class="empty-hint">Or click "Try an example" to see it in action.</p>
          </div>

          <div v-else class="block-list" role="list">
            <div
              v-for="(block, index) in blocks"
              :key="block.id"
              class="block-row"
              role="listitem"
              :style="{
                borderLeftColor: getBlockColor(block.title),
                background: hexToRgba(getBlockColor(block.title), 0.1)
              }"
            >
              <div class="block-row-main">
                <div
                  class="block-num"
                  aria-hidden="true"
                  :style="{ background: getBlockColor(block.title) }"
                >{{ index + 1 }}</div>
                <span class="block-name">{{ block.title }}</span>
                <div class="block-actions" role="toolbar" :aria-label="`Actions for ${block.title}`">
                  <button
                    class="action-btn"
                    :disabled="index === 0"
                    :aria-label="`Move ${block.title} up`"
                    @click="moveBlock(index, -1)"
                  >↑</button>
                  <button
                    class="action-btn"
                    :aria-expanded="block.expanded.toString()"
                    :aria-controls="`bd-${block.id}`"
                    @click="toggleExpanded(block.id)"
                  >{{ block.expanded ? 'Hide' : 'Show' }}</button>
                  <button
                    class="action-btn action-btn--remove"
                    :aria-label="`Remove ${block.title}`"
                    @click="removeBlock(block.id)"
                  >Remove</button>
                </div>
              </div>

              <div
                v-if="block.expanded"
                :id="`bd-${block.id}`"
                class="block-detail"
              >
                <div v-if="block.userQuestion" class="block-field">
                  <div class="block-field-label">User question</div>
                  <div class="block-field-value">{{ block.userQuestion }}</div>
                </div>
                <div v-if="block.jobsToBeDone" class="block-field">
                  <div class="block-field-label">Jobs to be done</div>
                  <div class="block-field-value">{{ block.jobsToBeDone }}</div>
                </div>
                <div v-if="block.whyItMatters" class="block-field">
                  <div class="block-field-label">Why it matters</div>
                  <div class="block-field-value">{{ block.whyItMatters }}</div>
                </div>
                <div v-if="block.businessGoal" class="block-field">
                  <div class="block-field-label">Business goal</div>
                  <div class="block-field-value">{{ block.businessGoal }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Layout */
.builder-shell {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 20px;
  margin: 28px 0;
  align-items: start;
}

/* Left panel */
.builder-panel {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Toolbar */
.panel-toolbar {
  display: flex;
  gap: 8px;
}

.toolbar-btn {
  flex: 1;
  padding: 9px 12px;
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  font-family: inherit;
}

.toolbar-btn:hover:not(:disabled) {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.toolbar-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.toolbar-btn--example {
  background: #eff6ff;
  border-color: #bfdbfe;
  color: #1d4ed8;
}

.toolbar-btn--example:hover {
  background: #dbeafe !important;
  border-color: #93c5fd !important;
}

/* Form */
.builder-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.field-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.form-field--name .field-label {
  font-size: 0.95rem;
}

.form-field--name .field-input {
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 14px;
}

.field-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: inherit;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  box-sizing: border-box;
  resize: vertical;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.field-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.add-btn {
  width: 100%;
  padding: 11px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
  margin-top: 4px;
}

.add-btn:hover:not(:disabled) {
  background: #000;
}

.add-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* Export row */
.export-row {
  display: flex;
  gap: 6px;
  align-items: center;
  padding-top: 4px;
  border-top: 1px solid var(--vp-c-divider);
}

.export-btn {
  padding: 6px 12px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
}

.export-btn:hover {
  background: var(--vp-c-bg-soft);
}

.copied-note {
  font-size: 0.82rem;
  font-weight: 600;
  color: #059669;
  margin-left: 4px;
}

/* Right panel */
.preview-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  border: none;
  background: transparent;
}

.preview-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 2px;
}

.preview-meta {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.preview-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.block-count {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

/* Web/mobile toggle */
.view-toggle {
  display: flex;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.toggle-btn {
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}

.toggle-btn:not(:last-child) {
  border-right: 1px solid var(--vp-c-divider);
}

.toggle-btn.active {
  background: #111;
  color: #fff;
}

/* Preview viewport and frames */
.preview-viewport {
  width: 100%;
}

.mobile-viewport {
  display: flex;
  justify-content: center;
}

.preview-frame {
  width: 100%;
  padding: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  min-height: 420px;
  overflow: hidden;
}

.mobile-frame {
  max-width: 320px;
  border-radius: 30px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 0 0 5px var(--vp-c-bg-soft), 0 0 0 6px var(--vp-c-divider), 0 8px 24px rgba(0,0,0,0.1);
}

/* Empty state */
.empty-state {
  padding: 48px 24px;
  text-align: center;
  color: var(--vp-c-text-3);
}

.empty-state p {
  margin: 0 0 6px;
  font-size: 0.95rem;
}

.empty-hint {
  font-size: 0.85rem !important;
  color: var(--vp-c-text-3) !important;
}

/* Block list */
.block-list {
  display: flex;
  flex-direction: column;
}

/* Individual block row */
.block-row {
  border-left: 4px solid transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.block-row:last-child {
  border-bottom: none;
}

.block-row-main {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
}

/* Numbered circle */
.block-num {
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.block-name {
  flex: 1;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.block-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.action-btn {
  padding: 3px 9px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.12s;
  white-space: nowrap;
}

.action-btn:hover:not(:disabled) {
  background: var(--vp-c-bg);
  border-color: rgba(0, 0, 0, 0.2);
}

.action-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.action-btn--remove {
  color: #dc2626;
}

/* Block detail */
.block-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;
  padding: 12px 14px 14px 52px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.block-field-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--vp-c-text-2);
  margin-bottom: 3px;
}

.block-field-value {
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 900px) {
  .builder-shell {
    grid-template-columns: 1fr;
  }

  .mobile-frame {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: none;
  }

  .block-detail {
    grid-template-columns: 1fr;
    padding-left: 14px;
  }
}

@media (max-width: 600px) {
  .block-actions {
    flex-wrap: wrap;
  }
}
</style>
