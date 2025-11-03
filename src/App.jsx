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
            names: {
              japaneseRomaji: "Riichi",
              japanese: "立直",
              english: "Ready",
            },
            description: null,
            variants: [
              {
                name: "Win before next discard",
                value: "1",
                names: {
                  japaneseRomaji: "Ippatsu",
                  japanese: "一発",
                  english: "One-shot",
                },
                description: null,
                bonus: true,
              },
              {
                name: "Declare on first turn",
                value: "1",
                names: {
                  japaneseRomaji: "Daburu Riichi",
                  japanese: "ダブル立直",
                  english: "Double Ready",
                },
                description: null,
                bonus: true,
              },
            ],
          },
          {
            name: "Draw the winning tile",
            value: "1",
            names: {
              japaneseRomaji: "Tsumo",
              japanese: "門前清自摸和",
              english: "Self Draw",
            },
            description: null,
          },
          {
            name: "Twin runs",
            value: "1",
            names: {
              japaneseRomaji: "Iipeikou",
              japanese: "一盃口",
              english: "Double Straights",
            },
            description: null,
          },
          {
            name: "Double twin runs",
            value: "3",
            names: {
              japaneseRomaji: "Ryanpeikou",
              japanese: "二盃口",
              english: "Two Double Straights",
            },
            description: null,
          },
          {
            name: "Only runs, pair is not honors, outside run wait",
            value: "1",
            names: {
              japaneseRomaji: "Pinfu",
              japanese: "平和",
              english: "No-points",
            },
            description: null,
          },
          {
            name: "Win on first draw (dealer only)",
            value: "L",
            names: {
              japaneseRomaji: "Tenhou",
              japanese: "天和",
              english: "Blessing of Heaven",
            },
            description: null,
          },
          {
            name: "Win on first hand",
            value: "L",
            names: {
              japaneseRomaji: "Chiihou",
              japanese: "地和",
              english: "Blessing of Earth",
            },
            description: null,
          },
          {
            name: "Win on call of first turn",
            value: "L",
            names: {
              japaneseRomaji: "Renhou",
              japanese: "人和",
              english: "Blessing of Man",
            },
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
            name: "All 2 - 8",
            value: "1",
            names: {
              japaneseRomaji: "Tanyao",
              japanese: "断么九",
              english: "All Simples",
            },
            description: null,
          },
          {
            name: "All contain 1, 9, or honors",
            value: "1",
            names: {
              japaneseRomaji: "Chanta",
              japanese: "混全帯么九",
              english: "Common Ends",
            },
            description: null,
          },
          {
            name: "All contain 1 or 9",
            value: "2",
            names: {
              japaneseRomaji: "Junchan",
              japanese: "純全帯么九",
              english: "Perfect Ends",
            },
            description: null,
          },
          {
            name: "All 1, 9, or honors",
            value: "2",
            names: {
              japaneseRomaji: "Honroutou",
              japanese: "混老頭",
              english: "Common Terminals",
            },
            description: null,
          },
          {
            name: "All 1 and 9",
            value: "L",
            names: {
              japaneseRomaji: "Chinroutou",
              japanese: "清老頭",
              english: "Perfect Terminals",
            },
            description: null,
          },
          {
            name: "All honors",
            value: "L",
            names: {
              japaneseRomaji: "Tsuuiisou",
              japanese: "字一色",
              english: "All Honors",
            },
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
            names: {
              japaneseRomaji: "Toitoi",
              japanese: "対々和",
              english: "All Triplets",
            },
            description: null,
          },
          {
            name: "3 concealed sets",
            value: "2",
            names: {
              japaneseRomaji: "Sanankou",
              japanese: "三暗刻",
              english: "Three Concealed Triplets",
            },
            description: null,
          },
          {
            name: "4 concealed sets",
            value: "L",
            names: {
              japaneseRomaji: "Suankou",
              japanese: "四暗刻",
              english: null,
              english: "Four Concealed Triplets",
            },
            description: null,
          },
          {
            name: "3 quads",
            value: "2",
            names: {
              japaneseRomaji: "Sankantsu",
              japanese: "三槓子",
              english: "Three Quads",
            },
            description: null,
          },
          {
            name: "4 quads",
            value: "L",
            names: {
              japaneseRomaji: "Sukantsu",
              japanese: "四槓子",
              english: "Four Quads",
            },
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
            names: {
              japaneseRomaji: "Yakuhai",
              japanese: "役牌",
              english: "Value Triplet",
            },
            description: null,
          },
          {
            name: "2 sets & pair each dragon",
            value: "2",
            names: {
              english: "Little Dragons",
              japaneseRomaji: "Shousangen",
              japanese: "小三元",
            },
            description: null,
          },
          {
            name: "3 sets each dragon",
            value: "L",
            names: {
              english: "Big Dragons",
              japaneseRomaji: "Daisangen",
              japanese: "大三元",
            },
            description: null,
          },
          {
            name: "3 sets & pair each wind",
            value: "L",
            names: {
              english: "Little Winds",
              japaneseRomaji: "Shousuushii",
              japanese: "小四喜",
            },
            description: null,
          },
          {
            name: "4 sets each wind",
            value: "2L",
            names: {
              english: "Big Winds",
              japaneseRomaji: "Daisuushii",
              japanese: "大四喜",
            },
            description: null,
          },
        ],
      },
      {
        name: "One Suit",
        items: [
          {
            name: "All one suit or honors",
            value: "2",
            names: {
              japaneseRomaji: "Honitsu",
              japanese: "混一色",
              english: "Common Flush",
            },
            description: null,
          },
          {
            name: "All one suit",
            value: "5",
            names: {
              japaneseRomaji: "Chinitsu",
              japanese: "清一色",
              english: "Perfect Flush",
            },
            description: null,
          },
          {
            name: "All green",
            value: "L",
            names: {
              japaneseRomaji: "Ryuuiisou",
              japanese: "緑一色",
              english: "All Green",
            },
            description: null,
          },
          {
            name: "11 123 456 789 99 + dup one suit",
            value: "L",
            names: {
              english: "Nine Gates",
              japaneseRomaji: "Chuuren Poutou",
              japanese: "九蓮宝燈",
            },
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
            names: {
              japaneseRomaji: "Ittsu",
              japanese: "一気通貫",
              english: "Full Straight",
            },
            description: null,
          },
          {
            name: "Same run each suit",
            value: "1",
            names: {
              japaneseRomaji: "Sanshoku Doujun",
              japanese: "三色同順",
              english: "Mixed Straights",
            },
            description: null,
          },
          {
            name: "Same set each suit",
            value: "2",
            names: {
              japaneseRomaji: "Sanshoku Doukou",
              japanese: "三色同刻",
              english: "Mixed Triplets",
            },
            description: null,
          },
        ],
      },
      {
        name: "Special Criteria",
        items: [
          {
            name: "Last draw",
            value: "1",
            names: {
              japaneseRomaji: "Haitei Raoyue",
              japanese: "海底撈月",
              english: "Under the Sea",
            },
            description: null,
          },
          {
            name: "Call last discard",
            value: "1",
            names: {
              japaneseRomaji: "Houtei Raoyui",
              japanese: "河底撈魚",
              english: "Under the River",
            },
            description: null,
          },
          {
            name: "Draw after own quad",
            value: "1",
            names: {
              japaneseRomaji: "Rinshan Kaihou",
              japanese: "嶺上開花",
              english: "After a Quad",
            },
            description: null,
          },
          {
            name: "Call another's quad",
            value: "1",
            names: {
              japaneseRomaji: "Chankan",
              japanese: "搶槓",
              english: "Robbing a Quad",
            },
            description: null,
          },
          {
            name: "Only 1, 9, and honor discards, none called",
            value: "5",
            names: {
              japaneseRomaji: "Nagashi Mangan",
              japanese: "流し満貫",
            },
            description: null,
          },
        ],
      },
    ],
  },
  {
    name: "Exception Hands",
    sections: [
      {
        name: null,
        items: [
          {
            name: "7 pairs (closed only)",
            value: "2",
            names: {
              japaneseRomaji: "Chiitoitsu",
              japanese: "七対子",
              english: "Seven Pairs",
            },
            description: null,
          },
          {
            name: "Each 1, 9, wind, and dragon + dup",
            value: "L",
            names: {
              english: "Thirteen Orphans",
              japaneseRomaji: "Kokushi Musou",
              japanese: "国士無双",
            },
            description: null,
          },
        ],
      },
    ],
  },
];

