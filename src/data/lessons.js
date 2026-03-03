export const lessons = [
  {
    id: 1,
    title: "The Foundation: 7th Chords",
    description: "Jazz is built on 7th chords. Unlike basic major and minor triads, 7th chords add a fourth note that creates the characteristic 'jazz' tension.",
    theory: [
      "A Major 7th (Maj7) consists of 1-3-5-7 of the major scale.",
      "A Dominant 7th (7) consists of 1-3-5-b7.",
      "A Minor 7th (m7) consists of 1-b3-5-b7.",
      "The 'Shell' of the chord is the 3rd and the 7th. These are the most important notes for defining the chord's quality."
    ],
    chords: [
      {
        name: "C Maj7 (E-String Root)",
        frets: [8, 10, 9, 9, 8, 8], // Standard bar but let's focus on jazz voicings
        position: 8,
        dots: [
          { string: 6, fret: 8, finger: 2, note: "C" },
          { string: 4, fret: 9, finger: 3, note: "B" },
          { string: 3, fret: 9, finger: 4, note: "E" },
          { string: 2, fret: 8, finger: 1, note: "G" }
        ],
        muted: [1, 5]
      },
      {
        name: "G 7 (E-String Root)",
        position: 3,
        dots: [
          { string: 6, fret: 3, finger: 1, note: "G" },
          { string: 4, fret: 3, finger: 2, note: "F" },
          { string: 3, fret: 4, finger: 3, note: "B" },
          { string: 2, fret: 3, finger: 1, note: "D" }
        ],
        muted: [1, 5]
      }
    ]
  },
  {
    id: 2,
    title: "Shell Voicings (The 3-Note Secret)",
    description: "Intermediate players often play FEWER notes. Shell voicings use only the Root, 3rd, and 7th. This leaves space for other instruments.",
    theory: [
      "In a jazz band, you often don't need the 5th.",
      "The 3rd and 7th are 'Guide Tones'.",
      "Type A: Root on 6th string (6-4-3 strings).",
      "Type B: Root on 5th string (5-4-3 strings)."
    ],
    chords: [
      {
        name: "G Maj7 (Shell A)",
        position: 3,
        dots: [
          { string: 6, fret: 3, finger: 1, note: "G" },
          { string: 4, fret: 4, finger: 3, note: "F#" },
          { string: 3, fret: 4, finger: 4, note: "B" }
        ],
        muted: [1, 2, 5]
      },
      {
        name: "C Maj7 (Shell B)",
        position: 3,
        dots: [
          { string: 5, fret: 3, finger: 1, note: "C" },
          { string: 4, fret: 2, finger: 2, note: "E" },
          { string: 3, fret: 4, finger: 4, note: "B" }
        ],
        muted: [1, 2, 6]
      }
    ]
  },
  {
    id: 3,
    title: "The ii-V-I Progression",
    description: "The most common progression in jazz. Master this, and you can play 80% of the standards.",
    theory: [
      "In the key of C: ii = Dm7, V = G7, I = CMaj7.",
      "Notice how the guide tones move by the smallest possible distance (half-steps or stay the same).",
      "This is called 'Voice Leading'."
    ],
    chords: [
      {
        name: "Dm7 (ii)",
        position: 5,
        dots: [
          { string: 5, fret: 5, finger: 1, note: "D" },
          { string: 4, fret: 3, finger: 2, note: "F" },
          { string: 3, fret: 5, finger: 3, note: "C" }
        ],
        muted: [1, 2, 6]
      },
      {
        name: "G7 (V)",
        position: 4,
        dots: [
          { string: 6, fret: 3, finger: 1, note: "G" },
          { string: 4, fret: 3, finger: 2, note: "F" },
          { string: 3, fret: 4, finger: 3, note: "B" }
        ],
        muted: [1, 2, 5]
      },
      {
        name: "CMaj7 (I)",
        position: 3,
        dots: [
          { string: 5, fret: 3, finger: 1, note: "C" },
          { string: 4, fret: 2, finger: 2, note: "E" },
          { string: 3, fret: 4, finger: 4, note: "B" }
        ],
        muted: [1, 2, 6]
      }
    ]
  },
  {
    id: 4,
    title: "Drop 2 Voicings",
    description: "Drop 2 chords are the bread and butter of jazz guitar soloing and 'chord melody'. They sound sophisticated and balanced.",
    theory: [
      "Take a close-position chord and drop the 2nd highest note an octave.",
      "These are usually played on the top 4 strings (D-G-B-E) or middle 4 (A-D-G-B).",
      "They are very easy to move up and down the neck."
    ],
    chords: [
      {
        name: "C Maj7 (Drop 2 - Root Position)",
        position: 7,
        dots: [
          { string: 4, fret: 10, finger: 4, note: "C" },
          { string: 3, fret: 9, finger: 3, note: "E" },
          { string: 2, fret: 8, finger: 1, note: "B" },
          { string: 1, fret: 7, finger: 1, note: "G" }
        ],
        muted: [5, 6]
      }
    ]
  }
];
