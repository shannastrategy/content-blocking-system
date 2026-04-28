# Haven — Order overview

<p class="page-subline">A real example of content blocking in action. Here's how we broke down the order overview page — block by block — before a single component was picked.</p>

<hr class="fw-divider" />

## The page and its purpose

When a Haven customer places an order, they land on a page with a simple job: **reassure them, keep them informed, and stay out of the way.**

They're not browsing. They're checking. They want to know their order went through, when it's arriving, and whether anything needs their attention. If the page can't answer those questions quickly, they'll either panic or contact support.

<div class="cs-problem">
<strong>What happens when teams skip this step:</strong> The page gets designed around what's easy to build — not what the customer needs to know. Important information gets buried. Redundant content fills space. States like delays or partial shipments get handled inconsistently because no one planned for them.
</div>

<hr class="fw-divider" />

## How we broke it down

Each block is color-coded by the job it does — not by where it lives on the page.

<div class="haven-legend">
<div class="legend-item"><span class="legend-dot" style="background:#ef4444;"></span><span>Red — Alert: something needs attention now</span></div>
<div class="legend-item"><span class="legend-dot" style="background:#10b981;"></span><span>Green — Transaction: orders, purchases, what they paid</span></div>
<div class="legend-item"><span class="legend-dot" style="background:#3b82f6;"></span><span>Blue — Progress: where things stand, what's coming</span></div>
<div class="legend-item"><span class="legend-dot" style="background:#8b5cf6;"></span><span>Purple — Activity: what changed, what happened</span></div>
<div class="legend-item"><span class="legend-dot" style="background:#f59e0b;"></span><span>Yellow — Education: help them understand before they act</span></div>
<div class="legend-item"><span class="legend-dot" style="background:#6b7280;"></span><span>Gray — Control: settings, preferences, personalization</span></div>
</div>

<div class="cs-blocks">
<div class="cs-card">
<div class="cs-card-header" style="background:#ef4444; color:#fff;">Notifications</div>
<div class="cs-card-body">
<div class="cs-field"><div class="cs-field-label">What the customer is thinking</div><div class="cs-field-value cs-italic">"Is there anything I need to know about my order?"</div></div>
<div class="cs-field"><div class="cs-field-label">Job to be done</div><div class="cs-field-value">Stay on top of anything that needs attention</div></div>
<div class="cs-field"><div class="cs-field-label">Why it matters</div><div class="cs-field-value">Missing an update creates anxiety and erodes trust</div></div>
<div class="cs-field"><div class="cs-field-label">What we show</div><ul class="cs-list"><li>Shipping alerts</li><li>Delivery updates</li><li>Action items</li></ul></div>
</div>
</div>
<div class="cs-card">
<div class="cs-card-header" style="background:#10b981; color:#1a1a1a;">Order summary</div>
<div class="cs-card-body">
<div class="cs-field"><div class="cs-field-label">What the customer is thinking</div><div class="cs-field-value cs-italic">"What did I order and what did I pay?"</div></div>
<div class="cs-field"><div class="cs-field-label">Job to be done</div><div class="cs-field-value">Get a quick snapshot of their purchase</div></div>
<div class="cs-field"><div class="cs-field-label">Why it matters</div><div class="cs-field-value">They need confirmation before they can move on</div></div>
<div class="cs-field"><div class="cs-field-label">What we show</div><ul class="cs-list"><li>Items ordered</li><li>Total paid</li><li>Payment method</li></ul></div>
</div>
</div>
<div class="cs-card">
<div class="cs-card-header" style="background:#3b82f6; color:#fff;">Delivery status</div>
<div class="cs-card-body">
<div class="cs-field"><div class="cs-field-label">What the customer is thinking</div><div class="cs-field-value cs-italic">"Where is my stuff?"</div></div>
<div class="cs-field"><div class="cs-field-label">Job to be done</div><div class="cs-field-value">Track the order and know when to expect it</div></div>
<div class="cs-field"><div class="cs-field-label">Why it matters</div><div class="cs-field-value">Delivery uncertainty is the number-one source of post-purchase anxiety</div></div>
<div class="cs-field"><div class="cs-field-label">What we show</div><ul class="cs-list"><li>Current status</li><li>Estimated arrival</li><li>Tracking timeline</li></ul></div>
</div>
</div>
<div class="cs-card">
<div class="cs-card-header" style="background:#8b5cf6; color:#fff;">Recent activity</div>
<div class="cs-card-body">
<div class="cs-field"><div class="cs-field-label">What the customer is thinking</div><div class="cs-field-value cs-italic">"What just changed?"</div></div>
<div class="cs-field"><div class="cs-field-label">Job to be done</div><div class="cs-field-value">Understand what happened since they last checked</div></div>
<div class="cs-field"><div class="cs-field-label">Why it matters</div><div class="cs-field-value">Keeping people informed reduces support contacts</div></div>
<div class="cs-field"><div class="cs-field-label">What we show</div><ul class="cs-list"><li>Status updates</li><li>Shipping events</li><li>Any changes to the order</li></ul></div>
</div>
</div>
<div class="cs-card">
<div class="cs-card-header" style="background:#f59e0b; color:#1a1a1a;">Help</div>
<div class="cs-card-body">
<div class="cs-field"><div class="cs-field-label">What the customer is thinking</div><div class="cs-field-value cs-italic">"Something doesn't look right — what do I do?"</div></div>
<div class="cs-field"><div class="cs-field-label">Job to be done</div><div class="cs-field-value">Get answers without contacting support</div></div>
<div class="cs-field"><div class="cs-field-label">Why it matters</div><div class="cs-field-value">Easy access to help reduces frustration and builds confidence</div></div>
<div class="cs-field"><div class="cs-field-label">What we show</div><ul class="cs-list"><li>FAQs</li><li>Return and exchange info</li><li>Contact options</li></ul></div>
</div>
</div>
<div class="cs-card">
<div class="cs-card-header" style="background:#6b7280; color:#fff;">Preferences</div>
<div class="cs-card-body">
<div class="cs-field"><div class="cs-field-label">What the customer is thinking</div><div class="cs-field-value cs-italic">"Can I change my delivery or notification settings?"</div></div>
<div class="cs-field"><div class="cs-field-label">Job to be done</div><div class="cs-field-value">Adjust things to work better for them</div></div>
<div class="cs-field"><div class="cs-field-label">Why it matters</div><div class="cs-field-value">Giving people control makes the experience feel personal</div></div>
<div class="cs-field"><div class="cs-field-label">What we show</div><ul class="cs-list"><li>Notification preferences</li><li>Saved addresses</li><li>Communication settings</li></ul></div>
</div>
</div>
</div>