const NAME_OPTIONS = [
  {
    key: "english",
    label: "English",
    chipClass: "text-emerald-700",
    toggleActiveClass: "border-emerald-300 bg-emerald-50 text-emerald-700",
    toggleInactiveClass: "border-slate-200 bg-white text-slate-500",
  },
  {
    key: "japaneseRomaji",
    label: "Romaji",
    chipClass: "text-indigo-700",
    toggleActiveClass: "border-indigo-300 bg-indigo-50 text-indigo-700",
    toggleInactiveClass: "border-slate-200 bg-white text-slate-500",
  },
  {
    key: "japanese",
    label: "Kanji",
    chipClass: "text-rose-700",
    toggleActiveClass: "border-rose-300 bg-rose-50 text-rose-700",
    toggleInactiveClass: "border-slate-200 bg-white text-slate-500",
  },
];

const INITIAL_VISIBLE_NAMES = NAME_OPTIONS.reduce(
  (acc, option) => ({ ...acc, [option.key]: false }),
  {}
);

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
  const [visibleNames, setVisibleNames] = useState(INITIAL_VISIBLE_NAMES);
  const [twoColumn, setTwoColumn] = useState(false);

  const toggleNameVisibility = (key) => {
    setVisibleNames((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderNameChips = (names) =>
    NAME_OPTIONS.map((option) => {
      if (!visibleNames[option.key]) {
        return null;
      }

      const value = names?.[option.key];
      if (!value) {
        return null;
      }

      return (
        <span
          key={option.key}
          className={`rounded-full px-1 text-xs font-semibold tracking-wide ${option.chipClass}`}
        >
          {value}
        </span>
      );
    }).filter(Boolean);
  let numNamesActive = NAME_OPTIONS.filter(
    (option) => visibleNames[option.key]
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 py-3">
      <main className="mx-auto flex max-w-7xl flex-col gap-3 px-3 text-slate-900 ">
        <div className="flex flex-col gap-3 pb-3 border-b border-slate-300">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="flex-1 text-xs font-semibold tracking-tight text-slate-950 leading-none">
              Riichi Mahjong Hand Reference
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              {NAME_OPTIONS.map((option) => {
                const isActive = visibleNames[option.key];
                return (
                  <button
                    key={option.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => toggleNameVisibility(option.key)}
                    className={`inline-flex items-center rounded-full border px-3 
py-1 text-[10px] font-semibold uppercase tracking-wide transition 
focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 ${
                      isActive
                        ? option.toggleActiveClass
                        : option.toggleInactiveClass
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <div className=" flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowLimits((prev) => !prev)}
                aria-pressed={showLimits}
                className={`inline-flex items-center rounded-full border border-slate-200 
bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide 
text-slate-500`}
              >
                {showLimits ? "Hide limit hands" : "Show limit hands"}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`gap-6 ${
            numNamesActive > 1 ? "md:columns-2" : "sm:columns-2"
          }`}
          style={{
            columnRule: "1px solid #e5e7eb",
          }}
        >
          {data.map((category) => (
            <>
              <h2 className="text-xs font-semibold text-slate-950 leading-none mb-2 border-t nth-[1]:border-t-0  pt-3 nth-[1]:pt-0 border-slate-300">
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
                  <div key={sectionKey} className="flex flex-col gap-1 mb-3">
                    {section.name && (
                      <h3
                        className={`text-sm font-medium text-slate-400 leading-none`}
                      >
                        {section.name}
                      </h3>
                    )}
                    <ul className="flex flex-col">
                      {sectionItems.map(
                        ({ item, itemKey, visibleVariants }) => {
                          const nameChips = renderNameChips(item.names);
                          const notes = [item.description].filter(Boolean);

                          return (
                            <li key={itemKey} className="">
                              <div className="flex flex-wrap items-baseline justify-between gap-4">
                                <span className="text-base font-semibold text-slate-950 flex-1">
                                  {item.name}
                                </span>
                                {nameChips.length > 0 && (
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {nameChips}
                                  </div>
                                )}
                                {notes.length > 0 && (
                                  <span className="text-xs uppercase tracking-wide text-slate-500">
                                    {notes.join(" • ")}
                                  </span>
                                )}

                                <span className="text-base font-semibold text-blue-600">
                                  {formatValue(item.value)}
                                </span>
                              </div>

                              {visibleVariants.length > 0 && (
                                <ul className="flex flex-col pl-1">
                                  {visibleVariants.map(
                                    (variant, variantIndex) => {
                                      const variantKey = `${itemKey}-variant-${variantIndex}`;
                                      const variantChips = renderNameChips(
                                        variant.names
                                      );

                                      return (
                                        <li key={variantKey} className="pl-3">
                                          <div className="flex flex-wrap items-baseline justify-between gap-3">
                                            <span className="text-sm flex-1 font-medium italic text-slate-800">
                                              {variant.name}
                                            </span>
                                            {variantChips.length > 0 && (
                                              <div className="flex flex-wrap items-center gap-1.5">
                                                {variantChips}
                                              </div>
                                            )}
                                            <span className="text-sm font-semibold text-blue-600">
                                              {formatValue(
                                                variant.value,
                                                variant.bonus
                                              )}
                                            </span>
                                          </div>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              )}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                );
              })}
            </>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
