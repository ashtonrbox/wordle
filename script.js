
let allowedKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

let words = [
    "apple", "baker", "cider", "doubt", "eagle", "flame", "grape", "harsh", "image", "joker",
    "knock", "lemon", "mango", "novel", "ocean", "peace", "quiet", "rider", "spice", "table",
    "umbra", "vivid", "waste", "xerox", "yeast", "zebra", "angry", "blitz", "crisp", "dizzy",
    "elbow", "fable", "globe", "happy", "ivory", "jolly", "kiosk", "logic", "mirth", "naive",
    "orbit", "piano", "quilt", "rebel", "spore", "toxic", "undue", "vigor", "woven", "xenon",
    "yield", "zesty", "amber", "brisk", "clamp", "dense", "evoke", "forge", "grill", "haste",
    "inlet", "jumps", "kneel", "latch", "moist", "nerdy", "optic", "pride", "query", "reign",
    "slice", "truly", "usher", "vowel", "witty", "xylem", "youth", "zonal", "amend", "bravo",
    "crash", "delta", "elite", "flick", "grasp", "hover", "inbox", "judge", "koala", "lapse",
    "mirth", "nudge", "oxide", "plaza", "quirk", "risky", "slope", "tango", "unzip", "vista",
    "wager", "xeric", "yacht", "zebra", "acute", "beast", "candy", "dwell", "ember", "frost",
    "gusto", "haste", "icing", "jewel", "kudos", "lathe", "magma", "nymph", "orbit", "pouch",
    "quasi", "rouse", "stark", "tweak", "unity", "vault", "whale", "xenia", "yummy", "zesty",
    "adopt", "brave", "charm", "dream", "elite", "fable", "grace", "humor", "irony", "jumbo",
    "knoll", "lucky", "music", "noble", "oasis", "plush", "quirk", "raven", "silly", "truce",
    "urban", "vivid", "witty", "xenon", "yacht", "zebra", "aloft", "banjo", "crave", "drama",
    "ethos", "flair", "glide", "haunt", "infer", "joist", "kinda", "lapse", "mirth", "novel",
    "obese", "pique", "quash", "rodeo", "stout", "tryst", "upend", "vexed", "wharf", "xylol",
    "yodel", "zonal", "abide", "blaze", "clash", "dandy", "equip", "fjord", "giddy", "homer",
    "ideal", "jokes", "knees", "layer", "marsh", "nifty", "orbit", "pouch", "quirk", "risky",
    "spine", "truce", "unity", "vague", "whirl", "xenon", "young", "zesty", "admin", "beige",
    "charm", "drown", "ether", "flora", "glory", "honey", "image", "jolly", "koala", "lapse",
    "mirth", "nudge", "onset", "plaza", "quirk", "relic", "swoop", "tango", "utter", "vivid",
    "wager", "xerox", "yield", "zebra", "aback", "abbey", "abbot", "abdot", "abide", "adage",
    "adapt", "addon", "adept", "admit",
    "adobe", "adore", "adult", "agile", "aging", "agony", "ahead", "aimed", "aired", "alarm",
    "album", "alert", "algae", "alias", "alibi", "alien", "align", "alike", "alive", "alley",
    "alpha", "altar", "alter", "amber", "amble", "amend", "amide", "amine", "amino", "amiss",
    "among", "ample", "amply", "amuse", "ancon", "angle", "angry", "ankle", "annex", "annoy",
    "antic", "anvil", "apart", "apex", "apple", "apply", "apron", "arena", "argue", "arise",
    "armed", "armor", "aroma", "arose", "array", "arrow", "art", "aside", "askew", "aspect",
    "assay", "asset", "atone", "attic", "audio", "audit", "augur", "aunty", "avail", "avert",
    "avoid", "awake", "award", "aware", "awful", "baker", "balmy", "banal", "banjo", "barmy",
    "baron", "basic", "basis", "batch", "baton", "beach", "beard", "beast", "beat", "beauty",
    "began", "begin", "begun", "being", "belle", "bench", "berry", "bevel", "binge", "birth",
    "bison", "bitter", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze",
    "bleak", "bleed", "bless", "blimp", "blind", "blink", "bliss", "blitz", "block", "bloom",
    "blown", "blue", "bluff", "blunt", "blush", "board", "boast", "boat", "bodge", "bogey",
    "bogus", "bogie", "boils", "bolus", "bomb", "bonus", "booby", "boost", "booth", "booty",
    "bore", "born", "borne", "bosom", "botch", "bound", "bovid", "bowel", "boxer", "brace",
    "braid", "brake", "brand", "brash", "brave", "break", "breed", "bribe", "brick", "bride",
    "brief", "bring", "broad", "broke", "broil", "bronze", "broom", "broth", "brown", "brush",
    "buddy", "budge", "buggy", "build", "built", "bulky", "bunch", "bunny", "burst", "bury",
    "bushy", "busy", "butch", "butte", "buyer", "cabin", "cable", "cache", "cadet", "caged",
    "cakes", "calm", "cameo", "canal", "candy", "canny", "canoe", "caper", "carat", "cargo",
    "carry", "carte", "carve", "case", "cash", "cast", "catch", "cater", "cause", "cavil",
    "cease", "cedar", "celia", "chain", "chair", "chalk", "charm", "chart", "chase", "cheap",
    "check", "cheek", "cheer", "chess", "chest", "chide", "chief", "child", "chill", "chirp",
    "chive", "choir", "choke", "chomp", "chord", "chore", "chose", "chuck", "churn", "chute",
    "cider", "cigar", "cinch", "circa", "civic", "civil", "clack", "claim", "clamp", "clang",
    "clash", "clasp", "clean", "clear", "cleat", "cleft", "clerk", "click", "cliff", "climb",
    "cloak", "clock", "clone", "close", "cloth", "cloud", "clout", "clown", "cluck", "clump",
    "coach", "coast", "cobra", "cocky", "codon", "coerc", "coign", "coins", "colic", "color",
    "comet", "comfy", "comic", "comma", "conch", "condo", "conte", "cooed", "coral", "corgi",
    "corny", "corps", "corsa", "coset", "costa", "could", "count", "court", "coven", "cover",
    "covet", "crack", "craft", "crane", "crash", "crate", "crave", "crawl", "crazy", "creak",
    "cream", "credo", "creek", "creep", "crest", "crew", "crick", "cries", "crime", "crisp",
    "crop", "cross", "crowd", "crown", "crude", "cruel", "cruise", "crumb", "crump", "crush",
    "crust", "cubic", "cubit", "cudgel", "cuing", "culpa", "cumin", "cunny", "curry", "curse",
    "curve", "cushy", "cutie", "cycle", "cynic", "dacha", "daddy", "daily", "dairy", "dance",
    "dangle", "dapper", "daring", "darky", "darn", "darts", "dash", "date", "daunt", "dawn",
    "daysy", "dazes", "deaf", "deal", "dean", "death", "debug", "debut", "decaf", "decay",
    "deck", "decor", "deeds", "defer", "defog", "deity", "delay", "delta", "delve", "demon",
    "demur", "dense", "denim", "depot", "derby", "derma", "desks", "deter", "deuce", "devil",
    "diary", "dicey", "dicky", "didst", "digit", "dingy", "dinky", "dirty", "disco", "discs",
    "ditch", "ditto", "ditty", "dizzy", "dodge", "doggy", "doing", "dolly", "donor", "doom",
    "dopey", "doubt", "dough", "douse", "dowel", "dozen", "draft", "drain", "drama", "drank",
    "drawl", "dread", "dream", "dress", "dried", "drift", "drill", "drink", "drive", "drone",
    "drove", "drown", "drug", "drums", "drunk", "dryad", "duchy", "ducks", "dud", "duel",
    "duels", "dulce", "dummy", "dump", "dumps", "dunce", "dupe", "dupes", "dural", "dusky",
    "dusty", "dwarf", "dwell", "dwelt", "dying", "eager", "eagle", "early", "earth", "easel",
    "eaten", "eaves", "ebony", "ebony", "echo", "eclat", "edify", "eerie", "egret", "eight",
    "elate", "elder", "elect", "elide", "elite", "elope", "elude", "elute", "email", "embed",
    "ember", "emend", "emoji", "emote", "empty", "enact", "endre", "enemy", "enjoy", "enter",
    "entry", "epoxy", "equal", "equip", "erase", "erode", "error", "erupt", "essay", "ether",
    "ethos", "evade", "event", "every", "evict", "evoke", "exact", "exalt", "excel", "exile",
    "exist", "expel", "extra", "fable", "facet", "facts", "fade", "faint", "fairy", "faith",
    "fake", "falls", "false", "fancy", "fanny", "farad", "fatal", "fauna", "favor", "feast",
    "feign", "fella", "femur", "fence", "ferry", "fetal", "fetch", "fever", "fiber", "field",
    "fiend", "fifth", "fight", "filed", "filmy", "filth", "final", "finch", "finer", "first",
    "fiscal", "fitch", "fiver", "fixed", "fizzy", "flail", "flair", "flake", "flame", "flank",
    "flash", "flask", "flats", "flaunt", "flavor", "flawed", "fleck", "fleet", "flesh", "flick",
    "flier", "flint", "float", "flock", "flood", "floor", "flora", "floss", "flour", "flown",
    "fluff", "fluid", "flush", "flute", "flying", "focal", "focus", "foggy", "foils", "folly",
    "fonts", "foods", "force", "forge", "fork", "form", "forte", "forth", "forty", "forum",
    "found", "foyer", "frame", "frank", "fraud", "freak", "freed", "fresh", "friar", "front",
    "frost", "frown", "froze", "fruit", "fudge", "fully", "fumed", "funny", "furry", "fused",
    "fussy", "fuzzy", "gaffe", "gager", "gains", "gamer", "gamma", "gamut", "gappy", "garde",
    "garry", "gauge", "gaunt", "gauze", "gavel", "gawky", "gazed", "geeks", "genie", "genre",
    "ghost", "giant", "giddy", "gills", "gimme", "girls", "gispy", "git", "given", "giver",
    "glad", "glans", "glare", "glass", "glaze", "gleam", "glide", "glint", "glitz", "gloat",
    "globe", "gloom", "glory", "gloss", "glove", "glyph", "gnarl", "gnash", "gnome", "going",
    "gonna", "goods", "goose", "gotta", "gouty", "grace", "grade", "graft", "grain", "grand",
    "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great",
    "greet", "grief", "grill", "grime", "grind", "gripe", "gross", "group", "grove", "grown",
    "gruel", "grunt", "guard", "guess", "guest", "guide", "guild", "guilt", "guise", "guitar",
    "gulch", "gumbo", "gummy", "gusto", "gusty", "gutta", "gypsy", "habit", "hades", "haiku",
    "hails", "hajis", "halve", "hands", "handy", "hapax", "happy", "hardy", "harem", "harlot",
    "harm", "harsh", "haste", "hasty", "hatch", "hate", "haunt", "haven", "havoc", "hawk",
    "haydn", "heads", "heaps", "heart", "heath", "heave", "heavy", "hedge", "heels", "hefty",
    "heist", "hello", "help", "hence", "henna", "henry", "herbs", "herds", "heron", "hiccup",
    "hicks", "hidden", "hider", "hiked", "hills", "hinge", "hippo", "hired", "hitch", "hives",
    "hoagy", "hobby", "hoist", "hokum", "hole", "holly", "homes", "honey", "honor", "hooks",
    "hoped", "horns", "horse", "hosed", "hotel", "hours", "house", "hover", "howdy", "huffy",
    "human", "humid", "humor", "hunch", "hurry", "hurt", "hutch", "hydra", "hymn", "hyper",
    "icing", "ideal", "idiom", "idiot", "igloo", "image", "imbue", "impel", "imply", "incur",
    "index", "indie", "inept", "inert", "infra", "ingot", "inked", "inner", "input", "intel",
    "inter", "intro", "invest", "ionic", "irate", "iris", "iron", "islet", "issue", "ivory",
    "jacks", "jaded", "jaunt", "jazzy", "jeans", "jelly", "jerks", "jerry", "jests", "jetty",
    "jewel", "jiffy", "jimmy", "jived", "joeys", "johnny", "joins", "joker", "jolly", "jones",
    "joust", "judge", "juice", "juicy", "jumbo", "jumps", "juice", "junky", "juror", "karma",
    "kasai", "kebab", "keeps", "kelps", "kendo", "kerfs", "kernel", "keyed", "kicks", "kiddo",
    "kills", "kinda", "kings", "kiosk", "kissy", "klieg", "knack", "knees", "knife", "knits",
    "knobs", "knock", "knoll", "known", "koala", "kudos", "label", "labor", "laces", "laden",
    "ladle", "lakes", "lance", "lands", "lanes", "lapel", "large", "larks", "laser", "lasso",
    "latch", "later", "latex", "lathe", "laugh", "layer", "layup", "leads", "leafy", "leaky",
    "learn", "lease", "leash", "leave", "leeds", "legal", "lemon", "lends", "leofs", "level",
    "lever", "libel", "licks", "lift", "light", "liked", "liken", "lilac", "limbo", "limit",
    "linen", "lines", "linger", "links", "lions", "lipid", "lisle", "lists", "lite", "lived",
    "liver", "lives", "laden", "local", "locks", "lodge", "logic", "login", "looks", "loose",
    "lords", "lorry", "loses", "loved", "lower", "loyal", "lucid", "lucky", "lumen", "lunch",
    "lungs", "lupus", "lurch", "lures", "lurid", "luser", "lysis", "lythe", "macro", "magic",
    "magma", "mails", "major", "maker", "males", "mamas", "mambo", "manic", "manor", "maple",
    "march", "mares", "margin", "marks", "marry", "marsh", "maser", "mashy", "masks", "match",
    "mated", "mates", "maven", "maxed", "maybe", "mayor", "meals", "meant", "meaty", "medal",
    "media", "memos", "mends", "menus", "mercy", "merge", "merit", "merry", "mesh", "messy",
    "metal", "meter", "metro", "micro", "might", "miles", "mimic", "mince", "minds", "minor",
    "minus", "mirth", "misty", "mitre", "mocks", "model", "modem", "moist", "molar", "moles",
    "molts", "monks", "month", "moods", "moody", "moons", "moral", "mords", "morph", "morse",
    "most", "motto", "mould", "mount", "mouse", "mouth", "moves", "movie", "mower", "muddy",
    "mural", "mused", "music", "muted", "myths", "nadir", "naive", "naked", "names", "nanny",
    "napes", "nares", "naive", "narks", "nasal", "nasty", "natal", "natch", "natty", "naval",
    "navel", "needs", "needy", "nerve", "nests", "never", "newly", "nicer", "niche", "night",
    "noble", "nodes", "noise", "noisy", "north", "noted", "notes", "novel", "nudge", "nurse",
    "nutty", "nylon", "oasis", "obese", "occur", "ocean", "oddly", "offer", "often", "ogled",
    "ogres", "ohmic", "older", "olive", "omega", "onion", "onset", "open", "opera", "optic",
    "orbit", "order", "organ", "other", "ought", "ounce", "outer", "outgo", "ovals", "oxide",
    "ozone", "paces", "packs", "paddy", "pages", "pains", "paint", "pairs", "palms", "pampa",
    "papal", "paper", "parch", "pares", "parse", "parts", "party", "pasty", "patch", "paths",
    "pause", "peace", "peak", "pearl", "pecan", "pedal", "peeks", "peers", "peeve", "penis",
    "penny", "perch", "peril", "perks", "pesky", "pests", "petal", "petty", "phase", "phone",
    "photo", "piano", "picks", "piece", "piers", "piggy", "pilaf", "pilot", "pinch", "pitch",
    "place", "plain", "plane", "plank", "plate", "plays", "plaza", "plead", "pleas", "pledge",
    "pluck", "plumb", "plume", "plump", "plush", "poach", "poesy", "point", "poise", "polar",
    "poles", "polio", "polls", "polly", "pooch", "pooks", "pools", "porch", "pores", "porky",
    "ports", "posed", "poses", "posts", "pouch", "pound", "power", "prank", "press", "prick",
    "pride", "prime", "print", "prior", "prize", "probe", "prose", "proud", "prove", "proxy",
    "prude", "prune", "psalm", "pulse", "punch", "pupil", "puppy", "purge", "purse", "push",
    "putte", "quack", "quail", "qualm", "quark", "quart", "quasi", "queen", "queer", "quell",
    "query", "quest", "queue", "quick", "quiet", "quill", "quilt", "quirk", "quite", "quote",
    "rabid", "radar", "radii", "radio", "raids", "rails", "rains", "raise", "rally", "ramps",
    "ranch", "rapid", "rated", "ratel", "ratio", "ratty", "ravens", "razor", "reach", "react",
    "ready", "realm", "reams", "reap", "rebel", "rebid", "recap", "recut", "redid", "redux",
    "reeds", "reeks", "reels", "refer", "reign", "relax", "relay", "relic", "remax", "remix",
    "rents", "repay", "reply", "reset", "resin", "rests", "retro", "retry", "reuse", "revel",
    "revue", "rhyme", "ridge", "rifle", "right", "rigid", "rings", "rinse", "riots", "rises",
    "risks", "risky", "ritzy", "river", "roach", "roads", "roams", "roars", "roast", "robot",
    "rocks", "rodeo", "rogue", "rolls", "roman", "roofs", "rooms", "roost", "roots", "ropes",
    "roses", "rotor", "rough", "round", "route", "rover", "royal", "ruddy", "rugby", "ruler",
    "rumba", "rumor", "runny", "rural", "rusty", "sable", "sacks", "sadly", "safer", "saggy",
    "sails", "saint", "sally", "salon", "salsa", "salt", "samba", "sample", "sandy", "saner",
    "sappy", "sauce", "saucy", "sauna", "saved", "scale", "scant", "scare", "scene", "scent",
    "scene", "style", "suave", "swift", "abide", "acres", "adapt", "admit", "adorn", "adult", "affix", "after", "alarm", "alert",
    "alien", "alike", "alley", "along", "alpha", "alter", "amble", "amber", "amine", "among",
    "ample", "angel", "anger", "ankle", "annex", "antic", "apart", "apron", "argon", "argue",
    "arise", "armor", "arrow", "arrest", "artist", "ascot", "aside", "asked", "aspect", "aspen",
    "assay", "attic", "audio", "audit", "aunty", "awake", "award", "aware", "awful", "badge",
    "bagel", "baker", "balmy", "banjo", "barge", "basic", "batch", "beach", "beard", "bells",
    "bench", "berry", "biome", "birth", "blade", "blame", "bleak", "blend", "bloom", "board",
    "boast", "bones", "boost", "booth", "borne", "bound", "braid", "brake", "brand", "brave",
    "break", "breed", "brick", "bride", "bring", "broad", "broke", "broth", "brown", "brush",
    "build", "bulky", "bunch", "burst", "bushy", "butch", "buyer", "cable", "cadet", "calm",
    "canal", "candy", "canoe", "caper", "carry", "cater", "catch", "cause", "chain", "chair",
    "chalk", "charm", "chase", "cheap", "check", "cheek", "child", "chirp", "choir", "choke",
    "chord", "chose", "chuck", "churn", "civic", "claim", "clash", "clasp", "clean", "clear",
    "clerk", "click", "climb", "clock", "close", "cloud", "clown", "coach", "coast", "coins",
    "color", "comic", "coral", "count", "court", "cover", "crack", "craft", "crane", "crash",
    "crave", "crazy", "cream", "creek", "creep", "crime", "crisp", "cross", "crowd", "crown",
    "crude", "crush", "cubic", "curse", "curve", "cycle", "daily", "dance", "dares", "dawn",
    "deals", "death", "delta", "demon", "dense", "depth", "derby", "design", "desks", "deter",
    "devil", "diary", "digit", "diner", "dirty", "disco", "dodge", "doing", "dolly", "doors",
    "doubt", "draft", "drama", "dream", "dress", "drift", "drill", "drive", "drone", "drove",
    "drunk", "dwarf", "dying", "eager", "early", "earth", "easel", "eaten", "edges", "eight",
    "elder", "elect", "elite", "elope", "email", "ember", "emily", "empty", "enemy", "enjoy",
    "enter", "entry", "equal", "erase", "erode", "error", "essay", "ether", "evade", "event",
    "every", "exact", "excel", "exist", "extra", "fable", "facing", "fairy", "faith", "fake",
    "false", "fancy", "fatal", "feast", "fever", "fiber", "field", "fifth", "fight", "files",
    "filmy", "final", "first", "fixed", "flame", "flash", "flask", "fleet", "flick", "float",
    "flock", "flood", "floor", "flora", "fluid", "flute", "focal", "focus", "foggy", "folly",
    "force", "forge", "form", "forth", "forum", "found", "frame", "frank", "fresh", "front",
    "frost", "fruit", "funny", "fused", "fuzzy", "gauge", "gaunt", "giant", "giddy", "girls",
    "given", "glare", "glass", "gleam", "globe", "glory", "glove", "going", "grace", "grade",
    "grain", "grand", "graph", "grasp", "great", "green", "greet", "grief", "grill", "grind",
    "gross", "group", "grove", "grown", "guard", "guess", "guide", "guild", "guilt", "guitar",
    "haiku", "hands", "handy", "happy", "hardy", "harm", "harsh", "haste", "hate", "haunt",
    "heart", "heave", "heavy", "hedge", "hello", "help", "hence", "herbs", "hides", "hills",
    "hinge", "hired", "hobby", "home", "honor", "hooks", "horse", "hosts", "hotel", "hours",
    "house", "hover", "human", "humor", "hurry", "icing", "ideal", "image", "imply", "index",
    "indie", "inner", "input", "inter", "ionic", "irate", "irons", "issue", "items", "ivory",
    "jaded", "jazzy", "jeans", "jelly", "jewel", "jimmy", "joins", "joker", "jolly", "jones",
    "judge", "juicy", "jumbo", "jumps", "karma", "keeps", "kicks", "kills", "kinds", "kings",
    "knife", "knock", "known", "label", "labor", "lakes", "lance", "lands", "large", "laser",
    "latch", "later", "laugh", "layer", "leads", "learn", "lease", "leave", "legal", "lemon",
    "level", "lever", "light", "liked", "lines", "links", "lions", "lists", "lived", "local",
    "locks", "logic", "loose", "lords", "loved", "lower", "loyal", "lucky", "lunch", "lying",
    "magic", "major", "make", "maker", "males", "march", "marks", "marry", "match", "mates",
    "maybe", "mayor", "meals", "meant", "medal", "media", "meets", "menus", "mercy", "merge",
    "merit", "merry", "mesh", "metal", "micro", "might", "miles", "mimic", "minds", "minor",
    "minus", "mirth", "misty", "model", "moist", "molar", "moral", "morse", "mount", "mouse",
    "mouth", "movie", "mower", "music", "myths", "naive", "names", "nanny", "nasty", "naval",
    "needs", "nerve", "never", "night", "noble", "noise", "north", "noted", "novel", "nurse",
    "occur", "ocean", "offer", "often", "older", "olive", "onion", "open", "opera", "orbit",
    "order", "organ", "other", "ounce", "outer", "ovals", "oxide", "paces", "pages", "paint",
    "pairs", "panel", "panic", "paper", "park", "parse", "party", "peace", "peach", "pearl",
    "pedal", "peers", "peeve", "phase", "phone", "photo", "piano", "picks", "piece", "piles",
    "pilot", "pinch", "pitch", "place", "plain", "plane", "plate", "plaza", "plead", "point",
    "poise", "polar", "poles", "polls", "porch", "ports", "posed", "posts", "power", "press",
    "pride", "prime", "print", "prize", "probe", "prove", "proxy", "pulse", "punch", "pupil",
    "purge", "purse", "push", "queen", "query", "quest", "quick", "quiet", "quite", "radar",
    "radio", "rails", "raise", "rally", "realm", "reams", "rebel", "recap", "recut", "redo",
    "reeks", "reels", "refer", "reign", "relax", "relay", "remix", "renew", "rents", "reply",
    "reset", "resin", "retro", "retry", "revel", "rhyme", "ridge", "right", "rigid", "rings",
    "rises", "risks", "risky", "river", "roads", "roams", "robot", "rocks", "rodeo", "rolls",
    "roots", "rough", "round", "route", "royal", "rugby", "ruler", "rumor", "rural", "rusty",
    "sacks", "safer", "saint", "salon", "salty", "sample", "sandy", "saner", "sauce", "saved",
    "scale", "scant", "scene", "score", "scout", "scrap", "seats", "sense", "serve", "setup",
    "seven", "shade", "shake", "shall", "shape", "share", "sharp", "shelf", "shell", "shine",
    "shirt", "shock", "shoot", "shore", "short", "shout", "shown", "sides", "sight", "silly",
    "since", "sinks", "sites", "sixth", "sizes", "skill", "skips", "slack", "slate", "slave",
    "slice", "slide", "slope", "small", "smart", "smile", "smoke", "snack", "snake", "sneak",
    "solve", "sorry", "sound", "south", "space", "spare", "spark", "speak", "speed", "spell",
    "spend", "spike", "spine", "split", "spoke", "spray", "squad", "stain", "stake", "stand",
    "stare", "start", "state", "stays", "steal", "steam", "steel", "steep", "steer", "stick",
    "stiff", "still", "stock", "stole", "stone", "stony", "store", "storm", "story", "stove",
    "strap", "straw", "stray", "strip", "stuck", "study", "stuff", "style", "sugar", "suite",
    "sunny", "super", "surge", "swear", "sweep", "sweet", "swift", "swing", "switch", "sword",
    "table", "taken", "talks", "taste", "teach", "tears", "teens", "teens", "tells", "tempo",
    "tends", "tense", "terms", "tests", "thank", "theft", "theme", "there", "thick", "thing",
    "think", "third", "those", "three", "throw", "thumb", "tiger", "tight", "times", "tired",
    "title", "toast", "today", "token", "tonal", "tools", "tooth", "topic", "torch", "total",
    "touch", "tough", "tours", "towel", "tower", "track", "trade", "train", "trash", "treat",
    "trend", "trial", "trick", "tried", "trips", "troop", "truck", "truly", "trump", "trust",
    "truth", "tubes", "tulip", "turns", "twice", "twine", "twist", "types", "uncle", "under",
    "union", "unite", "units", "unzip", "upset", "urban", "urine", "users", "using", "usual",
    "valve", "venom", "verse", "vibes", "video", "views", "vigil", "vital", "vocal", "voice",
    "volt", "volts", "voted", "voter", "wages", "wagon", "waist", "walk", "walls", "wants",
    "warns", "waste", "watch", "water", "wave", "wears", "weave", "weeds", "weeks", "weird",
    "wells", "whale", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose",
    "wider", "wife", "wild", "wind", "wines", "wings", "wire", "wise", "wish", "witch",
    "world", "worry", "wound", "write", "wrong", "yacht", "yards", "years", "yield", "young",
    "yours", "youth", "zesty", "zones",     "abyss", "acorn", "adept", "admin", "adobe", "adopt", "aegis", "aerie", "affix", "afire",
    "afoot", "afoul", "agape", "agate", "agave", "agent", "agile", "aglow", "agony", "agora",
    "agree", "ahead", "ahold", "aider", "aimer", "aioli", "aisle", "alarm", "album", "alder",
    "aleph", "alert", "algae", "algal", "alias", "alibi", "alien", "align", "alike", "alive",
    "alkyd", "allay", "alley", "allot", "allow", "alloy", "allyl", "aloft", "aloof", "aloud",
    "alpha", "altar", "alter", "altos", "alula", "amass", "amaze", "amber", "ambit", "amble",
    "ambos", "amend", "amide", "amine", "amino", "amiss", "amity", "amnio", "amour", "ample",
    "amply", "amuse", "ancho", "angel", "anger", "angle", "angry", "angst", "anima", "anime",
    "anion", "anise", "ankle", "annex", "annoy", "annul", "anode", "antic", "antis", "anvil",
    "aorta", "apace", "apart", "apeak", "apery", "aphid", "apian", "aping", "apish", "apnea",
    "apple", "apply", "apron", "apses", "apsis", "aptly", "arbor", "ardor", "areal", "areas",
    "areca", "arena", "argon", "argot", "argue", "argus", "arias", "arils", "arise", "armed",
    "armor", "aroma", "arose", "array", "arrow", "arses", "arson", "artsy", "asana", "ascot",
    "ashen", "ashes", "aside", "asked", "asker", "askew", "aspen", "aspic", "assai", "assay",
    "asses", "asset", "aster", "astir", "asura", "atlas", "atman", "atoll", "atoms", "atone",
    "atony", "atopy", "atria", "attar", "attic", "audio", "audit", "auger", "aught", "augur",
    "aunts", "aunty", "aurae", "aural", "auras", "auric", "autos", "auxin", "avail", "avers",
    "avert", "avian", "avoid", "avows", "await", "awake", "award", "aware", "awash", "awful",
    "awing", "awned", "awoke", "axels", "axial", "axile", "axing", "axiom", "axion", "axles",
    "axman", "axmen", "axone", "axons", "ayins", "azide", "azole", "azure", "babel", "babes",
    "baccy", "backs", "bacon", "baddy", "badge", "badly", "bagel", "baggy", "bails", "bairn",
    "baits", "baize", "baked", "baker", "bakes", "baldy", "baled", "baler", "bales", "balks",
    "balky", "balls", "balms", "balmy", "balsa", "banal", "bands", "bandy", "banes", "bangs",
    "banjo", "banks", "banns", "barbs", "bards", "bared", "barer", "bares", "barge", "barks",
    "barmy", "barns", "baron", "barre", "basal", "based", "baser", "bases", "basic", "basil",
    "basin", "basis", "basks", "basso", "baste", "batch", "bated", "bathe", "baths", "batik",
    "baton", "batty", "bauds", "baulk", "bawdy", "bawls", "bayed", "bayou", "beach", "beads",
    "beady", "beaks", "beams", "beamy", "beano", "beans", "beard", "bears", "beast", "beats",
    "beaus", "beaut", "beaux", "bebop", "becks", "beech", "beefs", "beefy", "beeps", "beers",
    "beery", "beets", "befit", "began", "beget", "begin", "begun", "beige", "being", "belay",
    "belch", "belie", "belle", "bells", "belly", "below", "belts", "bench", "bends", "bendy",
    "bento", "bents", "beret", "bergs", "berms", "berry", "berth", "beryl", "beset", "bests",
    "betas", "betel", "betta", "bevel", "bezel", "bhaji", "bible", "bicep", "biddy", "bided",
    "bides", "bidet", "biers", "biffs", "bifid", "biggy", "bigot", "bijou", "biked", "biker",
    "bikes", "biles", "bilge", "bills", "billy", "bimbo", "binal", "bindi", "binds", "binge",
    "bingo", "biome", "biota", "biped", "birch", "birds", "birth", "bison", "bitch", "biter",
    "bites", "bitsy", "bitty", "blabs", "black", "blade", "blame", "bland", "blank", "blare",
    "blase", "blast", "blaze", "bleak", "blear", "bleat", "bleed", "bleep", "blend", "bless",
    "blimp", "blind", "bling", "blini", "blink", "blips", "bliss", "blitz", "bloat", "blobs",
    "block", "blocs", "blogs", "bloke", "blond", "blood", "bloom", "blots", "blown", "blows",
    "blowy", "blued", "bluer", "blues", "bluff", "blunt", "blurb", "blurs", "blurt", "blush",
    "board", "boars", "boast", "boats", "bobby", "bocce", "boche", "boded", "bodes", "boffo",
    "bogey", "boggy", "bogie", "bogus", "boils", "bolas", "boles", "bolls", "bolos", "bolts",
    "bolus", "bombe", "bombs", "bonds", "boned", "boner", "bones", "boney", "bongo", "bongs",
    "bonks", "bonny", "bonus", "boobs", "booby", "booed", "books", "booms", "boomy", "boons",
    "boors", "boost", "booth", "boots", "booty", "booze", "boozy", "borax", "bored", "borer",
    "bores", "boric", "borne", "boron", "bosom", "bossy", "bosun", "botch", "bough", "boule",
    "bound", "bouts", "bowed", "bowel", "bower", "bowls", "boxed", "boxer", "boxes", "boyar",
    "boyos", "bozos", "brace", "bract", "brads", "braes", "brags", "braid", "brain", "brake",
    "brand", "brans", "brash", "brass", "brats", "brave", "bravo", "brawl", "brawn", "brays",
    "braze", "bread", "break", "bream", "breed", "brent", "breve", "brews", "briar", "bribe",
    "brick", "bride", "brief", "brier", "brigs", "brims", "brine", "bring", "brink", "briny",
    "brisk", "brits", "broad", "broil", "broke", "bronc", "brood", "brook", "broom", "broth",
    "brown", "brows", "bruin", "bruit", "brunt", "brush", "brute", "bubba", "bucks", "buddy",
    "budge", "buffs", "buggy", "bugle", "build", "built", "bulbs", "bulge", "bulks", "bulky",
    "bulla", "bulls", "bully", "bumps", "bumpy", "bunch", "bunco", "bunds", "bunny", "bunts",
    "buoys", "burbs", "burgs", "burka", "burly", "burns", "burnt", "burps", "burqa", "burro",
    "burrs", "bursa", "burst", "bused", "buses", "bushy", "busts", "busty", "butch", "butte",
    "butts", "buxom", "buyer", "buzzy", "bylaw", "byres", "bytes", "byway", "cabal", "cabby",
    "caber", "cabin", "cable", "cacao", "cache", "cacti", "caddy", "cadet", "cadre", "cafes",
    "caged", "cages", "cagey", "cairn", "caked", "cakes", "cakey", "calfs", "calif", "calix",
    "calks", "calla", "calls", "calms", "calve", "calyx", "camel", "cameo", "campo", "camps",
    "campy", "canal", "candy", "caned", "canes", "canny", "canoe", "canon", "canto", "caped",
    "caper", "capes", "capon", "capos", "caput", "carat", "carbs", "cards", "cared", "carer",
    "cares", "cargo", "carob", "carol", "carom", "carps", "carry", "carte", "carts", "carve",
    "cased", "cases", "casks", "caste", "casts", "catch", "cater", "catty", "caulk", "cause",
    "caved", "caver", "caves", "cavil", "cease", "cecal", "cecum", "cedar", "ceded", "cedes",
    "ceili", "celeb", "cello", "cells", "celts", "cents", "chads", "chafe", "chaff", "chain",
    "chair", "chalk", "champ", "chant", "chaos", "chaps", "chard", "charm", "chars", "chart",
    "chase", "chasm", "chats", "cheap", "cheat", "check", "cheek", "cheep", "cheer", "chefs",
    "chert", "chess", "chest", "chews", "chewy", "chick", "chico", "chide", "chief", "child",
    "chile", "chili", "chill", "chime", "chimp", "china", "chine", "ching", "chino", "chins",
    "chips", "chirp", "chits", "chive", "chock", "choir", "choke", "chomp", "chops", "chord",
    "chore", "chose", "chows", "chuck", "chuff", "chugs", "chump", "chums", "chunk", "churn",
    "chute", "cider", "cigar", "cilia", "cinch", "circa", "cisco", "cited", "cites", "civet",
    "civic", "civil", "clack", "clade", "claim", "clamp", "clams", "clang", "clank", "clans",
    "claps", "clash", "clasp", "class", "clave", "claws", "clays", "clean", "clear", "cleat",
    "cleft", "clerk", "click", "cliff", "climb", "clime", "cline", "cling", "clink", "clips",
    "cloak", "clock", "clods", "clogs", "clomp", "clone", "close", "cloth", "clots", "cloud",
    "clout", "clove", "clown", "clubs", "cluck", "clued", "clues", "clump", "clung", "clunk",
    "coach", "coals", "coast", "coati", "coats", "cobia", "cobra", "cocci", "cocks", "cocky",
    "cocoa", "codas", "codec", "coded", "coder", "codes", "codex", "codon", "coeds", "cohos",
    "coifs", "coils", "coins", "cokes", "colas", "colds", "colic", "colon", "color", "colts",
    "comas", "combo", "combs", "comer", "comes", "comet", "comfy", "comic", "comma", "commo",
    "compo", "comps", "conch", "condo", "coned", "cones", "coney", "conga", "conic", "conks",
    "cooed", "cooks", "cools", "coops", "coopt", "coped", "copes", "copra", "copse", "coral",
    "cords", "cored", "corer", "cores", "corgi", "corks", "corky", "corms", "corns", "cornu",
    "corny", "corps", "costs", "cotta", "couch", "cough", "could", "count", "coupe", "coups",
    "court", "coven", "cover", "coves", "covet", "covey", "cowed", "cower", "cowls", "coyly",
    "crabs", "crack", "craft", "crags", "cramp", "crams", "crane", "crank", "crape", "craps",
    "crash", "crass", "crate", "crave", "crawl", "craws", "craze", "crazy", "creak", "cream",
    "credo", "creed", "creek", "creel", "creep", "creme", "crepe", "crept", "cress", "crest",
    "crews", "cribs", "crick", "cried", "crier", "cries", "crime", "crimp", "crisp", "croak",
    "crock", "crocs", "croft", "crone", "crony", "crook", "croon", "crops", "cross", "croup",
    "crowd", "crown", "crows", "crude", "cruel", "cruet", "crumb", "crush", "crust", "crypt",
    "cubby", "cubed", "cubes", "cubic", "cubit", "cuffs", "cuing", "cukes", "culls", "culpa",
    "cults", "cumin", "cupid", "cuppa", "curbs", "curds", "cured", "curer", "cures", "curia",
    "curio", "curls", "curly", "curry", "curse", "curve", "curvy", "cushy", "cusps", "cuter",
    "cutie", "cutis", "cutup", "cycad", "cycle", "cyclo", "cynic", "cysts", "czars", "dacha",
    "daddy", "dados", "daffy", "dairy", "daisy", "dales", "dally", "dames", "damns", "damps",
    "dance", "dandy", "dared", "dares", "darks", "darts", "dashi", "dated", "dater", "dates",
    "datum", "daubs", "daunt", "davit", "dawns", "dazed", "deals", "dealt", "deans", "dears",
    "deary", "death", "debit", "debts", "debug", "debut", "decaf", "decal", "decay", "decks",
    "decor", "decoy", "decry", "deeds", "deems", "deeps", "defer", "defog", "degas", "degum",
    "deice", "deify", "deign", "deism", "deist", "deity", "delay", "delft", "delis", "dells",
    "delta", "delve", "demon", "demos", "demur", "denim", "dense", "dents", "depot", "depth",
    "derby", "desks", "deter", "detox", "deuce", "devil", "dewar", "dhikr", "dhows", "dials",
    "diary", "diced", "dices", "dicey", "dicky", "dicta", "diets", "digit", "diked", "dikes",
    "dills", "dilly", "dimer", "dimes", "dimly", "dinar", "dined", "diner", "dines", "dingo",
    "dings", "dingy", "dinks", "dinky", "dinos", "diode", "dippy", "direr", "dirge", "dirty",
    "disco", "discs", "dishy", "disks", "ditch", "ditsy", "ditto", "ditty", "ditzy", "divan",
    "divas", "dived", "diver", "dives", "divot", "divvy", "dizzy", "docks", "dodge", "dodgy",
    "dodos", "doers", "doffs", "doges", "doggy", "dogma", "doily", "doing", "doled", "doles",
    "dolls", "dolly", "dolor", "dolts", "domed", "domes", "donee", "dongs", "donna", "donor",
    "donut", "dooms", "doors", "doozy", "doped", "dopes", "dopey", "dorks", "dorky", "dorms",
    "dosed", "doses", "doted", "doter", "dotes", "dotty", "doubt", "dough", "douse", "doves",
    "dowdy", "dowel", "dower", "downs", "downy", "dowry", "dowse", "doyen", "dozed", "dozen",
    "dozer", "dozes", "draft", "drags", "drain", "drake", "drama", "drams", "drank", "drape",
    "drawl", "drawn", "draws", "drays", "dread", "dream", "dreck", "dregs", "dress", "dribs",
    "dried", "drier", "dries", "drift", "drill", "drily", "drink", "drips", "drive", "droid",
    "droll", "drone", "drool", "droop", "drops", "dross", "drove", "drown", "drugs", "druid",
    "drums", "drunk", "dryad", "dryer", "dryly", "duals", "ducal", "ducat", "duchy", "ducks",
    "ducky", "ducts", "dudes", "duels", "duets", "duffs", "dukes", "dulls", "dully", "dulse",
    "dummy", "dumps", "dumpy", "dunce", "dunes", "dunks", "duomo", "duped", "dupes", "dural",
    "durum", "dusky", "dusts", "dusty", "dutch", "duvet", "dwarf", "dweeb", "dwell", "dwelt",
    "dyads", "dyers", "dying", "dykes", "eager", "eagle", "eared", "earls", "early", "earns",
    "earth", "eased", "easel", "eases", "eaten", "eater", "eaves", "ebbed", "ebony", "ebook",
    "echos", "eclat", "edema", "edged", "edger", "edges", "edict", "edify", "edits", "eejit",
    "eerie", "egged", "egret", "eider", "eight", "eject", "eking", "eland", "elate", "elbow",
    "elder", "elect", "elegy", "elfin", "elide", "elite", "elope", "elude", "elute", "elven",
    "elves", "email", "embed", "ember", "emcee", "emery", "emirs", "emits", "emoji", "emote",
    "empty", "enact", "ended", "ender", "endow", "enema", "enemy", "enjoy", "ennui", "enoki",
    "enrol", "ensue", "enter", "entry", "envoy", "eosin", "epics", "epoch", "epoxy", "equal",
    "equip", "erase", "erect", "ergot", "erode", "erred", "error", "erupt", "essay", "ester",
    "ether", "ethic", "ethos", "ethyl", "etude", "euros", "evade", "evens", "event", "every",
    "evict", "evils", "evoke", "ewers", "exact", "exalt", "exams", "excel", "execs", "exert",
    "exile", "exist", "exits", "expat", "expel", "expos", "extol", "extra", "exude", "exult",
    "exurb", "eying", "eyrie", "fable", "faced", "facer", "faces", "facet", "facia", "facts",
    "faded", "fader", "fades", "faery", "fails", "faint", "fairs", "fairy", "faith", "faked",
    "faker", "fakes", "fakie", "fakir", "falls", "false", "famed", "fancy", "fangs", "fanny",
    "farce", "fared", "fares", "farms", "farts", "fasts", "fatal", "fated", "fates", "fatso",
    "fatty", "fatwa", "fault", "fauna", "fauns", "favas", "faves", "favor", "fawns", "faxed",
    "faxes", "fazed", "fears", "feast", "feats", "fecal", "feces", "feeds", "feels", "feign",
    "feint", "fella", "fells", "felon", "felts", "femme", "femur", "fence", "fends", "feral",
    "feria", "ferns", "ferny", "ferry", "fests", "fetal", "fetch", "feted", "fetes", "fetid",
    "fetus", "feuds", "fever", "fewer", "fiber", "fibre", "fiche", "ficus", "fiefs", "field",
    "fiend", "fiery", "fifes", "fifth", "fifty", "fight", "filar", "filch", "filed", "filer",
    "files", "filet", "fills", "filly", "films", "filmy", "filth", "final", "finch", "finds",
    "fined", "finer", "fines", "finis", "finks", "fiord", "fired", "fires", "firms", "first",
    "fishy", "fists", "fitly", "fiver", "fives", "fixed", "fixer", "fixes", "fizzy", "fjord",
    "flack", "flags", "flail", "flair", "flake", "flaky", "flame", "flank", "flans", "flaps",
    "flare", "flash", "flask", "flats", "flaws", "flays", "fleas", "fleck", "flees", "fleet",
    "flesh", "flick", "flier", "flies", "fling", "flint", "flips", "flirt", "float", "flock",
    "flogs", "flood", "floor", "flops", "flora", "floss", "flour", "flout", "flown", "flows",
    "flubs", "flues", "fluff", "fluid", "fluke", "fluky", "flume", "flung", "flunk", "flush",
    "flute", "flyby", "foals", "foams", "foamy", "focal", "focus", "fogey", "foggy", "foils",
    "foist", "folds", "folia", "folic", "folio", "folks", "folly", "fondu", "fonts", "foods",
    "fools", "foots", "foray", "force", "forge", "forgo", "forks", "forte", "forth", "forts",
    "forty", "forum", "fouls", "found", "fount", "fours", "fovea", "fowls", "foxed", "foxes",
    "foyer", "frail", "frame", "franc", "frank", "fraud", "frays", "freak", "freed", "freer",
    "frees", "fresh", "frets", "friar", "fried", "fries", "frigs", "frill", "frisk", "fritz",
    "frizz", "frock", "frogs", "frond", "front", "frost", "froth", "frown", "froze", "fruit",
    "fryer", "fudge", "fuels", "fugue", "fully", "fumed", "fumes", "funds", "fungi", "funky",
    "funny", "furls", "furor", "furry", "fused", "fuses", "fussy", "fusty", "futon", "fuzzy",
    "gabby", "gable", "gaffe", "gaily", "gains", "gamer", "games", "gamey", "gamma", "gamut",
    "gassy", "gated", "gates", "gator", "gaudy", "gauge", "gaunt", "gauze", "gavel", "gawks",
    "gawky", "gayer", "gayly", "gazed", "gazes", "gears", "gecko", "geeks", "geeky", "geese",
    "genie", "genre", "gents", "genus", "germs", "getup", "ghost", "ghoul", "giant", "giddy",
    "gifts", "gilds", "gills", "girly", "giros", "girth", "given", "giver", "gives", "glade",
    "glads", "gland", "glare", "glass", "glaze", "gleam", "glean", "glide", "glint", "gloat",
    "globe", "gloom", "glory", "gloss", "glove", "glows", "glued", "glues", "gluey", "gluon",
    "gluts", "glyph", "gnarl", "gnash", "gnats", "gnaws", "gnome", "goads", "goals", "goats",
    "godly", "goers", "gofer", "going", "golds", "golem", "golfs", "golly", "gonad", "goner",
    "gongs", "goods", "goody", "gooey", "goofs", "goofy", "goons", "goose", "gored", "gores",
    "gorge", "gorse", "gouge", "gourd", "gouts", "gouty", "gowns", "grabs", "grace", "grade",
    "graft", "grail", "grain", "grams", "grand", "grant", "grape", "graph", "grasp", "grass",
    "grate", "grave", "gravy", "graze", "great", "greed", "green", "greet", "grief", "grill",
    "grime", "grimy", "grind", "grins", "gripe", "grips", "grist", "grits", "groan", "groat",
    "groin", "groom", "grope", "gross", "group", "grout", "grove", "growl", "grown", "grows",
    "grubs", "gruel", "gruff", "grunt", "guano", "guard", "guava", "guess", "guest", "guide",
    "guild", "guile", "guilt", "guise", "gulch", "gulps", "gummy", "guppy", "gurus", "gushy",
    "gusto", "gusts", "gusty", "gutsy", "habit", "hacks", "hades", "hadji", "haiku", "hails",
    "hairs", "hairy", "halls", "halos", "halts", "halve", "hands", "handy", "hangs", "hanks",
    "hanky", "happy", "hardy", "harem", "hares", "harks", "harms", "harps", "harpy", "harry",
    "harsh", "harts", "hasps", "haste", "hasty", "hatch", "hated", "hater", "hates", "hauls",
    "haunt", "haven", "haves", "havoc", "hawks", "hayed", "hayer", "hayey", "hazed", "hazel",
    "hazer", "hazes", "heads", "heady", "heals", "heaps", "heard", "hears", "heart", "heath",
    "heats", "heave", "heavy", "hedge", "heeds", "heels", "hefts", "hefty", "heirs", "helix",
    "hello", "hells", "helms", "helps", "hence", "herbs", "herds", "heron", "hertz", "hewed",
    "hewer", "hider", "hides", "highs", "hiked", "hiker", "hikes", "hills", "hilly", "hilts",
    "hinge", "hints", "hippo", "hippy", "hired", "hirer", "hires", "hitch", "hived", "hives",
    "hoagy", "hoard", "hoary", "hobby", "hobos", "hocks", "hoist", "hokey", "hokum", "holds",
    "holed", "holes", "holey", "holly", "homer", "homes", "homey", "honed", "hones", "honey",
    "honks", "honor", "hooch", "hoods", "hooey", "hoofs", "hooks", "hooky", "hoops", "hoots",
    "hoped", "hopes", "hoppy", "horde", "horns", "horny", "horse", "hosed", "hoses", "hosts",
    "hotel", "hound", "hours", "house", "hovel", "hover", "howdy", "howls", "hubby", "huffs",
    "huffy", "huger", "hulas", "hulks", "hulky", "hullo", "hulls", "human", "humid", "humor",
    "humph", "humps", "humpy", "humus", "hunch", "hunks", "hunky", "hunts", "hurls", "hurly",
    "hurry", "hurts", "husks", "husky", "hussy", "hutch", "hydra", "hydro", "hyena", "hying",
    "hymen", "hymns", "hyped", "hyper", "hypes", "iambs", "icier", "icily", "icing", "icons",
    "ideal", "ideas", "idiom", "idiot", "idled", "idler", "idles", "idols", "igloo", "ikats",
    "image", "imbue", "impel", "imply", "inane", "inbox", "incur", "index", "indie", "inept",
    "inert", "infer", "ingot", "inked", "inlay", "inlet", "inner", "input", "inset", "intel",
    "inter", "intro", "ionic", "iotas", "irate", "irked", "irons", "irony", "isles", "islet", "issue", "itchy",
    "items", "ivies", "ivory", "jacks", "jaded", "jades", "jaggy", "jails", "jambs", "jammy",
    "janes", "janky", "jaunt", "jazzy", "jeans", "jeeps", "jeers", "jelly", "jenny", "jerks",
    "jerky", "jests", "jetty", "jewel", "jibed", "jibes", "jiffs", "jiffy", "jihad", "jilts",
    "jimmy", "jingo", "jinks", "jived", "jives", "jocks", "joeys", "johns", "joins", "joint",
    "joked", "joker", "jokes", "jolly", "jolts", "joule", "joust", "jowls", "jowly", "joyed",
    "judge", "juice", "juicy", "julep", "jumbo", "jumps", "jumpy", "junco", "junks", "junky",
    "junta", "junto", "juror", "kabob", "kales", "kaput", "karma", "kayak", "kebab", "kebob",
    "keels", "keens", "keeps", "kefir", "kelly", "kelps", "kelpy", "kenaf", "ketch", "keyed",
    "khaki", "kicks", "kiddo", "kiddy", "kiefs", "kills", "kilns", "kilos", "kilts", "kinda",
    "kinds", "kings", "kinks", "kinky", "kiosk", "kirks", "kited", "kites", "kitty", "kiwis",
    "klieg", "knack", "knave", "knead", "kneed", "kneel", "knees", "knell", "knelt", "knife",
    "knish", "knits", "knobs", "knock", "knoll", "knots", "knout", "known", "knows", "koala",
    "koine", "kooks", "kooky", "korma", "krill", "krona", "krone", "kudos", "kudzu", "kulak",
    "kyrie", "label", "labia", "labor", "laced", "lacer", "laces", "lacey", "lacks", "laded",
    "laden", "lades", "ladle", "lager", "laird", "lairs", "laity", "laker", "lakes", "lamas",
    "lambs", "lamed", "lamer", "lames", "lamps", "lanai", "lance", "lands", "lanes", "lanky",
    "lapel", "lapin", "lapse", "larch", "lards", "lardy", "large", "largo", "larks", "larva",
    "laser", "lasso", "lasts", "latch", "later", "latex", "lathe", "laths", "lathy", "latke",
    "latte", "lauds", "laugh", "lavas", "laved", "laver", "laves", "lawns", "lawny", "laxer",
    "laxly", "layer", "layup", "lazed", "lazes", "leach", "leads", "leafy", "leaks", "leaky",
    "leans", "leant", "leaps", "leapt", "learn", "lease", "leash", "least", "leave", "ledge",
    "leech", "leeks", "leers", "leery", "lefts", "lefty", "legal", "leggy", "legit", "lemon",
    "lemur", "lends", "lento", "leper", "lepta", "letup", "levee", "level", "lever", "levis",
    "liars", "libel", "licit", "licks", "liege", "liens", "lifer", "lifts", "light", "liked",
    "liken", "likes", "lilac", "lilts", "limbo", "limbs", "limby", "limed", "limen", "limes",
    "limey", "limit", "limns", "limos", "limps", "lined", "linen", "liner", "lines", "lingo",
    "links", "lints", "linty", "lions", "lipid", "lippy", "liras", "lisle", "lisps", "lists",
    "liter", "lites", "lithe", "litho", "litre", "lived", "liven", "liver", "lives", "livid",
    "livre", "llama", "loads", "loafs", "loams", "loamy", "loans", "loath", "lobar", "lobby",
    "lobed", "lobes", "local", "lochs", "locks", "locum", "locus", "loden", "lodes", "lodge",
    "loess", "lofts", "lofty", "loges", "loggy", "logic", "login", "logos", "loins", "lolls",
    "lolly", "loner", "longs", "looby", "looks", "looms", "loons", "loony", "loops", "loopy",
    "loose", "loots", "loped", "lopes", "loppy", "loral", "lords", "lorry", "loser", "loses",
    "lossy", "lotus", "lough", "louse", "lousy", "louts", "loved", "lover", "loves", "lovey",
    "lowed", "lower", "lowly", "loxes", "loyal", "luaus", "lubes", "lubra", "lucid", "lucks",
    "lucky", "lucre", "lulab", "lulls", "lulus", "lumen", "lumps", "lumpy", "lunar", "lunch",
    "lunes", "lunge", "lungs", "lupin", "lupus", "lurch", "lured", "lures", "lurid", "lurks",
    "lusts", "lusty", "lutes", "luvya", "luxes", "lycra", "lying", "lymph", "lynch", "lyres",
    "lyric", "macaw", "maced", "macer", "maces", "macho", "macro", "madam", "madly", "mafia",
    "magic", "magma", "magna", "mahua", "maids", "mails", "maims", "mains", "maize", "major",
    "maker", "makes", "males", "malls", "malts", "malty", "mamas", "mambo", "mamma", "mammy",
    "maned", "manes", "manga", "mange", "mango", "mangy", "mania", "manic", "manly", "manna",
    "manor", "manse", "manta", "maple", "march", "mares", "marge", "maria", "marks", "marls",
    "marry", "marsh", "marts", "maser", "mashy", "masks", "mason", "masts", "match", "mated",
    "mates", "matey", "maths", "matte", "matzo", "mauls", "mauve", "maven", "mavie", "mavin",
    "maxim", "maxis", "maybe", "mayor", "mayst", "mazed", "mazer", "mazes", "meads", "meals",
    "mealy", "means", "meant", "meany", "meats", "meaty", "mecca", "medal", "media", "medic",
    "meets", "melba", "melds", "melee", "melon", "melts", "memes", "memos", "mends", "menus",
    "meows", "mercy", "merge", "merit", "merry", "mesas", "meshy", "messy", "metal", "meted",
    "meter", "metes", "metre", "metro", "mewed", "mezzo", "micks", "micro", "middy", "midis",
    "midst", "miens", "miffs", "might", "miked", "mikes", "milch", "miler", "miles", "milks",
    "milky", "mills", "mimed", "mimes", "mimic", "mince", "minds", "mined", "miner", "mines",
    "minim", "minis", "minks", "minor", "mints", "minty", "minus", "mired", "mires", "mirth",
    "miser", "missy", "mists", "misty", "miter", "mites", "mitre", "mitts", "mixed", "mixer",
    "mixes", "mixup", "moans", "moats", "mocha", "mocks", "modal", "model", "modem", "modes",
    "modus", "mogul", "moist", "molal", "molar", "molas", "molds", "moldy", "moles", "molls",
    "molly", "molto", "molts", "momma", "mommy", "monad", "money", "monks", "monte", "month",
    "mooch", "moods", "moody", "mooed", "moola", "moons", "moony", "moors", "moose", "moots",
    "moped", "moper", "mopes", "moral", "moray", "morel", "mores", "morns", "moron", "morph",
    "morts", "mosey", "mossy", "motel", "motes", "motet", "motif", "motor", "motte", "motto",
    "mould", "moult", "mound", "mount", "mourn", "mouse", "mousy", "mouth", "moved", "mover",
    "moves", "movie", "mowed", "mower", "moxie", "mucky", "mucus", "muddy", "muffs", "mufti",
    "muggy", "mulch", "mulct", "mules", "mummy", "mumps", "munch", "mungo", "munis", "muons",
    "mural", "murks", "murky", "mused", "muser", "muses", "mushy", "music", "musks", "musky",
    "mussy", "musts", "musty", "muted", "muter", "mutes", "mutts", "muzzy", "mynah", "mynas",
    "myrrh", "myths", "nabob", "nacho", "nadir", "naiad", "nails", "naive", "naked", "named",
    "namer", "names", "nanny", "napes", "nappy", "narco", "narcs", "nards", "nares", "nasal",
    "nasty", "natal", "natch", "nates", "natty", "naval", "navel", "naves", "nears", "neath",
    "necks", "needs", "needy", "negro", "neigh", "neons", "nerds", "nerdy", "nerve", "nervy",
    "nests", "never", "newel", "newer", "newly", "newsy", "newts", "nexus", "nicer", "niche",
    "nicks", "niece", "nifty", "night", "nihil", "nimbi", "nines", "ninja", "ninny", "ninth",
    "nippy", "nisei", "niter", "nitro", "noble", "nobly", "nodal", "noddy", "nodes", "noels",
    "nohow", "noise", "noisy", "nomad", "nonce", "nones", "nonny", "nooks", "noons", "noose",
    "norms", "north", "nosed", "noses", "nosey", "notch", "noted", "notes", "nouns", "novae",
    "novas", "novel", "noway", "nuder", "nudes", "nudge", "nuked", "nukes", "nulls", "numbs",
    "nurbs", "nurse", "nutty", "nylon", "nymph", "oaken", "oakum", "oared", "oases", "oasis",
    "oaten", "oaths", "obese", "obeys", "obits", "oboes", "occur", "ocean", "ocher", "ochre",
    "octal", "octet", "odder", "oddly", "odium", "odors", "odour", "offal", "offed", "offer",
    "often", "ogled", "ogler", "ogles", "ogres", "ohmic", "oiled", "oiler", "okapi", "okays",
    "olden", "older", "oldie", "olive", "ombre", "omega", "omens", "omits", "onion", "onset",
    "oodle", "oomph", "oozed", "oozes", "opals", "opens", "opera", "opine", "opium", "opted",
    "optic", "orals", "orate", "orbed", "orbit", "orcas", "order", "organ", "oring", "orlon",
    "ortho", "osier", "other", "otter", "ought", "ounce", "ousts", "outdo", "outen", "outer",
    "outgo", "outre", "ouzel", "ovals", "ovary", "ovate", "ovens", "overs", "overt", "ovine",
    "ovoid", "ovule", "owest", "oweth", "owing", "owlet", "owned", "owner", "oxbow", "oxeye",
    "oxide", "ozone", "paced", "pacer", "paces", "packs", "pacts", "paddy", "padre", "paean",
    "pagan", "paged", "pager", "pages", "pails", "pains", "paint", "pairs", "paled", "paler",
    "pales", "palls", "pally", "palms", "palmy", "palsy", "pampa", "panda", "paned", "panel",
    "panes", "panga", "pangs", "panic", "pansy", "pants", "panty", "papal", "papas", "papaw",
    "paper", "pappy", "paras", "parch", "pards", "pared", "parer", "pares", "parka", "parks",
    "parry", "parse", "parts", "party", "pasha", "passe", "pasta", "paste", "pasts", "pasty",
    "patch", "paten", "pater", "pates", "paths", "patio", "patsy", "patty", "pause", "pavan",
    "paved", "paver", "paves", "pawed", "pawer", "pawky", "pawls", "pawns", "payed", "payee",
    "payer", "peace", "peach", "peaks", "peaky", "peals", "pearl", "pears", "pease", "peats",
    "peaty", "pecan", "pecks", "pedal", "peeks", "peels", "peens", "peeps", "peers", "peeve",
    "pekoe", "pelts", "penal", "pence", "pends", "penes", "pengo", "penis", "penny", "peons",
    "peony", "peppy", "perch", "perdu", "peril", "perks", "perky", "perms", "pesky", "pesos",
    "pesto", "pests", "petal", "peter", "petit", "petty", "pewee", "pewit", "pffft", "phage",
    "phase", "phial", "phish", "phlox", "phone", "phony", "photo", "phyla", "piano", "picas",
    "picks", "picky", "picot", "piece", "piers", "pieta", "piety", "piggy", "pigmy", "piked",
    "piker", "pikes", "pilaf", "pilau", "piled", "piles", "pills", "pilot", "pimps", "pinch",
    "pined", "pines", "piney", "pings", "pinko", "pinks", "pinky", "pinto", "pints", "pinup",
    "pions", "pious", "piped", "piper", "pipes", "pipet", "pique", "pismo", "pitas", "pitch",
    "pithy", "piton", "pivot", "pixel", "pixie", "pizza", "place", "plaid", "plain", "plait",
    "plane", "plank", "plans", "plant", "plash", "plasm", "plate", "plats", "playa", "plays",
    "plaza", "plead", "pleas", "pleat", "plebe", "plied", "plies", "plink", "plods", "plonk",
    "plops", "plots", "plows", "ploys", "pluck", "plugs", "plumb", "plume", "plump", "plums",
    "plumy", "plunk", "plush", "plyer", "poach", "pocks", "pocky", "podgy", "podia", "poems",
    "poesy", "poets", "point", "poise", "poked", "poker", "pokes", "pokey", "polar", "poled",
    "poler", "poles", "polio", "polis", "polka", "polls", "polly", "polos", "polyp", "pomps",
    "ponds", "pones", "pooch", "pooey", "poohs", "pools", "poops", "popes", "poppy", "porch",
    "pored", "pores", "porgy", "porks", "porky", "porno", "ports", "posed", "poser", "poses",
    "posit", "posse", "posts", "potty", "pouch", "poufs", "pound", "pours", "pouts", "power",
    "poxes", "prams", "prank", "prate", "prawn", "prays", "preen", "preps", "press", "prexy",
    "preys", "price", "prick", "pride", "pried", "prier", "pries", "prigs", "prima", "prime",
    "primo", "primp", "print", "prior", "prism", "privy", "prize", "probe", "prods", "proem",
    "profs", "promo", "prone", "prong", "proof", "props", "prose", "prosy", "proud", "prove",
    "prowl", "prows", "proxy", "prude", "prune", "pruta", "pryer", "psalm", "pseud", "pshaw",
    "psoas", "puffs", "puffy", "puked", "pukes", "pukka", "pulls", "pulps", "pulpy", "pulse",
    "pumas", "pumps", "punch", "punks", "punky", "punny", "punts", "pupae", "pupal", "pupil",
    "puppy", "puree", "purer", "purge", "purse", "pushy", "puton", "putts", "putty", "pygmy",
    "pylon", "pyres", "pyxie", "qophs", "quack", "quads", "quaff", "quail", "quake", "qualm",
    "quark", "quart", "quash", "quasi", "queen", "queer", "quell", "query", "quest", "queue",
    "quick", "quiet", "quill", "quilt", "quint", "quips", "quipu", "quire", "quirk", "quirt",
    "quite", "quits", "quoin", "quoit", "quota", "quote", "quoth", "rabbi", "rabid", "raced",
    "racer", "races", "racks", "radar", "radii", "radio", "radon", "rafts", "raged", "rages",
    "raids", "rails", "rains", "rainy", "raise", "rajah", "raked", "raker", "rakes", "rally",
    "ramps", "ranch", "rands", "randy", "range", "rangy", "ranks", "rants", "rapid", "rarer",
    "rasae", "rasps", "raspy", "rated", "rater", "rates", "ratio", "ratty", "raved", "ravel",
    "raven", "raver", "raves", "rawer", "rawly", "rayon", "razed", "razer", "razes", "razor",
    "reach", "react", "reads", "ready", "realm", "reals", "reams", "reaps", "rearm", "rears",
    "rebar", "rebel", "rebid", "rebox", "recap", "recta", "recto", "recur", "recut", "redid",
    "redip", "redly", "redox", "redux", "reeds", "reedy", "reefs", "reeks", "reels", "reeve",
    "refer", "refit", "regal", "rehab", "reify", "reign", "reins", "relax", "relay", "relet",
    "relic", "remap", "remit", "remix", "renal", "rends", "renew", "rente", "rents", "repay",
    "repel", "reply", "repro", "rerun", "resaw", "resay", "reset", "resin", "resow", "rests",
    "retag", "retch", "retie", "retro", "retry", "reuse", "revel", "revet", "revue", "rewed",
    "rheas", "rheum", "rhino", "rhumb", "rhyme", "rials", "ribby", "riced", "ricer", "rices",
    "rider", "rides", "ridge", "ridgy", "rifer", "rifle", "rifts", "right", "rigid", "rigor",
    "riled", "riles", "rille", "rills", "rimed", "rimer", "rimes", "rinds", "rings", "rinks",
    "rinse", "riots", "ripen", "riper", "risen", "riser", "rises", "risks", "risky", "rites",
    "ritzy", "rival", "rived", "riven", "river", "rives", "rivet", "roach", "roads", "roams",
    "roans", "roars", "roast", "robed", "robes", "robin", "roble", "robot", "rocks", "rocky",
    "rodeo", "roger", "rogue", "roids", "roils", "roily", "roles", "rolls", "roman", "romps",
    "rondo", "roods", "roofs", "rooks", "rooky", "rooms", "roomy", "roost", "roots", "rooty",
    "roped", "roper", "ropes", "ropey", "roses", "rosin", "rotor", "rouge", "rough", "round",
    "rouse", "route", "routs", "roved", "rover", "roves", "rowan", "rowdy", "rowed", "rower",
    "royal", "rubes", "ruble", "ruche", "ruddy", "ruder", "ruffs", "rugby", "ruing", "ruins",
    "ruled", "ruler", "rules", "rumba", "rumen", "rummy", "rumor", "rumps", "runes", "rungs",
    "runic", "runny", "runts", "runty", "rupee", "rural", "ruses", "rusks", "rusts", "rusty",
    "rutty", "saber", "sable", "sabot", "sacks", "sacra", "sades", "sadhu", "sadly", "safer",
    "safes", "sagas", "sager", "sages", "sahib", "sails", "saint", "saith", "sakes", "salad",
    "sales", "sally", "salon", "salsa", "salts", "salty", "salve", "salvo", "samba", "sands",
    "sandy", "saner", "sappy", "saran", "sarge", "saris", "sassy", "sated", "sates", "satin",
    "satyr", "sauce", "saucy", "sauna", "saute", "saved", "saver", "saves", "savor", "savoy",
    "savvy", "sawed", "sawer", "saxes", "scabs", "scads", "scald", "scale", "scalp", "scaly",
    "scamp", "scams", "scans", "scant", "scare", "scarf", "scarp", "scars", "scary", "scats",
    "scene", "scent", "schmo", "schwa", "scion", "scoff", "scold", "scone", "scoop", "scoot",
    "scope", "score", "scorn", "scour", "scout", "scowl", "scows", "scram", "scrap", "scree",
    "screw", "scrim", "scrip", "scrod", "scrub", "scrum", "scuba", "scudi", "scudo", "scuff",
    "scull", "scurf", "scuse", "scuzz", "seals", "seams", "seamy", "sears", "seats", "sebum",
    "sects", "sedan", "seder", "sedge", "sedgy", "sedum", "seeds", "seedy", "seeks", "seems",
    "seeps", "seers", "seest", "seeth", "segue", "seine", "seize", "sells", "semen", "semis",
    "sends", "sense", "sepal", "sepia", "septa", "serfs", "serge", "serif", "serum", "serve",
    "servo", "setup", "seven", "sever", "sewed", "sewer", "sexed", "sexes", "shack", "shade",
    "shady", "shaft", "shags", "shahs", "shake", "shako", "shaky", "shale", "shall", "shalt",
    "shame", "shams", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl",
    "shawm", "shays", "sheaf", "shear", "sheds", "sheen", "sheep", "sheer", "sheet", "sheik",
    "shelf", "shell", "sherd", "shied", "shier", "shies", "shift", "shill", "shims", "shine",
    "shins", "shiny", "ships", "shire", "shirk", "shirr", "shirt", "shoal", "shoat", "shock",
    "shoed", "shoer", "shoes", "shone", "shook", "shoos", "shoot", "shops", "shore", "shorn",
    "short", "shots", "shout", "shove", "shown", "shows", "showy", "shred", "shrew", "shrub",
    "shrug", "shuck", "shuns", "shunt", "shush", "shute", "shuts", "shyly", "sibyl", "sicko",
    "sicks", "sided", "sides", "sidle", "siege", "sieve", "sifts", "sighs", "sight", "sigma",
    "signs", "silks", "silky", "sills", "silly", "silos", "silts", "silty", "since", "sines",
    "sinew", "singe", "sings", "sinks", "sinus", "sired", "siree", "siren", "sires", "sirup",
    "sisal", "sissy", "sitar", "sited", "sites", "sixes", "sixth", "sixty", "sized", "sizer",
    "sizes", "skate", "skeet", "skews", "skids", "skied", "skier", "skies", "skiff", "skill",
    "skimp", "skims", "skins", "skint", "skips", "skirt", "skits", "skoal", "skulk", "skull",
    "skunk", "slabs", "slack", "slags", "slain", "slake", "slams", "slang", "slant", "slaps",
    "slash", "slate", "slats", "slave", "slaws", "slays", "sleds", "sleek", "sleep", "sleet",
    "slept", "slews", "slice", "slick", "slide", "slier", "slily", "slime", "slims", "slimy",
    "sling", "slink", "slips", "slits", "slobs", "sloes", "slogs", "slomo", "sloop", "slope",
    "slops", "slosh", "sloth", "slots", "slows", "slued", "slues", "sluff", "slugs", "slump",
    "slums", "slung", "slunk", "slurp", "slurs", "slush", "slyer", "slyly", "smack", "small",
    "smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith", "smock",
    "smogs", "smoke", "smoky", "smote", "smurf", "smuts", "snack", "snafu", "snags", "snail",
    "snake", "snaky", "snaps", "snare", "snarf", "snark", "snarl", "sneak", "sneer", "snick",
    "snide", "sniff", "snipe", "snips", "snits", "snobs", "snogs", "snood", "snook", "snoop",
    "snoot", "snore", "snort", "snots", "snout", "snows", "snowy", "snubs", "snuck", "snuff",
    "soaks", "soaps", "soapy", "soars", "sober", "socko", "socks", "socle", "sodas", "sofas",
    "softy", "soggy", "soils", "solar", "soled", "soles", "solid", "solon", "solos", "solum",
    "solve", "sonar", "songs", "sonic", "sonny", "sooth", "soots", "sooty", "sorer", "sores",
    "sorry", "sorta", "sorts", "souls", "sound", "soups", "soupy", "sours", "souse", "south",
    "sowed", "sower", "space", "spacy", "spade", "spake", "spank", "spans", "spare", "spark",
    "spars", "spasm", "spate", "spats", "spawn", "spays", "speak", "spear", "speck", "specs",
    "speed", "spell", "spelt", "spend", "spent", "spews", "spice", "spicy", "spied",
    "spiel", "spies", "spiff", "spike", "spiky", "spill", "spilt", "spine", "spins", "spiny",
    "spire", "spite", "spits", "spitz", "splat", "splay", "split", "spoil", "spoke", "spoof",
    "spook", "spool", "spoon", "spoor", "spore", "sport", "spots", "spout", "sprat", "spray",
    "spree", "sprig", "sprog", "spuds", "spume", "spumy", "spunk", "spurn", "spurs", "spurt", "sputa", "squab", "squad", "squat", "squib", "squid",
    "stack", "stade", "staff", "stage", "stags", "stagy", "stain", "stair", "stake", "stale", "stalk", "stall",
    "stamp", "stand", "stane", "stang", "stank", "stare", "stark", "stars", "start", "stash", "state", "stave",
    "stays", "stead", "steak", "steal", "steam", "steed", "steel", "steep", "steer", "stein", "stems", "stent",
    "steps", "stern", "stews", "stick", "sties", "stiff", "stile", "still", "stilt", "sting", "stink", "stint",
    "stipe", "stirk", "stirp", "stock", "stoic", "stoke", "stole", "stomp", "stone", "stony", "stood", "stoop",
    "store", "stork", "storm", "story", "stoup", "stout", "stove", "strap", "straw", "stray", "strew", "strip",
    "strop", "strum", "strut", "stubs", "stuck", "studs", "study", "stuff", "stump", "stung", "stunk", "stunt",
    "style", "suave", "suavo", "sucks", "sudor", "sugar", "suing", "suite", "suited", "sulky", "sully", "sumac",
    "sumps", "sunks", "sunny", "super", "supes", "surge", "surgy", "surly", "sushi", "swain", "swamp", "swank",
    "swans", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swill", "swine", "swing", "swipe",
    "swirl", "swish", "sword", "sworn", "syrah", "syrup", "tabby", "table", "taboo", "tacit", "tacky", "taffy",
    "tails", "taken", "taker", "tally", "talon", "tango", "taper", "tardy", "tarot", "taste", "tasty", "tatty",
    "taunt", "teach", "teary", "tease", "teddy", "teeth", "tempo", "tenet", "tenor", "tense", "tenth", "tepee",
    "tepid", "terms", "terra", "terse", "tests", "thank", "theft", "theme", "there", "these", "thick", "thief",
    "thigh", "thing", "think", "third", "thong", "thorn", "those", "three", "threw", "throw", "thumb", "tiger",
    "tight", "tiled", "times", "timid", "tipsy", "titan", "title", "toast", "today", "token", "tonal", "tonic",
    "tools", "tooth", "topic", "torch", "torso", "total", "totem", "touch", "tough", "toxic", "trace", "track",
    "trade", "trail", "train", "tramp", "trash", "treat", "trend", "triad", "trial", "tribe", "trick", "tried",
    "trite", "troop", "trout", "truck", "truly", "trump", "trunk", "trust", "truth", "tulip", "tumor", "tuned",
    "tuner", "tunic", "turbo", "turns", "tutor", "twice", "twigs", "twins", "twist", "tying", "udder", "ulcer",
    "ultra", "umbra", "uncle", "under", "unfed", "unfit", "unify", "union", "unite", "unity", "unlit", "unmet",
    "unset", "untie", "until", "unwed", "unzip", "upper", "upset", "urban", "urged", "urine", "usage", "usher",
    "using", "usual", "vague", "valet", "valid", "valor", "value", "vapid", "vapor", "vault", "vegan", "veins",
    "venom", "verge", "verse", "verve", "vexed", "vicar", "video", "vigil", "vigor", "vinyl", "viola", "viper",
    "viral", "virus", "visit", "vital", "vivid", "vixen", "vocal", "vodka", "vogue", "voice", "voila", "volts",
    "voter", "vouch", "vowel", "vying", "wacky", "wafer", "waist", "waive", "waltz", "waste", "watch", "water",
    "weary", "weave", "wedge", "weird", "whale", "wheat", "wheel", "where", "which", "whiff", "while", "whine",
    "whirl", "white", "whole", "whose", "widen", "wider", "widow", "width", "wield", "wiser", "witch", "witty",
    "woken", "woman", "worse", "worst", "worth", "would", "wound", "woven", "wrath", "wreak", "wreck", "wrist",
    "write", "wrong", "wrote", "yacht", "yeast", "yield", "young", "yours", "youth", "yummy", "zebra", "zesty",
    "zonal", "zoned", "zones", "pepsi"
];

