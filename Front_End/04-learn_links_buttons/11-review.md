# Learn Links and Buttons: Review

> **Effective links and buttons clearly communicate clickability, provide feedback during interaction, and help users predict what will happen before they act.**

---

# Lesson Summary

In this lesson, you improved the usability of a survey website by making its interactive elements easier to recognize and understand.

You worked with:

* Link styling
* Link states
* Cursor feedback
* Tooltips
* Skeuomorphic buttons
* Flat-design buttons
* Hover states
* Active states
* Clear interaction signifiers

These concepts help create interfaces that feel intuitive, responsive, and accessible.

---

# Core Principle

Users should not have to guess which elements are interactive.

A well-designed interface helps users answer three questions:

```text
What can I interact with?

What will happen when I interact?

Did the interaction work?
```

Links and buttons should provide enough visual information to answer all three.

---

# Recognizable Links

Links should look different from ordinary text.

Common link signifiers include:

* Distinct color
* Underlining
* Font weight
* Borders
* Background colors
* Hover effects

Example:

```css
a {
    color: #005ea8;
    text-decoration: underline;
}
```

This makes the link visually distinct and communicates that it is clickable.

---

# Do Not Reuse Link Styles

Styles associated with links should not be applied to ordinary text.

Poor example:

```css
a,
.important-text {
    color: blue;
    text-decoration: underline;
}
```

Users may assume that `.important-text` is clickable.

Better:

```css
a {
    color: blue;
    text-decoration: underline;
}

.important-text {
    font-weight: bold;
}
```

Interactive styles should consistently represent interactive elements.

---

# Descriptive Anchor Text

The visible text inside a link should describe its destination or action.

Weak:

```html
<a href="survey.html">Click here</a>
```

Better:

```html
<a href="survey.html">Complete the customer survey</a>
```

Descriptive anchor text improves:

* Usability
* Accessibility
* Search engine optimization
* Page scanning
* Navigation clarity

---

# Link Interaction States

Links can be styled according to their current state.

The four main pseudo-classes are:

```css
:link
:visited
:hover
:active
```

---

## Unvisited Link

```css
a:link {
    color: blue;
}
```

Styles links the user has not previously opened.

---

## Visited Link

```css
a:visited {
    color: purple;
}
```

Helps users recognize destinations they have already visited.

---

## Hovered Link

```css
a:hover {
    color: orange;
}
```

Provides visual feedback while the pointer is over the link.

---

## Active Link

```css
a:active {
    color: red;
}
```

Provides feedback while the link is being pressed.

---

# Correct Link-State Order

The order of link pseudo-class rules matters because of the CSS cascade.

Use:

```text
:link
:visited
:hover
:active
```

A common mnemonic is:

```text
LoVe HAte
```

Complete example:

```css
a:link {
    color: blue;
}

a:visited {
    color: purple;
}

a:hover {
    color: orange;
}

a:active {
    color: red;
}
```

This ensures that immediate interaction states override static link-history states.

---

# Cursor Feedback

The `cursor` property controls the appearance of the mouse pointer.

```css
a,
button {
    cursor: pointer;
}
```

The `pointer` value displays a pointing hand and reinforces clickability.

Browsers usually apply this behavior to links automatically, but it can be useful for custom controls.

---

# Hover States

The `:hover` pseudo-class applies temporary styles when a pointing device is positioned over an element.

```css
button:hover {
    background-color: darkblue;
}
```

Hover states provide immediate visual feedback.

However, they should never be the only signifier of interaction because:

* Mobile devices may not support hover
* Keyboard users rely on focus
* Users should not have to search for clickable elements

---

# Focus States

Keyboard users interact through focus rather than hover.

```css
a:focus-visible,
button:focus-visible {
    outline: 3px solid orange;
    outline-offset: 3px;
}
```

A visible focus indicator helps users track their position while navigating with the keyboard.

---

# Tooltips and the `title` Attribute

The HTML `title` attribute can provide additional advisory text.

```html
<a
    href="https://www.codecademy.com"
    title="Codecademy is an online learning platform"
>
    Codecademy
</a>
```

Most desktop browsers display this text as a tooltip when the user hovers over the element.

---

# Appropriate Tooltip Use

Tooltips can provide extra context for:

* Icons
* Images
* Logos
* Abbreviations
* Compact controls
* Short labels

Example:

```html
<button
    type="button"
    title="Open account settings"
>
    ⚙
</button>
```

