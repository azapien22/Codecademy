# HTML Videos

## Overview

HTML supports displaying **videos** on a webpage.

The HTML element used to display videos is:

    <video>

Like images, videos require a **source file** so the browser knows
which video to display.

However, unlike the `<img>` element, the `<video>` element requires:

- an opening tag
- content (optional fallback text)
- a closing tag

---

## Basic Video Example

Example HTML:
```Text
    <video src="myVideo.mp4" width="320" height="240" controls>
      Video not supported
    </video>
```
---

## Structure Diagram

HTML hierarchy:
```Text
    video
     └── fallback text
```
Expanded structure:
```Text
    video
     ├── src
     ├── width
     ├── height
     ├── controls
     └── fallback text
```
Example diagram:
```Text
    video
     ├── src="myVideo.mp4"
     ├── width="320"
     ├── height="240"
     ├── controls
     └── "Video not supported"
```
---

## The `src` Attribute

The `src` attribute specifies the **video file location**.

Example:
```Text
    src="myVideo.mp4"
```
The source can be:

- a **local video file**
- a **URL to a video hosted online**

Example:
```Text
    <video src="videos/movie.mp4">
```
or
```Text
    <video src="https://example.com/movie.mp4">
```
---

## The `width` and `height` Attributes

These attributes control the **display size of the video player**.

Example:

    width="320"
    height="240"

Structure:
```Text
    video
     ├── width
     └── height
```
Example usage:
```Text
    <video src="movie.mp4" width="320" height="240">
```
---

## The `controls` Attribute

The `controls` attribute tells the browser to show **video playback controls**.

Controls typically include:

- play
- pause
- volume
- timeline progress bar

Example:
```Text
    <video src="movie.mp4" controls>
```
Diagram:
```Text
    video
     └── controls enabled
```
---

## Fallback Text

Text placed between the opening and closing `<video>` tags
acts as **fallback content**.

Example:
```Text
    <video src="movie.mp4">
      Video not supported
    </video>
```
This text is displayed **only if the browser cannot load the video**.

Example concept:

    [video failed to load]

    Video not supported

---

## Example Video Element

Full example:
```Text
    <video src="myVideo.mp4" width="320" height="240" controls>
      Video not supported
    </video>
```
Hierarchy:
```Text
    video
     ├── src="myVideo.mp4"
     ├── width="320"
     ├── height="240"
     ├── controls
     └── fallback text
```
---

## Key Differences from `<img>`

Comparison:

Image element:

    <img src="image.jpg">

Video element:

    <video src="video.mp4"></video>

Differences:
```Text
    img
     └── self-closing

    video
     ├── opening tag
     ├── content (fallback text)
     └── closing tag
```
---

## Key Pattern

Typical video structure:
```Text
    <video src="video.mp4" width="width" height="height" controls>
        fallback text
    </video>
```
Example:
```Text
    <video src="myVideo.mp4" width="320" height="240" controls>
        Video not supported
    </video>
```
