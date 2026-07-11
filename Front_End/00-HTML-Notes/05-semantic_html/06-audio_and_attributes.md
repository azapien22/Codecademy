# Semantic HTML — Audio and Attributes

## Overview

HTML provides the `<audio>` element to embed **audio content**
into a webpage.

It works similarly to the `<video>` element.

---

## The `<audio>` Element

The `<audio>` element is used to play sound files.

Structure:
```text
    <audio>
      <source src="audio-file.mp3" type="audio/mp3">
    </audio>
```
---

## The `<source>` Element

The `<source>` element defines the **audio file location**.

Attributes:

    src  → audio file location
    type → file format

Example:

    <source src="iAmAnAudioFile.mp3" type="audio/mp3">

---

## Structure Diagram

HTML hierarchy:
```text
    audio
     └── source
          ├── src
          └── type
```
---

## Why Specify `type`

The `type` attribute helps the browser:

- identify the audio format
- determine compatibility
- load supported files faster

---

## Audio Attributes

Attributes provide **extra functionality** to elements.

Common `<audio>` attributes:

---

### `controls`

Displays audio controls in the browser:

- play
- pause
- volume
- mute

Example:

    <audio controls>

---

### `src`

Specifies the **audio file location**.

Example:

    src="audio-file.mp3"

---

### `autoplay`

Automatically starts audio when the page loads.

Example:

    <audio autoplay>

---

## Example — Audio with Controls
```text
    <audio controls>
      <source src="song.mp3" type="audio/mp3">
    </audio>
```
---

## Example — Audio with Attributes
```text
    <audio autoplay controls>
      <source src="song.mp3" type="audio/mp3">
    </audio>
```
---

## Structure with Attributes
```text
    audio
     ├── controls
     ├── autoplay
     └── source
          ├── src
          └── type
```
---

## Browser Behavior

With `controls`:

    [▶ Play] [⏸ Pause] [🔊 Volume]

With `autoplay`:

    audio starts automatically

---

## Key Idea

The `<audio>` element embeds sound, while attributes control behavior.

    audio → media container
    source → file reference
    attributes → functionality

---

## Key Pattern

Basic usage:
```text
    <audio controls>
      <source src="audio.mp3" type="audio/mp3">
    </audio>
```