---

# Tooltip Limitations

The `title` attribute has accessibility limitations.

Some users may not receive the tooltip because they:

* Use touch devices
* Navigate with a keyboard
* Use a screen reader
* Do not hover long enough
* Use browsers that expose titles inconsistently

Therefore:

* Do not place essential information only in a tooltip.
* Use clear visible labels first.
* Treat `title` as supplementary information.
* Research accessible custom tooltips for production applications.

---

# Buttons

Buttons should clearly indicate that they can be activated.

A button may use:

* Shape
* Border
* Background color
* Padding
* Font weight
* Shadow
* Hover feedback
* Active feedback
* Focus styling

Use the semantic HTML element:

```html
<button type="button">
    Save Changes
</button>
```

---

# Semantic Button Benefits

The `<button>` element provides:

* Keyboard support
* Built-in focus behavior
* Screen-reader meaning
* Expected browser interaction
* Form functionality
* One consistent click target

Avoid using generic elements such as `<div>` or `<span>` as substitutes for buttons.

---

# Skeuomorphic Button Design

Skeuomorphic buttons imitate physical buttons.

They often use:

* Borders
* Rounded corners
* Shadows
* Gradients
* Raised default states
* Pressed active states

Example:

```css
.skeuomorphic-button {
    padding: 0.75rem 1.25rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0 5px 0 black;
    cursor: pointer;
}

.skeuomorphic-button:active {
    transform: translateY(5px);
    box-shadow: none;
}
```

The shadow creates elevation, and the active state makes the button appear pressed.

---

# Skeuomorphic Interaction Model

```text
Default
───────
Button appears raised
Shadow visible

Hover
─────
Pointer cursor appears
Optional color change

Active
──────
Button moves downward
Shadow disappears
```

This imitates the behavior of a real physical button.

---

# Flat Button Design

Flat buttons use a simple two-dimensional appearance.

Common characteristics include:

* Solid colors
* Minimal shadows
* Clean shapes
* Clear labels
* Strong contrast
* Limited decoration

Example:

```css
.flat-button {
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    font-weight: 700;
    cursor: pointer;
}
```

---

# Flat Buttons Need Clear Signifiers

Because flat buttons do not use realistic depth, they must rely on:

* Familiar shapes
* Strong contrast
* Clear spacing
* Descriptive text
* Hover states
* Focus states
* Active states

Flat design should reduce clutter without reducing clarity.

---

# Descriptive Button Labels

Button text should explain the action.

Weak:

```html
<button type="button">
    Click Here
</button>
```

Better:

```html
<button type="submit">
    Submit Survey
</button>
```

Other strong labels include:

* Save Changes
* Download Report
* Create Account
* Delete Message
* Continue to Checkout

Specific labels reduce uncertainty and help users predict the result.

---

# Complete Button States

```css
button {
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #2563eb;
    color: white;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
}

button:not(:disabled):hover {
    background-color: #1d4ed8;
}

button:focus-visible {
    outline: 3px solid orange;
    outline-offset: 3px;
}

button:active {
    background-color: #1e40af;
    transform: scale(0.98);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

---

# Entire Button Surface Should Be Clickable

Buttons may contain several internal elements.

```html
<button type="button">
    <img src="download.svg" alt="">
    <span>Download Report</span>
</button>
```

The following should all activate the same action:

```text
Button Background ─┐
Button Border ──────┤
Icon ───────────────┼──► Same Action
Text Label ─────────┤
Internal Spacing ───┘
```

Placing all content inside one `<button>` creates one consistent click target.

---

# Poor Multi-Part Button

```html
<div class="button">
    <img src="download.svg" alt="Download">
    <span onclick="downloadFile()">Download Report</span>
</div>
```

Problems:

* Only the text may be clickable
* The icon may behave differently
* The background may not respond
* Keyboard support is missing
* The element lacks semantic meaning

---

# Better Multi-Part Button

```html
<button class="download-button" type="button">
    <img src="download.svg" alt="" aria-hidden="true">
    <span>Download Report</span>
</button>
```

```css
.download-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```

The icon, label, and button surface now behave as one control.

---

# Hover and Mobile Devices

Hover is useful on desktop, but it is unreliable on touchscreens.

```text
Desktop
────────
Move pointer
    │
    ▼
Hover state
    │
    ▼
Click

Mobile
──────
Touch control
    │
    ▼
