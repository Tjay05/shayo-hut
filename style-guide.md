
# 🎨 STYLE GUIDE — Vibble (or your chosen name)

## 📘 Typography

| Use           | Font              | Size       | Weight     |
|---------------|-------------------|------------|------------|
| Headings      | Poppins           | 24–36px    | 600–700    |
| Body Text     | Inter or Open Sans| 14–16px    | 400–500    |
| Buttons       | Poppins           | 16px       | 600        |
| Small Labels  | Inter             | 12px       | 400        |

**Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@400;600;700&display=swap');
```

---

## 🎨 Color Palette

### 🔷 Primary Colors

| Color Name   | Usage              | Hex       | RGB               |
|--------------|--------------------|-----------|-------------------|
| Indigo Blue  | Sidebar & Buttons  | #4B00E0   | rgb(75, 0, 224)   |
| Coral Red    | Headers / CTA      | #FF5B5B   | rgb(255, 91, 91)  |
| Soft Purple  | Gradient Overlay   | #A16AE8   | rgb(161, 106, 232)|
| Gradient Pink| Sidebar Gradients  | #FF7EB3   | rgb(255, 126, 179)|

### ⚪️ Neutrals

| Color Name   | Usage              | Hex       | RGB               |
|--------------|--------------------|-----------|-------------------|
| Background   | Main UI background | #FFFFFF   | rgb(255, 255, 255)|
| Light Gray   | Inputs & Borders   | #F1F3F6   | rgb(241, 243, 246)|
| Medium Gray  | Secondary Text     | #6B7280   | rgb(107, 114, 128)|
| Dark Gray    | Labels/Muted text  | #374151   | rgb(55, 65, 81)   |

### 🔵 Accent Colors

| Color Name   | Usage              | Hex       | RGB               |
|--------------|--------------------|-----------|-------------------|
| Sky Blue     | Info / Like Btns   | #3B82F6   | rgb(59, 130, 246) |
| Heart Red    | Like/Comment       | #EF4444   | rgb(239, 68, 68)  |
| Lemon Yellow | Notification       | #FACC15   | rgb(250, 204, 21) |

---

## 🧱 UI Components (Style Tokens)

| Component         | Style Summary |
|-------------------|----------------|
| Button (Primary)  | bg-[#4B00E0] text-white px-4 py-2 rounded-xl shadow-md hover:bg-[#3A00B5] |
| Card              | bg-white p-4 rounded-2xl shadow-sm |
| Input Field       | border border-[#F1F3F6] rounded-lg px-3 py-2 text-sm focus:outline-[#4B00E0] |
| Sidebar           | bg-gradient-to-b from-[#4B00E0] via-[#A16AE8] to-[#FF7EB3] text-white |

---

## ✅ Extras

- **Icons**: Use [Lucide](https://lucide.dev/) or `react-icons`
- **Shadows**:
  - shadow-sm: subtle UI cards
  - shadow-md: buttons & modals
- **Border Radius**: rounded-xl or rounded-2xl for modern feel
