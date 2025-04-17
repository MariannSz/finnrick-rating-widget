# 🎯 Finnrick Rating Widget

This is a reusable web component for embedding **Finnrick Ratings** on third-party websites. It is distributed as a standalone JavaScript widget and can be used by dropping a single `<script>` tag and a custom HTML tag into any webpage.

## 💡 Demo

[Live Demo →](https://mariannsz.github.io/finnrick-rating-widget/)

## 🚀 How to Use

1. Add this script to your HTML `<head>` or just before `</body>`:

```html
<script
  type="module"
  src="https://mariannsz.github.io/finnrick-rating-widget/assets/index-XXXX.js"
></script>
```

> **Note:** Replace `index-XXXX.js` with the actual hashed file name found in [dist/assets](https://github.com/mariannsz/finnrick-rating-widget/tree/main/dist/assets).

2. Insert the custom element wherever you want the widget to appear:

```html
<finnrick-rating vendor="Shanghai Innovy Chemical New Materials"
product="Tesamorelin, CJC-1295, Ipamorelin" rating="A" label="GREAT" samples="6"
date="19 Feb 2025" /finnrick-rating>
```

## 🧱 Attributes

| Attribute | Required | Description                     |
| --------- | -------- | ------------------------------- |
| `vendor`  | ✅       | Name of the vendor              |
| `product` | ✅       | Name(s) of the tested product   |
| `rating`  | ✅       | Letter grade (e.g. A, B)        |
| `label`   | ✅       | Rating label (e.g. GREAT, OKAY) |
| `samples` | ✅       | Number of samples tested        |
| `date`    | ✅       | Date of the most recent test    |

## 📄 License

MIT © [Mariann Szűcs](https://github.com/mariannsz)
