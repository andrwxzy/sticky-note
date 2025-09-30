# Sticky Notes App

## How to Run

1. Clone the repository

   ```bash
   git clone https://github.com/andrwxzy/sticky-note.git
   cd sticky-note
   npm install
   npm run dev
   ```

## Decisions Made

React + TypeScript: for type safety and maintainability.
Tailwind CSS: for fast and clean styling.
useState + useRef: to handle note creation.
LocalStorage: to persist notes.

## What I’d Add Next

Simple export/import as JSON.
Drag & Drop support for rearranging notes.
Color filter to organize each note by color

## Reflection

What was easy: Handling basic note state with `useState`
what was tricky: TypeScript types for form elements
What you'd refractor first: I’d refactor localStorage handling into a utility/helper instead of having localStorage in useNotes(custom hooks)
