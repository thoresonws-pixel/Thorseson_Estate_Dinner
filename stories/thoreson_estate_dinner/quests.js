// ============================================================
// THOR'S MURDER MYSTERIES — COCKTAIL HOUR QUESTS
// Story: The Thoreson Estate Dinner
// ============================================================
//
// Quests are short, specific social missions. One clear ask,
// one natural conversation. The quest gives you a reason to
// approach someone — the conversation does the rest.
//
// ASSIGNMENT:
//   Each player receives 4 quests:
//   1. One targeted quest (directed at a specific character)
//   2. Three generic/discovery quests
//   Never assigned back at the player themselves.
//
// ============================================================

const questsDatabase = {

    cocktail: [

        // ── TARGETED ─────────────────────────────────────────────

        {
            id:       "ask_charles_degree",
            type:     "targeted",
            requires: ["charles_sterling"],
            giveTo:   "any",
            exclude:  ["charles_sterling"],
            text:     "Find {{charles_sterling}} and ask what they studied at university.",
            complete: "One question. A whole career came out of it."
        },

        {
            id:       "ask_dorothy_dallas",
            type:     "targeted",
            requires: ["dorothy_wells"],
            giveTo:   "any",
            exclude:  ["dorothy_wells"],
            text:     "Find {{dorothy_wells}} and ask how long they have lived in Dallas.",
            complete: "Longer than the company has existed. That is worth remembering."
        },

        {
            id:       "ask_miranda_job",
            type:     "targeted",
            requires: ["miranda_longfellow"],
            giveTo:   "any",
            exclude:  ["miranda_longfellow"],
            text:     "Find {{miranda_longfellow}} and ask what their job actually involves day to day.",
            complete: "Contracts. Filings. Records going back decades. All of it passing through their hands."
        },

        {
            id:       "ask_walter_beat",
            type:     "targeted",
            requires: ["walter_lippman"],
            giveTo:   "any",
            exclude:  ["walter_lippman"],
            text:     "Find {{walter_lippman}} and ask what they cover at the Dallas Herald.",
            complete: "Business history. The kind of story that takes months and starts with a single old document."
        },

        {
            id:       "ask_raymond_role",
            type:     "targeted",
            requires: ["raymond_hammond"],
            giveTo:   "any",
            exclude:  ["raymond_hammond"],
            text:     "Find {{raymond_hammond}} and ask what a business manager at Thoreson Toys actually does.",
            complete: "Fifteen years of operations. Payroll. Accounts. Ledgers going back further than their tenure."
        },

        {
            id:       "ask_david_work",
            type:     "targeted",
            requires: ["david_richardson"],
            giveTo:   "any",
            exclude:  ["david_richardson"],
            text:     "Find {{david_richardson}} and ask what kind of work a private investigator takes on.",
            complete: "Background checks. Missing persons. Old records. Said most of the interesting ones start with something someone buried a long time ago."
        },

        {
            id:       "ask_marcus_investment",
            type:     "targeted",
            requires: ["marcus_brennan"],
            giveTo:   "any",
            exclude:  ["marcus_brennan"],
            text:     "Find {{marcus_brennan}} and ask how they first got involved with Thoreson Toys.",
            complete: "William made a personal pitch. Said the company was built on solid ground. Said it had a history worth investing in."
        },

        {
            id:       "ask_victoria_investment",
            type:     "targeted",
            requires: ["victoria_ashworth"],
            giveTo:   "any",
            exclude:  ["victoria_ashworth"],
            text:     "Find {{victoria_ashworth}} and ask what drew them to investing in Thoreson Toys.",
            complete: "The story. William told it well. A self-made man, a company built from nothing. It was compelling."
        },

        {
            id:       "ask_vivienne_away",
            type:     "targeted",
            requires: ["vivienne_ashford"],
            giveTo:   "any",
            exclude:  ["vivienne_ashford"],
            text:     "Find {{vivienne_ashford}} and ask where they have been living — and how long they were gone.",
            complete: "Years abroad. Said distance gives you perspective. Said some things look very different from far away."
        },

        {
            id:       "ask_patricia_william",
            type:     "targeted",
            requires: ["patricia_chamberlain"],
            giveTo:   "any",
            exclude:  ["patricia_chamberlain"],
            text:     "Find {{patricia_chamberlain}} and ask how they know William.",
            complete: "Family friend for many years. Said William had changed lately. More anxious. More eager to set things right."
        },

        // ── GENERIC ──────────────────────────────────────────────

        {
            id:       "ask_company_name",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "Ask two different guests what the company is actually called — and if it has always had that name.",
            complete: "Thoreson Toys. Both said it without hesitation. Neither mentioned any other name."
        },

        {
            id:       "ask_founding_year",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "Ask two guests when Thoreson Toys was founded and how it got started.",
            complete: "1902. William came to Dallas and built it himself. That is the story everyone tells."
        },

        {
            id:       "ask_william_lately",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "Ask someone who knows William well: has he seemed different lately? More distracted, more emotional, more urgent about something?",
            complete: "Yes. Something has been weighing on him for months. Nobody knows quite what."
        },

        {
            id:       "ask_announcement",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "Ask two people what they think William's big announcement was going to be about tonight.",
            complete: "Two theories. Nobody actually knows. Everyone has been wondering since the invitation arrived."
        },

        {
            id:       "ask_who_invited",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "Ask two guests how William reached out to invite them — and whether anything about the invitation seemed unusual.",
            complete: "Both said the wording was more serious than a dinner invitation usually warranted. William wanted them there specifically."
        },

        {
            id:       "ask_european_deal",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "The European distribution deal collapse has been the talk of Dallas business circles. Ask someone in the room what happened.",
            complete: "A deal with Hamburg distributors fell through last spring. Money was lost. William went quiet afterward. Nobody got a proper explanation."
        },

        {
            id:       "introduce_yourself",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "Introduce yourself to three people you have not spoken to yet — in character. Tell them who you are and how you know William.",
            complete: "Three introductions. Three connections made. The evening is taking shape."
        },

        {
            id:       "find_ally",
            type:     "generic",
            requires: [],
            giveTo:   "any",
            text:     "By the end of cocktail hour, identify one person in this room you think you can trust. You may need allies before the night is over.",
            complete: "You have someone in mind. Whether that trust holds remains to be seen."
        },

    ]

};
