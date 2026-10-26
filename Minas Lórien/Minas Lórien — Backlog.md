# Minas Lórien — Backlog

#minas-lorien #project

A living list of what's next for the wins vault. Check things off as they ship.

---

## 🔭 Up next

- [ ] **Search bar** — search across all wins/entries. *(Original #1 backlog item.)*

## 🎨 Polish

- [ ] **Sort newest-first** and optionally show the date on each card (data already stored in `createdAt`)
- [ ] **Icon refinements** — ongoing elvish icon polish
- [ ] **Replace the microlink.io link-preview call** — it sends every saved URL to a third-party service (privacy + reliability)

## 🧹 Cleanup (from the June 2026 security pass)

- [ ] Delete the old `config/auth` doc in Firestore (unused now)

## ✅ Done — June 2026 security overhaul

- [x] Real login via Firebase Authentication (kept the single-password feel)
- [x] Firestore rules locked to my account — wins + old password doc protected
- [x] Storage rules locked to my account (upgraded to Blaze, $5 budget alert)
- [x] Escape user content (fixes stored-XSS risk)
- [x] Editing an entry no longer resets its date
- [x] Delete confirmation before removing an entry
- [x] Hardened Electron (`nodeIntegration: false`, `contextIsolation: true`)

## ✅ Done — June–October 2026

- [x] Fixed local git — `git push` works from my machine again
- [x] Readability pass — bigger text, higher contrast, larger tap targets, A−/A+ control
- [x] Removed `migrate.html` and the old `index_backup*.html.html` files from the repo
