# Mizo Lyrics

A clean, mobile-first lyric database for Mizo songs.

## Features
- Latest songs feed and date stamps
- Top 5 Songs of the Week
- Search by title, singer, lyricist and lyrics
- Full lyric pages with share/copy/favorites
- Mizo/English bilingual labels
- Facebook community link
- Responsive mobile-first UI
- Admin add/edit/delete panel
- JSON storage, ready to migrate to SQL/MongoDB

## Run
```bash
npm install
cp .env.example .env
npm start
```
Open http://localhost:3000

Admin: open `/admin.html` and use `ADMIN_KEY`.

Replace sample songs in `data/songs.json` with lyrics you have permission to publish. Set `FACEBOOK_URL` to your real community URL.
