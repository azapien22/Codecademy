# Semantic HTML — Video and Embed

## Overview

HTML allows developers to add **media content** such as videos
and external media using:

    <video>
    <embed>

These elements enhance user experience with multimedia.

---

## The `<video>` Element

The `<video>` element is used to display **video content**.

Structure:
```Text
    <video src="video.mp4">
      fallback text
    </video>
```
Example:
```Text
    <video src="coding.mp4" controls>
      Video not supported
    </video>
```
---

## Video Attributes

Attributes control how the video behaves.

---

### `controls`

Displays video controls:

- play
- pause
- volume
- fullscreen

Example:

    <video controls>

---

### `autoplay`

Automatically starts video when the page loads.

Example:

    <video autoplay>

---

### `loop`

Repeats the video continuously.

Example:

    <video loop>

---

## Example — Full Video Usage
```text
    <video src="coding.mp4" controls autoplay loop>
      Video not supported
    </video>
```
---

## Structure Diagram

HTML hierarchy:
```text
    video
     ├── src
     ├── controls
     ├── autoplay
     ├── loop
     └── fallback text
```
---

## Fallback Text

Text between `<video>` tags appears if:

- the browser cannot load the video

Example:

    Video not supported

---

## The `<embed>` Element

The `<embed>` element is used to include **external media content**.

Examples:

- GIFs
- videos
- audio files
- external media

---

## Example — `<embed>`

    <embed src="download.gif"/>

Structure:
```text
    embed
     └── src
```
---

## Key Characteristics of `<embed>`

- self-closing tag
- supports external media sources
- can embed local or external files

---

## Important Note (Deprecated)

The `<embed>` tag is:

    deprecated → no longer recommended

Modern alternatives:

    <video>
    <audio>
    <img>

---

## Comparison

    video → structured video playback
    embed → generic media embedding (deprecated)

---

## Structure Comparison

Video:
```text
    video
     └── content + controls
```
Embed:
```text
    embed
     └── media file
```
---

## Key Pattern

Video:
```text
    <video src="video.mp4" controls>
      fallback text
    </video>
```
Embed (legacy):

    <embed src="file.gif"/>

---

## Key Idea

Use modern semantic elements for media:

    video → videos
    audio → sound
    img   → images

Avoid `<embed>` in modern development.
