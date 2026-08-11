🚀 DevStudio — Responsive Product Website

DevStudio is a complete responsive product/service website built using HTML5 and CSS3 only.

This project combines semantic HTML, modern CSS layouts, responsive design, forms, tables, animations, accessibility, and advanced CSS selectors into one practical frontend project.

🎯 Project Goal

The goal of this project is to practice and demonstrate:

HTML5 semantic structure

CSS3 styling

CSS Variables

Flexbox

CSS Grid

Responsive design

Media queries

Forms and validation

Tables

Pseudo-classes

Pseudo-elements

Positioning

Transitions

Transforms

CSS animations

Gradients

Shadows

Overflow

Accessibility

🛠️ Technologies Used

HTML5

CSS3

Google Fonts

CSS Grid

CSS Flexbox

CSS Animations

CSS Media Queries

No JavaScript

This project intentionally uses HTML + CSS only.

The following are not used:

JavaScript

React

Bootstrap

Tailwind CSS

jQuery

External CSS frameworks

📁 Project Structure

devstudio/
│
├── index.html
├── style.css
└── README.md

🌐 Website Sections

1. Header / Navigation

The header contains:

DevStudio logo

Home

Features

Services

Portfolio

Pricing

FAQ

Contact

Get Started button

CSS concepts:

position: sticky

Flexbox

Hover effects

Focus states

Internal anchor navigation

2. Hero Section

The hero section contains:

Main headline

Supporting description

Primary CTA

Secondary CTA

Project statistics

Dashboard-style visual

Floating project status badge

CSS concepts demonstrated:

CSS Grid

Flexbox

Gradients

Absolute positioning

z-index

clamp()

Shadows

Border radius

CSS animations

3. Trust / Companies Section

Displays fictional companies that trust DevStudio:

Vertex

Nova

Orbit

Northstar

Pulse

Cloudly

Flexbox is used to keep the company names responsive.

4. Features Section

Contains six feature cards:

Product Strategy

UI/UX Design

Web Development

Performance

Scalable Systems

Continuous Support

CSS concepts:

CSS Grid

Card layouts

Hover transitions

:nth-child()

::after

CSS variables

Box shadows

5. About / Product Section

Contains:

Product dashboard visual

Figure and caption

Product description

Feature checklist

CTA link

Demonstrates:

CSS Grid

Flexbox

Gradients

Borders

Shadows

Pseudo-elements

6. Services Section

Four service cards:

Design

Development

Growth

Support

The Development service is presented as the featured service.

7. Portfolio Section

The portfolio uses an asymmetric CSS Grid layout.

Projects include:

Finora Finance

FlowDesk

CareConnect

Learnly

MarketHub

The featured portfolio cards demonstrate:

grid-column
grid-row

Hover interactions use:

transform: scale();

8. Process Section

The development process contains four steps:

Discover

Design

Build

Launch

An ordered list <ol> is used to represent the process.

9. Statistics Section

Displays:

98% Client satisfaction

4.9/5 Average rating

32% Average performance gain

24/7 Product availability

The layout uses Flexbox/Grid and changes responsively on smaller screens.

10. Testimonials Section

Contains three testimonial cards.

Each testimonial includes:

Rating

Blockquote

Client name

Client role

Avatar

Semantic HTML such as <blockquote> is used.

11. Pricing Section

Three pricing plans are included:

Basic

For individuals and early ideas.

Pro

For growing businesses.

Enterprise

For larger teams requiring custom solutions.

The pricing cards demonstrate:

CSS Grid

Flexbox

Borders

Shadows

Positioning

Responsive layouts

📊 Comparison Table

The pricing section also contains a feature comparison table.

Feature

Basic

Pro

Enterprise

Projects

5

50

Unlimited

Storage

10GB

100GB

1TB

Support

Email

Chat

24/7

Analytics

No

Yes

Advanced

The table uses semantic table elements:

<table>
<thead>
<tbody>
<tr>
<th>
<td>

Horizontal scrolling is supported on smaller screens.

❓ FAQ Section

The FAQ works without JavaScript using native HTML:

<details>
    <summary>Question</summary>
    <p>Answer</p>
</details>

The FAQ covers topics such as:

Project starting process

Project timeline

Existing designs

Responsive design

Post-launch support

Existing technology

📩 Contact Form

The contact section contains:

Name

Email

Phone

Preferred date

Budget

Project type

Radio buttons

Message textarea

Newsletter checkbox

Terms checkbox

Submit button

HTML attributes such as:

required
placeholder
min
max

are used for basic validation.

CSS states include:

:focus
:focus-visible
:valid
:invalid
:checked

📣 CTA Section

A final call-to-action encourages users to start a project.