Action may occur immediately
```

Therefore:

* The default state must already communicate clickability.
* Important information must remain visible.
* Touch targets should be large enough.
* Hover should only enhance the interaction.

---

# Interaction Design Checklist

## Links

* [x] Visually distinct from normal text
* [x] Descriptive anchor text
* [x] Clear hover feedback
* [x] Visible focus state
* [x] Correct pseudo-class order
* [x] Sufficient color contrast
* [x] Still recognizable in every state

## Buttons

* [x] Semantic `<button>` element
* [x] Clear shape and contrast
* [x] Descriptive action label
* [x] Entire surface is clickable
* [x] Pointer cursor for enabled buttons
* [x] Hover feedback
* [x] Active feedback
* [x] Visible focus state
* [x] Clear disabled state

## Tooltips

* [x] Supplemental information only
* [x] Concise text
* [x] Does not replace a visible label
* [x] Does not contain essential instructions
* [x] Accessibility limitations considered

---

# Interaction Design Workflow

```text
Choose Semantic Element
          │
          ▼
Create a Clear Default Appearance
          │
          ▼
Use Descriptive Text
          │
          ▼
Add Hover Feedback
          │
          ▼
Add Focus Feedback
          │
          ▼
Add Active Feedback
          │
          ▼
Add Disabled Styling
          │
          ▼
Test Mouse, Keyboard, and Touch
```

---

# Common Mistakes

## Making Links Look Like Plain Text

```css
a {
    color: inherit;
    text-decoration: none;
}
```

Users may not recognize the text as interactive.

---

## Using Hover as the Only Clue

```css
button {
    background: transparent;
    border: none;
}

button:hover {
    background-color: blue;
}
```

Users should recognize the button before hovering.

---

## Removing Focus Indicators

```css
button:focus {
    outline: none;
}
```

This makes keyboard navigation difficult.

Provide a visible replacement.

---

## Using Vague Text

```html
<a href="survey.html">Click here</a>

<button type="button">Go</button>
```

Better:

```html
<a href="survey.html">Complete the customer survey</a>

<button type="submit">Submit Survey</button>
```

---

## Making Only Part of a Button Clickable

Do not attach the action only to the text or icon.

Use one semantic `<button>` containing all visual elements.

---

## Hiding Essential Information in a Tooltip

Users who cannot hover may never receive the information.

Keep important instructions visible on the page.

---

# Quick Reference

| Concept           | Purpose                                  |
| ----------------- | ---------------------------------------- |
| Signifier         | Indicates that an element is interactive |
| `:link`           | Styles unvisited links                   |
| `:visited`        | Styles visited links                     |
| `:hover`          | Provides pointer-over feedback           |
| `:active`         | Provides pressed-state feedback          |
| `:focus-visible`  | Provides keyboard focus feedback         |
| `cursor: pointer` | Reinforces clickability                  |
| `title`           | Adds supplementary tooltip text          |
| Skeuomorphism     | Imitates physical objects                |
| Flat design       | Uses simple two-dimensional styling      |
| `<button>`        | Semantic element for actions             |

---

# Visual Summary

```text
LINKS
─────
Distinct color
Underline
Descriptive anchor text
Link states
Focus feedback

BUTTONS
───────
Recognizable shape
Clear action label
Entire surface clickable
Hover feedback
Active feedback
Focus feedback

TOOLTIPS
────────
Supplementary context
Not essential information
Accessibility limitations
```

---

# Key Takeaways

* Links must be visually distinct from ordinary text.
* Descriptive anchor text explains a link’s destination.
* Link states provide feedback throughout the interaction.
* The recommended link-state order is:

  1. `:link`
  2. `:visited`
  3. `:hover`
  4. `:active`
* `cursor: pointer` reinforces clickability.
* Hover effects should enhance, not define, interaction.
* The `title` attribute can provide supplementary tooltip text.
* Tooltips should not contain essential information.
* Skeuomorphic buttons imitate physical controls with depth and movement.
* Flat buttons use simple shapes, strong contrast, and clear labels.
* Buttons should use descriptive action text.
* Every visible part of a button should activate the same behavior.
* Focus states are essential for keyboard users.
* Effective interface design combines creativity with familiar interaction patterns.

---

> **Final Reminder:** There is no single correct visual style for links and buttons. The most successful designs are the ones that remain clear, predictable, consistent, and accessible while still supporting the personality of the website.

