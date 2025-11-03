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
            },
            description: null,
            variants: [
              {
                name: "Win before next discard",
                value: "1",
                names: {
                  japaneseRomaji: "Ippatsu",
                  japanese: "一発",
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
              japaneseRomaji: "Menzen Tsumo",
              japanese: "門前清自摸和",
            },
            description: null,
          },
          {
            name: "2 same runs same suit",
            value: "1",
            names: {
              japaneseRomaji: "Iipeikou",
              japanese: "一盃口",
            },
            description: null,
          },
          {
            name: "Double of 2 same runs same suit",
            value: "3",
            names: {
              japaneseRomaji: "Ryanpeikou",
              japanese: "二盃口",
            },
            description: null,
          },
          {
            name: "Only runs, pair is not honors, must win with outside run wait",
            value: "1",
            names: {
              japaneseRomaji: "Pinfu",
              japanese: "平和",
            },
            description: null,
          },
          {
            name: "Win on first draw (dealer only)",
            value: "L",
            names: {
              japaneseRomaji: "Tenhou",
              japanese: "天和",
            },
            description: null,
          },
          {
            name: "Win on first hand",
            value: "L",
            names: {
              japaneseRomaji: "Chiihou",
              japanese: "地和",
            },
            description: null,
          },
          {
            name: "Win on call of first turn",
            value: "L",
            names: {
              japaneseRomaji: "Renhou",
              japanese: "人和",
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
            name: "All simples",
            value: "1",
            names: {
              japaneseRomaji: "Tanyao",
              japanese: "断么九",
            },
            description: null,
          },
          {
            name: "All groups contain ends or honors",
            value: "1",
            names: {
              japaneseRomaji: "Chanta",
              japanese: "混全帯么九",
            },
            description: null,
          },
          {
            name: "All groups contain ends",
            value: "2",
            names: {
              japaneseRomaji: "Junchan",
              japanese: "純全帯么九",
            },
            description: null,
          },
          {
            name: "All ends and honors",
            value: "2",
            names: {
              japaneseRomaji: "Honroutou",
              japanese: "混老頭",
            },
            description: null,
          },
          {
            name: "All ends",
            value: "L",
            names: {
              japaneseRomaji: "Chinroutou",
              japanese: "清老頭",
            },
            description: null,
          },
          {
            name: "All honors",
            value: "L",
            names: {
              japaneseRomaji: "Tsuuiisou",
              japanese: "字一色",
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
            },
            description: null,
          },
          {
            name: "3 concealed sets",
            value: "2",
            names: {
              japaneseRomaji: "Sanankou",
              japanese: "三暗刻",
            },
            description: null,
          },
          {
            name: "4 concealed sets",
            value: "L",
            names: {
              japaneseRomaji: "Suankou",
              japanese: "四暗刻",
            },
            description: null,
          },
          {
            name: "3 quads",
            value: "2",
            names: {
              japaneseRomaji: "Sankantsu",
              japanese: "三槓子",
            },
            description: null,
          },
          {
            name: "4 quads",
            value: "L",
            names: {
              japaneseRomaji: "Sukantsu",
              japanese: "四槓子",
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
            },
            description: null,
          },
          {
            name: "2 sets, 1 pair, of each dragon",
            value: "2",
            names: {
              english: "3 lil dragons",
              japaneseRomaji: "Shousangen",
              japanese: "小三元",
            },
            description: null,
          },
          {
            name: "3 sets of each dragon",
            value: "L",
            names: {
              english: "3 big dragons",
              japaneseRomaji: "Daisangen",
              japanese: "大三元",
            },
            description: null,
          },
          {
            name: "3 sets, 1 pair, of each wind",
            value: "L",
            names: {
              english: "4 lil winds",
              japaneseRomaji: "Shousuushii",
              japanese: "小四喜",
            },
            description: null,
          },
          {
            name: "4 sets of each wind",
            value: "2L",
            names: {
              english: "4 big winds",
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
            name: "All one suit and honors",
            value: "2",
            names: {
              japaneseRomaji: "Honitsu",
              japanese: "混一色",
            },
            description: null,
          },
          {
            name: "All one suit",
            value: "5",
            names: {
              japaneseRomaji: "Chinitsu",
              japanese: "清一色",
            },
            description: null,
          },
          {
            name: "All green",
            value: "L",
            names: {
              japaneseRomaji: "Ryuuiisou",
              japanese: "緑一色",
            },
            description: null,
          },
          {
            name: "11 123 456 789 99 + 1 dup, one suit",
            value: "L",
            names: {
              english: "Nine gates",
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
            },
            description: null,
          },
          {
            name: "Same 3 runs each suit",
            value: "1",
            names: {
              japaneseRomaji: "Sanshoku Doujun",
              japanese: "三色同順",
            },
            description: null,
          },
          {
            name: "Same 3 sets each suit",
            value: "2",
            names: {
              japaneseRomaji: "Sanshoku Doukou",
              japanese: "三色同刻",
            },
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
            names: {
              japaneseRomaji: "Haitei Raoyue",
              japanese: "海底撈月",
            },
            description: null,
          },
          {
            name: "Win by calling last discard",
            value: "1",
            names: {
              japaneseRomaji: "Houtei Raoyui",
              japanese: "河底撈魚",
            },
            description: null,
          },
          {
            name: "Win on draw after own quad",
            value: "1",
            names: {
              japaneseRomaji: "Rinshan Kaihou",
              japanese: "嶺上開花",
            },
            description: null,
          },
          {
            name: "Win by calling another's quad",
            value: "1",
            names: {
              japaneseRomaji: "Chankan",
              japanese: "搶槓",
            },
            description: null,
          },
          {
            name: "Win with only end and honor discards, none called",
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
    name: "Oddball Hands",
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
            },
            description: null,
          },
          {
            name: "Each end, wind, and dragon",
            value: "L",
            names: {
              english: "13 orphans",
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
  (acc, option) => ({ ...acc, [option.key]: true }),
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
          className={`rounded-full px-1 text-xs font-semibold tracking-wide ${option.chipClass}`}
        >
          {value}
        </span>
      );
    }).filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-100 py-3">
      <main className="mx-auto flex max-w-5xl flex-col gap-3 px-3 text-slate-900 divide-y divide-slate-300">
        <div className="flex flex-col gap-3 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
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
          <div className="flex flex-wrap items-center gap-2">
            {NAME_OPTIONS.map((option) => {
              const isActive = visibleNames[option.key];
              return (
                <button
                  key={option.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => toggleNameVisibility(option.key)}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 ${
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
                              {visibleVariants.map((variant, variantIndex) => {
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
