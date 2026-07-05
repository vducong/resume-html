# Duc Cong Vu's resume template

Too tired from adjusting font formats and aligning spacing on Google Docs, I created this template for the peace of mind of resume editing.

Built with Create React App (CRA) and TypeScript, this project aims to provide an easy-to-use and customizable template to help you create a professional-looking resume quickly

## Getting started

### Installation

1. Clone the repository

```bash
git clone https://github.com/vducong/resume-html.git
cd resume-html
```

2. Install dependencies

```bash
npm install
```

### Usage

Start the development server:

```bash
npm start
```

Open http://localhost:3000 to view it in the browser.

### Customize your resume

1. Edit the data

   Change the `src/masterData.ts` file to include your details, education, work experience, skills, and whatever else makes you look cool :D

2. Edit the structure

   Tweak the `src/App.tsx` file and components in the `src/components` directory if you want to mess with the structure.

3. Edit the styles

   Go wild with the styles in the `src/styles` directory.

### Page 1 limit (screen preview)

While editing, a dashed **Page 1 limit** line marks where the first printed page ends. Content below that line is tinted red and labeled **Overflows page 1** — trim your copy or try a **Custom** page size (e.g. taller sheet) to fit everything on one page.

The line matches the selected page height (A4, US Letter, or Custom). It is hidden when printing.

### Printing to PDF

The app includes a page-size toolbar above the resume preview:

1. Start the dev server (`npm start`) and open http://localhost:3000
2. Choose a page size: **A4**, **US Letter**, or **Custom** (enter width/height, e.g. `220mm` / `331mm`)
3. Click **Print / Save PDF**, or press `Ctrl + P` (Mac: `Cmd + P`)
4. In the print dialog:
   - Destination: **Save as PDF**
   - Paper size: should match the selected preset
   - Margins: **None** (padding is already applied inside the page)
   - Background graphics: **On**

Your page size selection is saved in the browser and restored on reload.

## License

Format is MIT but all the data is owned by Duc Cong Vu.
