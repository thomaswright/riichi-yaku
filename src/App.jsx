import { useState } from "react";

const data = [
  {
    name: "Closed Only Hands",
    sections: [
      {
        name: null,
        items: [
          {
            name: "Declare riichi",
            value: "1",
            aka: [],
            description: null,
            variants: [
              {
                name: "Win before next discard",
                value: "1",
                aka: [],
                description: null,
                bonus: true,
              },
              {
                name: "Declare on first turn",
                value: "1",
                aka: [],
                description: null,
                bonus: true,
              },
            ],
          },
          {
            name: "Draw the winning tile",
            value: "1",
            aka: ["Tsumo"],
            description: null,
          },
          {
            name: "2 same runs same suit",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Double of 2 same runs same suit",
            value: "3",
            aka: [],
            description: null,
          },
          {
            name: "Only runs, pair is not honors, must win with outside run wait",
            value: "1",
            aka: ["Pinfu"],
            description: null,
          },
          {
            name: "Win on first draw (dealer only)",
            value: "L",
            aka: [],
            description: "Dealer only",
          },
          {
            name: "Win on first hand",
            value: "L",
            aka: [],
            description: null,
          },
          {
            name: "Win on call of first turn",
            value: "L",
            aka: [],
            description: null,
          },
        ],
      },
    ],
  },
  {
    name: "Open or Closed Hands",
    sections: [
      {
        name: "Simples & Ends",
        items: [
          {
            name: "All simples",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "All groups contain ends or honors",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "All groups contain ends",
            value: "2",
            aka: [],
            description: null,
          },
          {
            name: "All ends and honors",
            value: "2",
            aka: [],
            description: null,
          },
          {
            name: "All ends",
            value: "L",
            aka: [],
            description: null,
          },
          {
            name: "All honors",
            value: "L",
            aka: [],
            description: null,
          },
        ],
      },
      {
        name: "Sets",
        items: [
          {
            name: "4 sets",
            value: "2",
            aka: [],
            description: null,
          },
          {
            name: "3 concealed sets",
            value: "2",
            aka: [],
            description: null,
          },
          {
            name: "4 concealed sets",
            value: "L",
            aka: [],
            description: null,
          },
          {
            name: "3 quads",
            value: "2",
            aka: [],
            description: null,
          },
          {
            name: "4 quads",
            value: "L",
            aka: [],
            description: null,
          },
        ],
      },
      {
        name: "Value Honor Sets",
        items: [
          {
            name: "1 value honor set",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "2 sets, 1 pair, of each dragon",
            value: "2",
            aka: ["3 lil dragons"],
            description: null,
          },
          {
            name: "3 sets of each dragon",
            value: "L",
            aka: ["3 big dragons"],
            description: null,
          },
          {
            name: "3 sets, 1 pair, of each wind",
            value: "L",
            aka: ["4 lil winds"],
            description: null,
          },
          {
            name: "4 sets of each wind",
            value: "2L",
            aka: ["4 big winds"],
            description: null,
          },
        ],
      },
      {
        name: "One Suit",
        items: [
          {
            name: "All one suit and honors",
            value: "2",
            aka: [],
            description: null,
          },
          {
            name: "All one suit",
            value: "5",
            aka: [],
            description: null,
          },
          {
            name: "All green",
            value: "L",
            aka: [],
            description: null,
          },
          {
            name: "11 123 456 789 99 + 1 dup, one suit",
            value: "L",
            aka: ["Nine gates"],
            description: null,
          },
        ],
      },
      {
        name: "Other",
        items: [
          {
            name: "123 456 789 same suit",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Same 3 runs each suit",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Same 3 sets each suit",
            value: "2",
            aka: [],
            description: null,
          },
        ],
      },
      {
        name: "Special Criteria",
        items: [
          {
            name: "Win on last draw",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Win by calling last discard",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Win on draw after own quad",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Win by calling another's quad",
            value: "1",
            aka: [],
            description: null,
          },
          {
            name: "Win with only end and honor discards, none called",
            value: "5",
            aka: [],
            description: null,
          },
        ],
      },
    ],
  },
  {
    name: "Oddball Hands",
    sections: [
      {
        name: null,
        items: [
          {
            name: "7 pairs (closed only)",
            value: "2",
            aka: [],
            description: "Closed only",
          },
          {
            name: "Each terminal, wind, and dragon",
            value: "L",
            aka: ["13 orphans"],
            description: null,
          },
        ],
      },
    ],
  },
];

