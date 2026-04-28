# The framework

<p class="page-subline">Figure out what the content needs to do — before anyone argues about wording or layout.</p>

<div class="framework-callout">
  <strong>New here?</strong> Try Build a page — it walks you through it.
  <a href="/examples/page-assembler" class="callout-link">Build a page →</a>
</div>

<hr class="fw-divider" />

## Core principles

<div class="principles-grid">
<div class="principle-card" style="border-top: 3px solid #ef4444;">
<strong>The user question is everything</strong>
<p>The most important thing on any page is what the user came to figure out.</p>
</div>
<div class="principle-card" style="border-top: 3px solid #10b981;">
<strong>The content goal drives decisions</strong>
<p>Once the goal is clear, every other decision follows from it.</p>
</div>
<div class="principle-card" style="border-top: 3px solid #3b82f6;">
<strong>Strategy shapes the words</strong>
<p>What to say gets decided independently from how to say it.</p>
</div>
<div class="principle-card" style="border-top: 3px solid #8b5cf6;">
<strong>Structure reflects meaning</strong>
<p>Information hierarchy is intentional, not inherited from a template.</p>
</div>
<div class="principle-card" style="border-top: 3px solid #f59e0b;">
<strong>Edge cases aren't optional</strong>
<p>The happy path is never the full story.</p>
</div>
<div class="principle-card" style="border-top: 3px solid #6b7280;">
<strong>Works across every discipline</strong>
<p>Content, design, product, and research should all find it useful.</p>
</div>
</div>

<hr class="fw-divider" />

## How the thinking flows

<div class="diagram-container">

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '14px'}}}%%
flowchart LR
  A([User question]) --> B[Content goal] --> C[Message hierarchy] --> D([Components + layout])
  style A fill:#d9ecff,stroke:#3b82f6,color:#1e3a5f
  style D fill:#d9ecff,stroke:#3b82f6,color:#1e3a5f
  style B fill:#f9fafb,stroke:#d1d5db,color:#111111
  style C fill:#f9fafb,stroke:#d1d5db,color:#111111
```

</div>

<hr class="fw-divider" />

## How a project flows

<div class="diagram-container">

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '14px'}}}%%
flowchart LR
  A([Kickoff]) --> B[Quick Block] --> C[Review] --> D[Full Block] --> E[Design + content] --> F[Build] --> G([Iterate])
  style A fill:#98e38f,stroke:#16a34a,color:#14532d
  style G fill:#98e38f,stroke:#16a34a,color:#14532d
  style B fill:#f9fafb,stroke:#d1d5db,color:#111111
  style C fill:#f9fafb,stroke:#d1d5db,color:#111111
  style D fill:#f9fafb,stroke:#d1d5db,color:#111111
  style E fill:#f9fafb,stroke:#d1d5db,color:#111111
  style F fill:#f9fafb,stroke:#d1d5db,color:#111111
```

</div>

<hr class="fw-divider" />

## The model

