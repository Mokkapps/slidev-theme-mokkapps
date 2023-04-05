---
theme: ./
title: Mokkapps Theme
favicon: mokkapps-logo.png
layout: cover
lineNumbers: true
---

# Mokkapps Slidev Theme

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: about-me
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---
layout: section
---

# This is a section

---

# Code

Use code snippets and get the `highlighting` directly!

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---
layout: video
video: https://player.vimeo.com/video/455611549
---

# You can include Video!

---
layout: sfc
example: simple
---

# Firing up a Vue SFC playground

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Image Right

Here can be any text

---
layout: iframe-right
url: "https://stackblitz.com/edit/polite-popup-nuxt-3?ctl=1&embed=1&file=composables/usePolitePopup.ts"
---

# Embedding a Stackblitz Project

Isn't this cool?

I think, yes!

---
layout: quote
---

# Good engineering is not primarily making good decisions, it's seeking good feedback which lets you quickly discard bad decisions.

Kent Beck

---
layout: center
class: "text-center"
---

# Center

This a centered content!

---
layout: outro
---

# Thank you for listening!

Questions?

[Repository](github.com/mokkapps/slidev-theme-mokkapps) / [Slides](https://slidev-theme-mokkapps.netlify.app/)
