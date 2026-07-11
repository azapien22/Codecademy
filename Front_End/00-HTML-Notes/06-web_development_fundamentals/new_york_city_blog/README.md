# Project: New York City Blog

## Overview

In this project, you will build a **semantic HTML blog**
about New York City.

You will apply:

- semantic HTML structure
- navigation
- media elements
- lists and content organization

---

## Project Goal

Create a webpage that includes:

- navigation bar
- blog content
- media (image, video, audio)
- additional info (aside)
- footer

---

## Navigation Bar

Create a navigation menu using:
```text
    <nav>
      <ul>
        <li><a href="">Blog</a></li>
        <li><a href="">Media</a></li>
        <li><a href="">About</a></li>
      </ul>
    </nav>
```
Purpose:

- allows users to jump to sections
- improves usability

---

## Blog Content

### Header
```text
    <header>
      <h1>New York City</h1>
    </header>
```
---

### Main Section
```text
    <main>
      <section id="blog">
        <article>
          <p>NYC description...</p>
        </article>
      </section>
    </main>
```
Purpose:

- `<main>` → primary content
- `<section>` → grouped topic
- `<article>` → standalone content

---

## Image with Figure
```text
    <figure>
      <img src="https://content.codecademy.com/courses/Semantic%20HTML/statue-of-liberty.jpeg">
      <figcaption>
        This is the Statue of Liberty, a popular tourist attraction located on Liberty Island.
      </figcaption>
    </figure>
```
Purpose:

- groups image + description
- improves accessibility

---

## Aside Content
```text
    <aside>
      <p>NYC food description...</p>
      <ol>
        <li>Pizza</li>
        <li>Bagels</li>
        <li>Burgers and Sandwiches</li>
        <li>Ramen</li>
        <li>Tacos</li>
        <li>Pasta</li>
        <li>Desserts</li>
      </ol>
    </aside>
```
Purpose:

- adds supporting information
- enhances main content

---

## Media Section
```text
    <section id="media">
      <article>
        <h2>The Scenery in NYC</h2>
        <p>Description...</p>
      </article>

      <video src="https://content.codecademy.com/courses/Semantic%20HTML/nyc-skyline-timelapse.mp4" controls>
      </video>

      <embed src="https://content.codecademy.com/courses/Semantic%20HTML/nyc-skyline.jpeg"/>

      <audio controls>
        <source src="https://content.codecademy.com/courses/Semantic%20HTML/nyc-sounds.mov">
      </audio>
    </section>
```
---

## Structure Diagram
```text
    html
     ├── nav
     ├── header
     ├── main
     │    ├── section (blog)
     │    │    └── article
     │    ├── figure
     │    ├── aside
     │    └── section (media)
     │         ├── article
     │         ├── video
     │         ├── embed
     │         └── audio
     └── footer
```
---

## Footer
```text
    <footer id="about">
      <p>Posted by: Your Name</p>
      <p>Contact information: Blogger@NYC.com</p>
    </footer>
```
Purpose:

- author info
- contact details

---

## Key Concepts Applied

- semantic structure
- navigation with links
- grouping content
- media integration
- accessibility improvements

---

## Key Idea

This project demonstrates:

    semantic HTML = real-world webpage structure

---

## Notes

- CSS styles are applied automatically
- focus is on HTML structure, not design
