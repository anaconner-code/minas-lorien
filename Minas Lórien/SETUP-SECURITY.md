# Minas Lórien — Security Setup

Two files changed: **index.html** and **main.js**. But code alone doesn't make you
safe — the real lock is in the Firebase console. Do these steps **in order** so you
never lock yourself out.

The single-password feel is unchanged. You'll still just type one secret to get in.
Behind the scenes that secret is now the password for one real Firebase account, and
your data only opens for that account.

---

## Step 1 — Create your login account (Firebase Authentication)

1. Firebase console → **Authentication** → **Get started** (if you haven't before).
2. **Sign-in method** tab → enable **Email/Password** → Save.
3. **Users** tab → **Add user**:
   - Email: `ana.coreas@gmail.com`  *(must match `LOGIN_EMAIL` in index.html)*
   - Password: **choose the secret you want to type to log in.** This replaces your
     old vault password. Pick something strong — Firebase stores it securely (hashed),
     never in plaintext.
4. After the user is created, copy its **User UID** (long string in the Users list).
   You'll paste it into the rules below.

---

## Step 2 — Deploy the new code

Replace these two files in your repo with the new versions, then push:

```
git add index.html main.js
git commit -m "Secure auth via Firebase Authentication; escape user content; harden Electron"
git push
```

Vercel redeploys automatically. Open the site and confirm you can log in with the
password you set in Step 1. (Reads still work at this point because the old rules are
still loose — we tighten them next.)

---

## Step 3 — Lock down Firestore rules

Firebase console → **Firestore Database** → **Rules**. Replace everything with this,
pasting your UID from Step 1:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Only YOUR signed-in account can read or write entries.
    match /wins/{winId} {
      allow read, write: if request.auth != null
        && request.auth.uid == "PASTE_YOUR_UID_HERE";
    }
  }
}
```

Click **Publish**.

> Why lock to your UID and not just `request.auth != null`? Because anyone with your
> public site could, in theory, register their own account in your Firebase project.
> Pinning to your exact UID means only *you* count as authorized.

---

## Step 4 — Lock down Storage rules (for attachments)

Firebase console → **Storage** → **Rules**. Replace with this (same UID):

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /wins/{fileName} {
      allow read, write: if request.auth != null
        && request.auth.uid == "PASTE_YOUR_UID_HERE";
    }
  }
}
```

Click **Publish**. Reload your app and confirm entries and files still load — now
you're the only one who can reach them.

---

## Step 5 — Clean up

1. **Delete the old password doc.** Firestore → Data → `config` collection →
   delete the `auth` document. It's no longer used and shouldn't linger.
2. **Remove the migration tool and old backups from the repo** (they're publicly
   reachable on your site and on GitHub):

```
git rm migrate.html index_backup*.html.html
git commit -m "Remove migrate tool and old backups"
git push
```

---

## What changed in the code (plain-English)

- **Login** now uses Firebase Authentication instead of comparing against a plaintext
  password stored in the database. Your password is verified on Google's servers and
  never stored where anyone can read it.
- **You stay signed in** across reloads automatically (Firebase handles the session),
  so the experience is the same or smoother than before.
- **User content is escaped** before it's shown. Notes, titles, and filenames can no
  longer sneak HTML or scripts into the page (a cross-site-scripting fix).
- **Editing an entry keeps its original date** instead of resetting it, and keeps the
  attached file's storage link so deletes still clean up properly.
- **Deleting now asks for confirmation** so a stray click can't wipe an entry.
- **Electron is hardened** (`nodeIntegration: false`, `contextIsolation: true`) so a
  bad entry can't run code on your computer.

## Still on the list (not done yet)
- Search bar (your #1 backlog item)
- Sort newest-first / show dates on cards
- Replace the microlink.io link-preview call (sends every saved URL to a third party)