It contains:

Heading

Description

Get Started button

Gradient background

Decorative pseudo-element

🦶 Footer

The footer contains multiple navigation columns.

Product

Features

Pricing

Updates

Company

About

Careers

Blog

Contact

Resources

Documentation

Guides

Community

Legal

Privacy

Terms

Cookies

A copyright section is also included.

🎨 CSS Features

CSS Variables

The project uses reusable CSS variables for colors, spacing, radius, and shadows.

Examples:

--primary
--primary-dark
--secondary
--background
--surface
--text
--muted
--border
--success
--danger

Reusable design values include:

--radius-sm
--radius-md
--radius-lg

--shadow-sm
--shadow-md
--shadow-lg

Flexbox

Flexbox is used for:

Navigation

Buttons

Statistics

User information

Footer

Pricing buttons

CTA layouts

Mobile layouts

CSS Grid

CSS Grid is used for:

Hero section

Feature cards

Service cards

Portfolio

Process

Testimonials

Pricing

Contact form

Footer

The portfolio specifically demonstrates asymmetric grid placement.

📱 Responsive Design

The website is designed for:

Desktop

Laptop

Tablet

Mobile

Small mobile devices

Main breakpoints include:

@media (max-width: 1024px)
@media (max-width: 768px)
@media (max-width: 480px)

The layout changes structure instead of simply shrinking content.

For example:

Desktop

┌─────────────────┬─────────────────┐
│ Content │ Visual │
└─────────────────┴─────────────────┘

Mobile

┌─────────────────────┐
│ Content │
└─────────────────────┘

┌─────────────────────┐
│ Visual │
└─────────────────────┘

🧮 CSS Functions

The project demonstrates:

var()
calc()
min()
max()
clamp()

Example:

font-size: clamp(2.8rem, 6vw, 5.2rem);

✨ Transitions & Transforms

Interactive elements use transitions for:

Navigation links

Buttons

Feature cards

Service cards

Portfolio cards

Form controls

Transform examples include:

transform: translateY();
transform: scale();

🎬 CSS Animations

The project includes CSS animations for visual feedback.

Floating visual

@keyframes float

Badge entrance

@keyframes slideUp

Animations are also adjusted for users who prefer reduced motion.

🎨 Gradients

The project uses:

Linear gradients

Radial gradients

Gradient backgrounds

Gradient UI elements

The hero section uses layered gradients to create a modern product-design appearance.

♿ Accessibility

Accessibility considerations include:

Semantic HTML

Logical heading hierarchy

Form labels

Keyboard focus states

:focus-visible

Skip-to-content link

Semantic <blockquote>

Proper table headings

FAQ using native <details>

Reduced-motion support

The stylesheet includes:

@media (prefers-reduced-motion: reduce)

to reduce animations for users who prefer less motion.

🔗 Internal Navigation

The navigation uses section anchors.

Example:

<a href="#features">Features</a>

with:

<section id="features">

This allows users to move between sections without JavaScript.

🚀 How to Run

No build tools or package installation are required.

Step 1

Download or clone the project.

Step 2

Make sure the files are in the same directory:

index.html
style.css

Step 3

Open:

index.html

in a browser.

That's it.

🧪 Testing Checklist

HTML

Semantic elements are used correctly

Navigation links work

Form labels are connected correctly

Required fields work

FAQ opens and closes

Table displays correctly

Heading hierarchy is logical

CSS

Desktop layout works

Tablet layout works

Mobile layout works

Small mobile layout works

Hover states work

Focus states work

Animations work

Reduced motion works

Comparison table scrolls on narrow screens

No unwanted horizontal page overflow

Browser Testing

Recommended browsers:

Chrome

Edge

Firefox

📚 Concepts Practiced

HTML
│
├── Semantic HTML
├── Forms
├── Tables
├── Lists
├── Links
├── Figures
├── Details / Summary
├── Blockquote
└── Accessibility

CSS
│
├── Selectors
├── Box Model
├── Typography
├── Colors
├── Variables
├── Flexbox
├── Grid
├── Position
├── Z-index
├── Responsive Design
├── Media Queries
├── Transitions
├── Transforms
├── Animations
├── Gradients
├── Shadows
├── Overflow
├── Pseudo-classes
├── Pseudo-elements
└── CSS Functions

🏁 Challenge Completion

DevStudio is designed as a final HTML + CSS practice project that combines the major concepts learned across responsive layout, Flexbox, Grid, positioning, forms, animations, and visual styling.

Core Requirement

HTML + CSS only

No JavaScript is required.

👩‍💻 Author

Swati Sinha

Frontend Developer | React Developer

📄 License

This project is created for learning, practice, portfolio development, and interview preparation.