const valueLabels = {
  L: "L",
  "2L": "2L",
};

const formatValue = (value, isBonus = false) => {
  const label = valueLabels[value];
  if (label) {
    return label;
  }

  const numericValue = Number(value);
  if (!Number.isNaN(numericValue)) {
    const prefix = isBonus ? "+" : "";
    return `${prefix}${numericValue}`;
  }

  return value;
};

const isLimitValue = (value) => value === "L" || value === "2L";

function App() {
  const [showLimits, setShowLimits] = useState(true);

  return (
    <div className="min-h-screen bg-slate-100 py-3">
      <main className="mx-auto flex max-w-5xl flex-col gap-3 px-3 text-slate-900 divide-y divide-slate-300">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
          <h1 className="text-xs font-semibold tracking-tight text-slate-950 leading-none">
            Riichi Mahjong Hand Reference
          </h1>
          <button
            type="button"
            onClick={() => setShowLimits((prev) => !prev)}
            aria-pressed={showLimits}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            {showLimits ? "Hide limit hands" : "Show limit hands"}
          </button>
        </div>
        {data.map((category) => (
          <section key={category.name} className="flex flex-col gap-2 pb-3">
            <h2 className="text-xs font-semibold text-slate-950 leading-none">
              {category.name}
            </h2>
            {category.sections.map((section, sectionIndex) => {
              const sectionKey = `${category.name}-section-${sectionIndex}`;
              const sectionItems = section.items.reduce(
                (acc, item, itemIndex) => {
                  if (!showLimits && isLimitValue(item.value)) {
                    return acc;
                  }

                  const itemKey = `${sectionKey}-item-${itemIndex}`;
                  const visibleVariants = (item.variants ?? []).filter(
                    (variant) => showLimits || !isLimitValue(variant.value)
                  );

                  acc.push({ item, itemKey, visibleVariants });
                  return acc;
                },
                []
              );

              if (sectionItems.length === 0) {
                return null;
              }

              return (
                <div key={sectionKey} className="flex flex-col gap-1">
                  {section.name && (
                    <h3 className="text-sm font-medium text-slate-400 leading-none">
                      {section.name}
                    </h3>
                  )}
                  <ul className="flex flex-col">
                    {sectionItems.map(({ item, itemKey, visibleVariants }) => {
                      const akaText =
                        item.aka && item.aka.length > 0
                          ? `${item.aka.map((n) => '"' + n + '"').join(", ")}`
                          : null;
                      const notes = [akaText, item.description].filter(Boolean);

                      return (
                        <li key={itemKey} className="">
                          <div className="flex flex-wrap items-baseline justify-between gap-4">
                            <div className="flex flex-1 flex-row flex-wrap items-center gap-2">
                              <span className="text-base font-semibold text-slate-950">
                                {item.name}
                              </span>
                              {notes.length > 0 && (
                                <span className="text-sm text-slate-600">
                                  {notes.join(" • ")}
                                </span>
                              )}
                            </div>

                            <span className="text-base font-semibold text-blue-600">
                              {formatValue(item.value)}
                            </span>
                          </div>

                          {visibleVariants.length > 0 && (
                            <ul className="flex flex-col pl-1">
                              {visibleVariants.map((variant, variantIndex) => {
                                const variantKey = `${itemKey}-variant-${variantIndex}`;
                                const variantAkaText =
                                  variant.aka && variant.aka.length > 0
                                    ? `Also called ${variant.aka.join(", ")}`
                                    : null;
                                const variantNotes = [
                                  variant.description,
                                  variant.bonus
                                    ? `Bonus for ${item.name}`
                                    : `Variation of ${item.name}`,
                                  variantAkaText,
                                ].filter(Boolean);

                                return (
                                  <li
                                    key={variantKey}
                                    className="pl-3 text-sm text-slate-700"
                                  >
                                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                                      <span className="font-medium italic text-slate-800">
                                        {variant.name}
                                      </span>
                                      <span className="text-sm font-semibold text-blue-600">
                                        {formatValue(
                                          variant.value,
                                          variant.bonus
                                        )}
                                      </span>
                                    </div>
                                    {variantNotes.length > 0 && (
                                      <p className="text-xs text-slate-500">
                                        {variantNotes.join(" • ")}
                                      </p>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