let firstly = words.length;
words = words.filter(word => word.length === 5);
console.log(firstly - words.length, words.length);

let base = [];
let secondly = [];

words.forEach(word => {
    if (base.includes(word)) {
        secondly.push(word);
    } else {
        base.push(word);
    }
})

console.log(secondly.length);


let word = "pepsi";

let currentCell = [1, 1];
let rollover = false;
let available = true

function locateCell(x, y) {
    if (x >= 1 && x <= 5 && y >= 1 && y <= 6) {
        let board = document.getElementById('board');

        x = Number(x - 1);
        y = Number(y - 1);

        return board.querySelectorAll('.row')[y].querySelectorAll('.cell')[x]
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    let keyboard = document.getElementById('keyboard')
    keyboard.querySelectorAll(".key").forEach(key => {
        key.addEventListener("click", function () {
            type(key.textContent)

        })
    })
});

document.addEventListener("keydown", function (event) {
    let keyboard = document.getElementById('keyboard')
    keyboard.querySelectorAll(".key").forEach(key => {
        if (event.key.toLowerCase() === key.textContent.toLowerCase()) {
            type(key.textContent)
        }
    })
});

function type(key) {

    let eventKey = key.toLowerCase();

    if (eventKey === "enter") {
        console.log("Enter key was pressed!");



        if (currentCell[0] === 6 && available === true) {

            let wordWritten = locateCell(1, currentCell[1]).textContent + locateCell(2, currentCell[1]).textContent + locateCell(3, currentCell[1]).textContent + locateCell(4, currentCell[1]).textContent + locateCell(5, currentCell[1]).textContent;


            if (words.includes(wordWritten)) {
                console.log("Word found!")

                let toCheck = [locateCell(1, currentCell[1]), locateCell(2, currentCell[1]), locateCell(3, currentCell[1]), locateCell(4, currentCell[1]), locateCell(5, currentCell[1])];

                let index = checkGuess(word, wordWritten)

                toCheck.forEach(cell => {
                    setTimeout(() => {

                        console.log(toCheck.indexOf(cell))

                        if (wordWritten === word) {

                            available = false;

                            cell.style.animation = "flip 1 0.5s linear";
                            setTimeout(() => {

                                index[cell.textContent.toLowerCase()]--;
                                cell.style.backgroundColor = "#6AAA64";
                                cell.style.border = "2px solid #6AAA64";
                                cell.style.color = "white";

                            }, 250)

                            console.log([locateCell(1, currentCell[1]), locateCell(2, currentCell[1]), locateCell(3, currentCell[1]), locateCell(4, currentCell[1]), locateCell(5, currentCell[1])])

setTimeout(() => {
    document.getElementById("splash").style.animation = "simpleAppear 1 0.5s ease";
    document.getElementById("splash").style.display = "flex";
    document.getElementById("finished").style.display = "flex";
    document.querySelectorAll(".remove").forEach(removeButton => { removeButton.style.display = "block" })

    let url = new URL(document.location).href;

    if (url.split("?")[1]) {
        let [key, value] = url.split("?")[1].split("=")

        if (key === "c") {

            console.log("Connections data found: " + value)

            document.querySelectorAll(".changeHREF").forEach(href => {
                href.setAttribute("href", `https://ashtonrbox.github.io/hub?c=${value}&w=${currentCell[1]}`)
            })

        }
    } else {
        document.querySelectorAll(".changeHREF").forEach(href => {
                href.setAttribute("href", `https://ashtonrbox.github.io/hub?w=${currentCell[1]}`)
        })
    }
}, 4500)

                            setTimeout(() => {
                                cell.style.animation = "winJiggle 1 0.5s ease";
                            }, 2000 + ((toCheck.indexOf(cell) * 150) * -1))

                        } else if (index[toCheck.indexOf(cell)] === "green") {
                            cell.style.animation = "flip 1 0.5s linear";
                            setTimeout(() => {

                                index[cell.textContent.toLowerCase()]--;
                                cell.style.backgroundColor = "#6AAA64";
                                cell.style.border = "2px solid #6AAA64";
                                cell.style.color = "white";

                            }, 250)
                        } else if (index[toCheck.indexOf(cell)] === "yellow") {
                            cell.style.animation = "flip 1 0.5s linear";
                            setTimeout(() => {

                                cell.style.backgroundColor = "#C9B458";
                                cell.style.border = "2px solid #C9B458";
                                cell.style.color = "white";

                            }, 250)
                        } else {
                            cell.style.animation = "flip 1 0.5s linear";
                            setTimeout(() => {

                                index[cell.textContent.toLowerCase()]--;
                                cell.style.backgroundColor = "#787C7E";
                                cell.style.border = "2px solid #787C7E";
                                cell.style.color = "white";

                            }, 250)
                        }
                    }, toCheck.indexOf(cell) * 270)
                })

                currentCell[0] = 1;
                currentCell[1] = Number(currentCell[1]) + 1;

                if (currentCell[1] === 7) {
                    console.log("Game over!") 
                    setTimeout(() => {
                        document.getElementById("splash").style.animation = "simpleAppear 1 0.5s ease";
                        document.getElementById("splash").style.display = "flex";
                        document.getElementById("over").style.display = "flex";
                    }, 3000)
                }

            } else {
                document.getElementById("notWordAlert").style.animation = "notWordAppear 1 3s ease";

                let toAnimate = [locateCell(1, currentCell[1]), locateCell(2, currentCell[1]), locateCell(3, currentCell[1]), locateCell(4, currentCell[1]), locateCell(5, currentCell[1])]
                toAnimate.forEach(cell => {
                    cell.style.animation = "notWordJiggle 5 0.2s ease"
                    setTimeout(() => {
                        cell.style.animation = "";
                    }, 1000)
                })

                setTimeout(() => {
                    document.getElementById("notWordAlert").style.animation = "";
                }, 3000)
            }
        }





    } else if (eventKey === "backspace" || eventKey === "[") {
        console.log("Backspace key was pressed!");

        if (rollover) {

            console.log("roll")

            rollover = false;
            currentCell[0] = Math.max(1, currentCell[0] - 1);

            if (currentCell[0] > 5 || currentCell < 1 || currentCell[1] > 7) {
                console.log("Invalid cell position!")
            } else {
                let currentCellElement = locateCell(currentCell[0], currentCell[1]);
                currentCellElement.textContent = "";
                currentCellElement.style.border = "2px solid #D3D6DA"
            }
        } else {
            if (currentCell[0] > 5 || currentCell < 1 || currentCell[1] > 7) {
                console.log("Invalid cell position!")
            } else {
                let currentCellElement = locateCell((Number(currentCell[0]) - 1), currentCell[1]);
                currentCellElement.textContent = "";
                currentCell[0] = Math.max(1, currentCell[0] - 1);
                currentCellElement.style.border = "2px solid #D3D6DA"
            }
        }

    } else {
        if (allowedKeys.includes(eventKey) && available) {
            console.log(eventKey)


            if (currentCell[0] > 5 || currentCell[1] > 7) {
                console.log("Invalid cell position!")
            } else {
                if (locateCell(currentCell[0], currentCell[1])) {
                    let currentCellElement = locateCell(currentCell[0], currentCell[1]);
                    currentCellElement.textContent = eventKey;
                    currentCellElement.style.animation = "bounce 1 0.1s ease";
                    currentCellElement.style.border = "2px solid #878A8C"
                    setTimeout(() => {
                        currentCellElement.style.animation = "";
                    }, 100)

                    console.log(currentCell);
                    console.log(locateCell(currentCell[0], currentCell[1]))


                    currentCell[0]++;

                    if (currentCell[0] === 6) {
                        console.log("Rollover!")
                        rollover = true;
                    }

                }
            }


        }
    }
}


