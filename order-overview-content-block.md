# Order overview — content blocks

## About Haven

Haven is a faux e-commerce store created as a reference example for this framework.
It's not a real client — it's a stand-in that makes the thinking concrete and easy to follow.

The scenario is simple: a customer has just placed an order and lands on their order
overview page. What do they need? What are they thinking? What does the page need to do?

These blocks answer those questions before a single pixel gets designed.

---

## How to read the color coding

Each block is color-coded by what job it does for the user — not by where it lives on the page.

- 🔴 **Red — Alerts**: Something needs attention right now
- 🟢 **Green — Transaction**: Money, purchases, what they paid
- 🔵 **Blue — Progress**: Where things stand, what's coming next
- 🟣 **Purple — Activity**: What changed, what happened
- 🟡 **Yellow — Education**: Help them understand before they act
- ⚫ **Gray — Control**: Settings, preferences, personalization

The same color system works across any industry. Swap the content, keep the logic.

---

<div style="margin-top:32px; display:grid; gap:16px;">

<!-- Notifications -->
<div style="background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
  <div style="background:#ef4444; padding:14px 20px;">
    <strong style="color:#fff; font-size:1rem; letter-spacing:-0.01em;">Notifications</strong>
  </div>
  <div style="padding:20px; display:grid; gap:14px;">
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">What the customer is thinking</div>
      <div style="color:#374151; font-style:italic;">"Is there anything I need to know about my order?"</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Job to be done</div>
      <div style="color:#374151;">Stay on top of anything that needs their attention</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Why it matters</div>
      <div style="color:#374151;">Missing an update creates anxiety and erodes trust</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:8px;">What we show</div>
      <ul style="margin:0; padding-left:20px; color:#374151; line-height:1.8;">
        <li>Shipping alerts</li>
        <li>Delivery updates</li>
        <li>Action items</li>
      </ul>
    </div>
  </div>
</div>

<!-- Order Summary -->
<div style="background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
  <div style="background:#10b981; padding:14px 20px;">
    <strong style="color:#fff; font-size:1rem; letter-spacing:-0.01em;">Order Summary</strong>
  </div>
  <div style="padding:20px; display:grid; gap:14px;">
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">What the customer is thinking</div>
      <div style="color:#374151; font-style:italic;">"What did I order and what did I pay?"</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Job to be done</div>
      <div style="color:#374151;">Get a quick snapshot of their purchase</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Why it matters</div>
      <div style="color:#374151;">They need confirmation before they can move on</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:8px;">What we show</div>
      <ul style="margin:0; padding-left:20px; color:#374151; line-height:1.8;">
        <li>Items ordered</li>
        <li>Total paid</li>
        <li>Payment method</li>
      </ul>
    </div>
  </div>
</div>

<!-- Delivery Status -->
<div style="background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
  <div style="background:#3b82f6; padding:14px 20px;">
    <strong style="color:#fff; font-size:1rem; letter-spacing:-0.01em;">Delivery Status</strong>
  </div>
  <div style="padding:20px; display:grid; gap:14px;">
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">What the customer is thinking</div>
      <div style="color:#374151; font-style:italic;">"Where is my stuff?"</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Job to be done</div>
      <div style="color:#374151;">Track their order and know when to expect it</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Why it matters</div>
      <div style="color:#374151;">Uncertainty about delivery is the number one source of post-purchase anxiety</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:8px;">What we show</div>
      <ul style="margin:0; padding-left:20px; color:#374151; line-height:1.8;">
        <li>Current status</li>
        <li>Estimated arrival</li>
        <li>Tracking timeline</li>
      </ul>
    </div>
  </div>
</div>

<!-- Recent Activity -->
<div style="background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
  <div style="background:#8b5cf6; padding:14px 20px;">
    <strong style="color:#fff; font-size:1rem; letter-spacing:-0.01em;">Recent Activity</strong>
  </div>
  <div style="padding:20px; display:grid; gap:14px;">
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">What the customer is thinking</div>
      <div style="color:#374151; font-style:italic;">"What just changed?"</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Job to be done</div>
      <div style="color:#374151;">Understand what's happened since they last checked</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Why it matters</div>
      <div style="color:#374151;">Keeping people informed reduces support contacts</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:8px;">What we show</div>
      <ul style="margin:0; padding-left:20px; color:#374151; line-height:1.8;">
        <li>Status updates</li>
        <li>Shipping events</li>
        <li>Any changes to the order</li>
      </ul>
    </div>
  </div>
</div>

<!-- Help -->
<div style="background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
  <div style="background:#f59e0b; padding:14px 20px;">
    <strong style="color:#fff; font-size:1rem; letter-spacing:-0.01em;">Help</strong>
  </div>
  <div style="padding:20px; display:grid; gap:14px;">
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">What the customer is thinking</div>
      <div style="color:#374151; font-style:italic;">"Something doesn't look right — what do I do?"</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Job to be done</div>
      <div style="color:#374151;">Get answers without having to contact support</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Why it matters</div>
      <div style="color:#374151;">Easy access to help reduces frustration and builds confidence</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:8px;">What we show</div>
      <ul style="margin:0; padding-left:20px; color:#374151; line-height:1.8;">
        <li>FAQs</li>
        <li>Return and exchange info</li>
        <li>Contact options</li>
      </ul>
    </div>
  </div>
</div>

<!-- Preferences -->
<div style="background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
  <div style="background:#6b7280; padding:14px 20px;">
    <strong style="color:#fff; font-size:1rem; letter-spacing:-0.01em;">Preferences</strong>
  </div>
  <div style="padding:20px; display:grid; gap:14px;">
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">What the customer is thinking</div>
      <div style="color:#374151; font-style:italic;">"Can I change my delivery or notification settings?"</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Job to be done</div>
      <div style="color:#374151;">Adjust things to work better for them</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:5px;">Why it matters</div>
      <div style="color:#374151;">Giving people control makes the experience feel personal</div>
    </div>
    <div>
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:#9ca3af; margin-bottom:8px;">What we show</div>
      <ul style="margin:0; padding-left:20px; color:#374151; line-height:1.8;">
        <li>Notification preferences</li>
        <li>Saved addresses</li>
        <li>Communication settings</li>
      </ul>
    </div>
  </div>
</div>

</div>
