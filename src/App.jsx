import { useState } from "react";

const data = [
  {
    name: "Closed Only Hands",
    sections: [
      {
        name: null,
        items: [
          {
            value: "1",
            names: {
              short: "Declare riichi",
              japaneseRomaji: "Riichi",
              japanese: "立直",
              english: "Ready",
            },
            description: null,
            variants: [
              {
                value: "1",
                names: {
                  short: "Win before next discard",
                  japaneseRomaji: "Ippatsu",
                  japanese: "一発",
                  english: "One-shot",
                },
                description: null,
                bonus: true,
              },
              {
                value: "1",
                names: {
                  short: "On first turn",
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
            value: "1",
            names: {
              short: "Draw the winning tile",
              japaneseRomaji: "Tsumo",
              japanese: "門前清自摸和",
              english: "Self Draw",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "Twin runs",
              japaneseRomaji: "Iipeikou",
              japanese: "一盃口",
              english: "Double Straights",
            },
            description: null,
          },
          {
            value: "3",
            names: {
              short: "Double twin runs",
              japaneseRomaji: "Ryanpeikou",
              japanese: "二盃口",
              english: "Two Double Straights",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "Only runs, no honors, outside wait",
              japaneseRomaji: "Pinfu",
              japanese: "平和",
              english: "No-points",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "Win on first draw (dealer only)",
              japaneseRomaji: "Tenhou",
              japanese: "天和",
              english: "Blessing of Heaven",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "Win on first hand",
              japaneseRomaji: "Chiihou",
              japanese: "地和",
              english: "Blessing of Earth",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "Win on call of first turn",
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
            value: "1",
            names: {
              short: "All 2 - 8",
              japaneseRomaji: "Tanyao",
              japanese: "断么九",
              english: "All Simples",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "All contain 1, 9, or honors",
              japaneseRomaji: "Chanta",
              japanese: "混全帯么九",
              english: "Common Ends",
            },
            description: null,
          },
          {
            value: "2",
            names: {
              short: "All contain 1 or 9",
              japaneseRomaji: "Junchan",
              japanese: "純全帯么九",
              english: "Perfect Ends",
            },
            description: null,
          },
          {
            value: "2",
            names: {
              short: "All 1, 9, or honors",
              japaneseRomaji: "Honroutou",
              japanese: "混老頭",
              english: "Common Terminals",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "All 1 and 9",
              japaneseRomaji: "Chinroutou",
              japanese: "清老頭",
              english: "Perfect Terminals",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "All honors",
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
            value: "2",
            names: {
              short: "4 sets",
              japaneseRomaji: "Toitoi",
              japanese: "対々和",
              english: "All Triplets",
            },
            description: null,
          },
          {
            value: "2",
            names: {
              short: "3 concealed sets",
              japaneseRomaji: "Sanankou",
              japanese: "三暗刻",
              english: "Three Concealed Triplets",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "4 concealed sets",
              japaneseRomaji: "Suankou",
              japanese: "四暗刻",
              english: null,
              english: "Four Concealed Triplets",
            },
            description: null,
          },
          {
            value: "2",
            names: {
              short: "3 quads",
              japaneseRomaji: "Sankantsu",
              japanese: "三槓子",
              english: "Three Quads",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "4 quads",
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
            value: "1",
            names: {
              short: "1 value honor set",
              japaneseRomaji: "Yakuhai",
              japanese: "役牌",
              english: "Value Triplet",
            },
            description: null,
          },
          {
            value: "2",
            names: {
              short: "2 sets & pair each dragon",
              english: "Little Dragons",
              japaneseRomaji: "Shousangen",
              japanese: "小三元",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "3 sets each dragon",
              english: "Big Dragons",
              japaneseRomaji: "Daisangen",
              japanese: "大三元",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "3 sets & pair each wind",
              english: "Little Winds",
              japaneseRomaji: "Shousuushii",
              japanese: "小四喜",
            },
            description: null,
          },
          {
            value: "2L",
            names: {
              short: "4 sets each wind",
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
            value: "2",
            names: {
              short: "All one suit or honors",
              japaneseRomaji: "Honitsu",
              japanese: "混一色",
              english: "Common Flush",
            },
            description: null,
          },
          {
            value: "5",
            names: {
              short: "All one suit",
              japaneseRomaji: "Chinitsu",
              japanese: "清一色",
              english: "Perfect Flush",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "All green",
              japaneseRomaji: "Ryuuiisou",
              japanese: "緑一色",
              english: "All Green",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "11 123 456 789 99 + dup one suit",
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
            value: "1",
            names: {
              short: "123 456 789 same suit",
              japaneseRomaji: "Ittsu",
              japanese: "一気通貫",
              english: "Full Straight",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "Same run each suit",
              japaneseRomaji: "Sanshoku Doujun",
              japanese: "三色同順",
              english: "Mixed Straights",
            },
            description: null,
          },
          {
            value: "2",
            names: {
              short: "Same set each suit",
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
            value: "1",
            names: {
              short: "Last draw",
              japaneseRomaji: "Haitei Raoyue",
              japanese: "海底撈月",
              english: "Under the Sea",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "Call last discard",
              japaneseRomaji: "Houtei Raoyui",
              japanese: "河底撈魚",
              english: "Under the River",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "Draw after own quad",
              japaneseRomaji: "Rinshan Kaihou",
              japanese: "嶺上開花",
              english: "After a Quad",
            },
            description: null,
          },
          {
            value: "1",
            names: {
              short: "Call another's quad",
              japaneseRomaji: "Chankan",
              japanese: "搶槓",
              english: "Robbing a Quad",
            },
            description: null,
          },
          {
            value: "5",
            names: {
              short: "Only 1, 9, and honor discards, none called",
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
            value: "2",
            names: {
              short: "7 pairs (closed only)",
              japaneseRomaji: "Chiitoitsu",
              japanese: "七対子",
              english: "Seven Pairs",
            },
            description: null,
          },
          {
            value: "L",
            names: {
              short: "Each 1, 9, wind, and dragon + dup",
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
    key: "short",
    label: "Short",
    chipClass: "text-slate-700",
    toggleActiveClass: "border-slate-400 bg-slate-100 text-slate-700",
    toggleInactiveClass: "border-slate-200 bg-white text-slate-500",
  },
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
  (acc, option, index) => ({ ...acc, [option.key]: index == 0 }),
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
          className={`rounded-full px-1 text-xs font-semibold tracking-wide nth-[1]:flex-1 nth-[1]:font-semibold nth-[1]:text-base ${option.chipClass}`}
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
      <main
        className={`mx-auto flex flex-col gap-3 px-3 text-slate-900 ${
          numNamesActive < 2
            ? "max-w-4xl"
            : numNamesActive < 3
            ? "max-w-5xl"
            : "max-w-6xl"
        }`}
      >
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
                    onClick={() => {
                      setVisibleNames((prev) => {
                        let numActive = NAME_OPTIONS.filter(
                          (o) => prev[o.key]
                        ).length;

                        return {
                          ...prev,
                          [option.key]:
                            numActive > 1 ? !prev[option.key] : true,
                        };
                      });
                    }}
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
            numNamesActive > 3
              ? "lg:columns-2"
              : numNamesActive > 2
              ? "md:columns-2"
              : "sm:columns-2"
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
                                {nameChips.length > 0 && (
                                  <div className="flex flex-wrap items-center gap-1.5 flex-1">
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
                                            {variantChips.length > 0 && (
                                              <div className="flex flex-wrap items-center gap-1.5 flex-1 first:italic">
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
