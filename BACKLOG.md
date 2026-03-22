# Thoreson Estate — Post-Game Backlog

## HIGH PRIORITY
1. **Cocktail hour side quests** — Icebreaker tasks, character scavenger hunt, relationship missions, gossip round. Players need to be in character BEFORE the murder happens. Nobody should be reading their backstory for the first time when Will dies.
2. **Detective board on TV** — Cork board display on the big TV behind GM. As revelations are toggled from Master Controls, clues auto-pin as polaroid-style cards. Red string animates between connected evidence. Replaces the need for the investigator to manually track clues — DJ did a great job in character but struggled to write everything down. The TV becomes the room's shared brain.
3. **Photo captions** — Let players add a comment/caption when they take a photo. Caption shows on the photo wall slideshow and in the photo gallery. One player was taking photos outside the app just so she could annotate them — the captions were some of the funniest moments of the night. This needs to be built into the camera flow.
4. **Leaderboard 2.0** — Expand scoring system and display on TV periodically.
   - **First scanner bonus** — extra points if you're the first person to scan a clue
   - **Puzzle solver points** — QR code inside the safe: "Only scan this if YOU cracked the combination." Same for any lockbox or puzzle.
   - **Leaderboard on TV** — rotate it into the slideshow every few cycles, or GM triggers it from Master Controls at key moments (end of each act, final reveal)
   - **Point categories** — clues found, puzzles solved, first discoveries. Visible breakdown on the leaderboard.

## FEATURES
3. **Detective board on phones** — Redesign Discoveries page to match the TV board aesthetic. Players can review clues on their own phone but the TV is the primary view.
4. **Native app** — React Native or Flutter. Proper push notifications, offline support, smoother QR scanning.

## STORY / GAME DESIGN
5. **Rework the confession delivery** — Three audio recordings was too repetitive. By Act 3 it felt tedious. Options: one full recording split into unlockable segments; shorter clips for Acts 2-3 with just the key reveals; mix formats (Act 1 audio, Act 2 written letter, Act 3 Pinkerton report); or let the investigator read Acts 2-3 aloud from the TV board. Variety keeps each act feeling fresh.
6. **Pacing control** — 23 people going every direction finding clues at different times. The story lost cohesion. Solutions:
   - **Gated acts** — Act 2 QR codes don't work until GM opens Act 2. "This evidence hasn't been discovered yet."
   - **Group reveal moments** — each act ends with a "gather round." GM presents findings on TV detective board, THEN opens next act.
   - **Fewer clues per act** — 5-6 key clues instead of many scattered ones. Quality over quantity.
   - **Team structure** — groups of 3-4 with mixed skills, must collaborate to unlock clues.
   - **Pace clock on TV** — visible countdown per act creates urgency and rhythm.
   - The combination of gated acts + detective board + gather rounds would solve most of this.
7. **Rework memory/clue delivery** — Players read every memory, skill analysis, and clue text verbatim from their phones. Killed immersion. Fixes:
   - **Bullet points not paragraphs** — give 2-3 key facts, not a script. Force players to paraphrase.
   - **"Share in your own words"** — explicit instruction at the end of every memory popup.
   - **Timed popups** — memory visible for 45-60 seconds then fades. Can't stand there reading.
   - **One-line triggers** — "You recognize that handwriting" not a full analysis. Player explains from backstory knowledge.
   - **GM announcement** — "When your phone buzzes, read it to yourself, then tell the group what your character remembers. Don't read from your phone — it's 1935."
   - Skill expert analyses may need to stay longer/readable since they're technical — but personal memories should be internalized and shared naturally.

## PRODUCTION
6. *(costumes, lighting, music, dinner pairing — pending survey results)*

## PLATFORM
8. **Party system & accounts** — The foundation for running multiple events. Flow:
   - GM creates a party → unique party code generated (e.g. "THORESON-2847")
   - Players visit site, enter party code, create account (name, email)
   - GM selects a story from a library of available mysteries
   - Character selection opens — players see public descriptions (not backstories), pick their character first-come-first-serve. GM can lock or reassign.
   - Game night: everyone logs in with their account, all data scoped to party code
   - Post-game: photos, survey, results all tied to that party code
   - Eliminates memorized 5-digit login codes
9. **Story template system** — Boilerplate structure so new mysteries can be created without rebuilding the app. A story template defines: characters, backstories, skills, items, revelations, memories, acts, clue connections. The engine reads the template and runs the game. Thoreson Estate becomes "story #1" in a library.
10. **GM dashboard per party** — Master Controls scoped to a party code. Multiple GMs could run different parties on the same night with different stories.

## BUSINESS
11. **Commercial launch plan** — venue model, pricing, staffing (see session 2 transcript)
12. **Brochure** — Estate Experience ($115/pp), Private Affair ($135/pp), Corporate ($2,500 flat)
13. **Survey results analysis** — review all feedback, extract pricing data and venue preferences

## BUGS / FIXES FROM GAME NIGHT
10. *(add items from debrief)*