<div class="model-grid">
<details class="model-card">
<summary>
<div class="model-head">
<span class="model-label">User need</span>
<span class="model-desc">What they're asking</span>
</div>
</summary>
<div class="model-body">
<p class="model-section-label">Fields</p>
<ul class="model-fields">
<li>User question</li>
<li>User intention</li>
<li>Problem statement</li>
<li>Jobs to be done</li>
<li>Why it matters</li>
<li>Thinking / feeling</li>
</ul>
<p class="model-section-label model-ask-label">Ask yourself</p>
<ul class="model-questions">
<li>Is the user question clear enough that someone new to the project could understand it?</li>
<li>Is the problem statement grounded in both user and business reality?</li>
<li>Are the jobs to be done specific enough to act on?</li>
</ul>
</div>
</details>
<details class="model-card">
<summary>
<div class="model-head">
<span class="model-label">Strategy</span>
<span class="model-desc">What it needs to do</span>
</div>
</summary>
<div class="model-body">
<p class="model-section-label">Fields</p>
<ul class="model-fields">
<li>Content goal</li>
<li>Experience goal</li>
<li>Business goal</li>
</ul>
<p class="model-section-label model-ask-label">Ask yourself</p>
<ul class="model-questions">
<li>Is the content goal clear enough to explain in one sentence?</li>
<li>Do the content, experience, and business goals each say something different?</li>
</ul>
</div>
</details>
<details class="model-card">
<summary>
<div class="model-head">
<span class="model-label">Messaging</span>
<span class="model-desc">What to say</span>
</div>
</summary>
<div class="model-body">
<p class="model-section-label">Fields</p>
<ul class="model-fields">
<li>Key messages</li>
<li>Message hierarchy</li>
</ul>
<p class="model-section-label model-ask-label">Ask yourself</p>
<ul class="model-questions">
<li>Are the key messages easy to understand?</li>
<li>Is the hierarchy intentional — or did things just end up in that order?</li>
</ul>
</div>
</details>
<details class="model-card">
<summary>
<div class="model-head">
<span class="model-label">Experience design</span>
<span class="model-desc">How it works</span>
</div>
</summary>
<div class="model-body">
<p class="model-section-label">Fields</p>
<ul class="model-fields">
<li>Required components</li>
<li>States and edge cases</li>
<li>Dependencies</li>
<li>Terminology guidance</li>
</ul>
<p class="model-section-label model-ask-label">Ask yourself</p>
<ul class="model-questions">
<li>Are the components tied back to the strategy?</li>
<li>Are states and edge cases covered?</li>
<li>Are dependencies spelled out?</li>
</ul>
</div>
</details>
<details class="model-card">
<summary>
<div class="model-head">
<span class="model-label">Notes</span>
<span class="model-desc">Risks and open questions</span>
</div>
</summary>
<div class="model-body">
<p class="model-section-label">Fields</p>
<ul class="model-fields">
<li>Risks and constraints</li>
<li>Open questions</li>
<li>Success signals</li>
<li>Metrics</li>
</ul>
<p class="model-section-label model-ask-label">Ask yourself</p>
<ul class="model-questions">
<li>What could go wrong?</li>
<li>What is still unknown?</li>
<li>How will we know this is working?</li>
</ul>
</div>
</details>
<details class="model-card">
<summary>
<div class="model-head">
<span class="model-label">Metadata</span>
<span class="model-desc">How it's tracked</span>
</div>
</summary>
<div class="model-body">
<p class="model-section-label">Fields</p>
<ul class="model-fields">
<li>Name</li>
<li>Surface / page / flow</li>
<li>Journey stage</li>
<li>Audience</li>
<li>Owner</li>
<li>Status</li>
</ul>
<p class="model-section-label model-ask-label">Ask yourself</p>
<ul class="model-questions">
<li>Is this easy to find later?</li>
<li>Is the status current?</li>
</ul>
</div>
</details>
</div>

<hr class="fw-divider" />

## Ways to work

| Approach | Best for |
|---|---|
| **Workshop** | Fast alignment with real-time input |
| **Phased sessions** | Complex work that needs a tight starting loop |
| **Solo draft → share** | One person with strong context, opened for review |

<hr class="fw-divider" />

## Vocabulary

<div class="vocab-grid">
<details class="vocab-card">
<summary>Journey stage</summary>
<div class="vocab-body">Discover · Compare · Decide · Set up · Manage · Review</div>
</details>
<details class="vocab-card">
<summary>Audience</summary>
<div class="vocab-body">New user · Existing user · Supported user · Self-directed user</div>
</details>
<details class="vocab-card">
<summary>Status</summary>
<div class="vocab-body">Draft · In review · Approved · Archived</div>
</details>
<details class="vocab-card">
<summary>Research confidence</summary>
<div class="vocab-body">Low · Medium · High</div>
</details>
<details class="vocab-card">
<summary>Content goal examples</summary>
<div class="vocab-body">Orient the user quickly · Explain a decision clearly · Reduce confusion · Highlight a next step · Build confidence in an action</div>
</details>
<details class="vocab-card">
<summary>Trigger examples</summary>
<div class="vocab-body">New product launch · Redesign of an existing page · Cleaning up inconsistencies across page types</div>
</details>
</div>

<hr class="fw-divider" />

<div class="framework-cta">

## Ready to use it?

Build a page puts the framework into practice — one block at a time.

<a href="/examples/page-assembler" class="btn-hero-primary">Build a page →</a>

</div>