<hr class="fw-divider" />

## How it fits together

The blocks stack in order of urgency — most time-sensitive at the top, so a customer with an action item can't miss it, and one who just wants to track their package can skip straight there.

<div class="cs-stack">
<div class="cs-stack-block" style="border-left-color:#ef4444; background:#fef2f2;"><span class="cs-stack-num">1</span><span class="cs-stack-name">Notifications</span><span class="cs-stack-tag" style="color:#ef4444;">Alert</span></div>
<div class="cs-stack-block" style="border-left-color:#10b981; background:#f0fdf4;"><span class="cs-stack-num">2</span><span class="cs-stack-name">Order summary</span><span class="cs-stack-tag" style="color:#059669;">Transaction</span></div>
<div class="cs-stack-block" style="border-left-color:#3b82f6; background:#eff6ff;"><span class="cs-stack-num">3</span><span class="cs-stack-name">Delivery status</span><span class="cs-stack-tag" style="color:#3b82f6;">Progress</span></div>
<div class="cs-stack-block" style="border-left-color:#8b5cf6; background:#f5f3ff;"><span class="cs-stack-num">4</span><span class="cs-stack-name">Recent activity</span><span class="cs-stack-tag" style="color:#8b5cf6;">Activity</span></div>
<div class="cs-stack-block" style="border-left-color:#d97706; background:#fffbeb;"><span class="cs-stack-num">5</span><span class="cs-stack-name">Help</span><span class="cs-stack-tag" style="color:#d97706;">Education</span></div>
<div class="cs-stack-block" style="border-left-color:#6b7280; background:#f9fafb;"><span class="cs-stack-num">6</span><span class="cs-stack-name">Preferences</span><span class="cs-stack-tag" style="color:#6b7280;">Control</span></div>
</div>

<hr class="fw-divider" />

## What this makes possible

<div class="cs-outcomes">
<div class="cs-outcome">
<strong>Faster design decisions</strong>
<p>Structure is settled before anyone opens a design tool. No more "should this be here?" in the middle of a review.</p>
</div>
<div class="cs-outcome">
<strong>Cleaner handoffs</strong>
<p>Content, design, and development work from the same document — less translation, fewer surprises in build.</p>
</div>
<div class="cs-outcome">
<strong>Edge cases planned for</strong>
<p>States like delays, partial shipments, and cancellations are accounted for at the block level — not retrofitted after design.</p>
</div>
<div class="cs-outcome">
<strong>Consistent content across states</strong>
<p>The block structure travels across order states. Swap the content, keep the logic.</p>
</div>
</div>

<hr class="fw-divider" />

<div class="cs-cta">

## Try it yourself

Use the page assembler to build your own content blocks, or read the framework to understand the thinking behind it.

<div class="cs-cta-actions">
<a href="/examples/page-assembler" class="btn-hero-primary">Open the page assembler →</a>
<a href="/framework" class="btn-hero-secondary">Read the framework →</a>
</div>

</div>
