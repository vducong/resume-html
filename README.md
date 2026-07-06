# Duc Cong Vu's resume template

Too tired from adjusting font formats and aligning spacing on Google Docs, I created this template for the peace of mind of resume editing.

Built with Create React App (CRA), CRACO, and TypeScript, this project provides an easy-to-use and customizable template to help you create a professional-looking resume quickly.

## Getting started

### Installation

1. Clone the repository

```bash
git clone https://github.com/vducong/resume-html.git
cd resume-html
```

2. Add your resume data

The app reads CV content from `docs/master-data.json`. After cloning, create that file with your own details (see [Customize your resume](#customize-your-resume) below).

> **Note:** This repo references a private `docs` submodule used for my personal CV workspace. You do **not** need access to it — just add your own `docs/master-data.json` locally.

3. Install dependencies

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

   Create or edit `docs/master-data.json` with your contact info, education, work experience, and projects. The shape of this file matches `MasterDataProps` in `src/types.ts`.

   `intro` and `contact` always render at the top. Each reorderable section (`edu`, each `exp` entry, `skills`) uses `{ title, position, <items> }`. Sections render in ascending `position` order — change positions in JSON to reorder without editing `src/App.tsx`.

   Minimal example:

   ```json
   {
     "contact": {
       "fullName": "Your Name",
       "email": "you@example.com"
     },
     "intro": "A short professional summary.",
     "edu": {
       "title": "Education",
       "position": 50,
       "schools": [
         {
           "school": "University Name",
           "degree": "B.S. Computer Science",
           "startMonth": "Sep 2018",
           "endMonth": "May 2022"
         }
       ]
     },
     "exp": [
       {
         "title": "Experience",
         "position": 20,
         "jobs": [
           {
             "jobTitle": "Software Engineer",
             "companyName": "Acme Inc",
             "startMonth": "Jan 2023",
             "endMonth": "Present",
             "works": [{ "work": "Shipped a feature that improved X by Y%." }]
           }
         ]
       }
     ],
     "skills": {
       "title": "Skills",
       "position": 60,
       "skills": [{ "name": "English", "proficiency": "Native or bilingual proficiency" }]
     }
   }
   ```

2. Edit the structure

   Tweak components in the `src/component` directory if you want to change how sections render. Reorder sections by editing `position` values in `docs/master-data.json`.

3. Edit the styles

   Adjust styles in the `src/style` directory.

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

## Private docs submodule (optional)

The `docs/` folder is a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) pointing to a private repository. It is only needed if you maintain this fork with the same setup and have access to that repo.

```bash
git clone --recurse-submodules https://github.com/vducong/resume-html.git
```

If you already cloned without submodules:

```bash
git submodule update --init
```

Without access to the private docs repo, skip submodule init and use your own `docs/master-data.json` as described above.

## License

The template code is [MIT](LICENSE). Resume content in `docs/master-data.json` is yours when you use this template with your own data.