function checkGuess(word, guess) {
    let result = Array(guess.length).fill("grey");
    let index = {};
    let plans = guess.split("");
    let finalPlans = [];

    for (let letter of word) {
        index[letter] = (index[letter] || 0) + 1;
    }

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === word[i]) {
            result[i] = "green";
            finalPlans.push(guess[i] + "|codeGreen");
            plans.splice(plans.indexOf(guess[i]), 1)
            index[guess[i]]--;
        }
    }

    for (let i = 0; i < guess.length; i++) {
        if (result[i] === "green") continue;

        if (index[guess[i]] > 0) {
            result[i] = "yellow";
            finalPlans.push(guess[i] + "|codeYellow");
            plans.splice(plans.indexOf(guess[i]), 1)
            index[guess[i]]--;
        }
    }

    plans.forEach(plan => {
        finalPlans.push(plan + "|codeGrey");
    })

    colorCode(finalPlans)

    return result;
}


function colorCode(finalPlans) {
    finalPlans.forEach(plan => {
        let [letter, color] = plan.split("|");
        
        document.getElementById("keyboard").querySelectorAll(".key").forEach(key => {
            if (key.textContent.toLowerCase() === letter) {
                setTimeout(() => {
                    key.classList.add(color);
                }, 1500)
            }
        })

    })
}

document.getElementById("start").addEventListener("click", function() {
    document.getElementById("splash").style.animation = "disappear 1 0.5s ease";

    setTimeout(() => {
        document.getElementById("splash").style.animation = "";
        document.getElementById("splash").style.display = "none"
        document.getElementById("welcome").style.display = "none"
    },490)
})
