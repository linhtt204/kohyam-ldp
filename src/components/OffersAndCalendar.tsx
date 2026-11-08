"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";

import styles from "@/app/page.module.css";
import { CTAButton, PromoTag } from "@/components/brand";
import {
  CAMPAIGN,
  CATEGORIES,
  DOW_LABELS,
  PROMOTIONS,
  dayOfWeek,
} from "@/data/promotions";
import type { CategoryId } from "@/data/promotions";

type Filter = CategoryId | "all";

const FILTERS: { id: Filter; label: string; color: string }[] = [
  { id: "all", label: "Tất cả", color: "#28231c" },
  ...(Object.keys(CATEGORIES) as CategoryId[]).map((id) => ({
    id,
    ...CATEGORIES[id],
  })),
];

const WEEKDAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
// Weeks start on Monday; day 1 falls on Sunday, so six cells stay empty.
const LEADING_BLANKS = (dayOfWeek(1) + 6) % 7;
const DAYS = Array.from({ length: CAMPAIGN.days }, (_, i) => i + 1);

const noSubscribe = () => () => {};

/** Today's day-of-month in Vietnam, or null outside the campaign month. */
function campaignToday(): number | null {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const part = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value);

  return part("year") === CAMPAIGN.year && part("month") === CAMPAIGN.month
    ? part("day")
    : null;
}

const categoryColor = (category: CategoryId) => CATEGORIES[category].color;

export function OffersAndCalendar() {
  const [filter, setFilter] = useState<Filter>("all");
  const [pickedDay, setPickedDay] = useState<number | null>(null);
  // The server can't know the visitor's date, so it renders without a "today".
  const today = useSyncExternalStore(noSubscribe, campaignToday, () => null);

  const day = pickedDay ?? today ?? 1;
  const visible =
    filter === "all"
      ? PROMOTIONS
      : PROMOTIONS.filter((p) => p.category === filter);
  const dayPromos = PROMOTIONS.filter((p) => p.days.includes(day));

  return (
    <>
      <section id="uu-dai" className={styles.offers}>
        <div className={styles.offersHead}>
          <div className={styles.headingGroup}>
            <div className={styles.eyebrowGold}>Cả quần đảo</div>
            <h2 className={styles.h2}>Tất cả ưu đãi tháng 11</h2>
          </div>
          <div className={styles.count} aria-live="polite">
            Đang xem {visible.length} chương trình
          </div>
        </div>

        <div role="group" aria-label="Lọc ưu đãi" className={styles.chips}>
          {FILTERS.map(({ id, label, color }) => {
            const active = id === filter;
            const count =
              id === "all"
                ? PROMOTIONS.length
                : PROMOTIONS.filter((p) => p.category === id).length;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(id)}
                className={styles.chip}
                style={{ "--dot": color } as CSSProperties}
              >
                <span className={styles.chipDot} />
                <span>{label}</span>
                <span className={styles.chipCount}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.offerGrid}>
          {visible.map((promo) => (
            <article id={`ud-${promo.id}`} key={promo.id} className={styles.card}>
              <div className={styles.cardPhoto}>
                <Image
                  src={promo.photo}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 780px) 100vw, (max-width: 1160px) 50vw, 370px"
                  className={styles.cover}
                />
                <span
                  className={styles.cardBadge}
                  style={{ background: categoryColor(promo.category) }}
                >
                  {CATEGORIES[promo.category].label}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTag}>
                  <PromoTag size="sm">{promo.tag}</PromoTag>
                </div>
                <h3 className={styles.cardTitle}>{promo.title}</h3>
                <p className={styles.cardText}>{promo.description}</p>
                <dl className={styles.facts}>
                  <dt>Thời gian</dt>
                  <dd>{promo.when}</dd>
                  <dt>Áp dụng</dt>
                  <dd>{promo.where}</dd>
                </dl>
                <details className={styles.conditions}>
                  <summary>Xem điều kiện ▾</summary>
                  <p>{promo.conditions}</p>
                </details>
                <div className={styles.cardCta}>
                  <CTAButton size="sm" label={promo.cta} href="#dat-ban" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="lich" className={styles.calendarSection}>
        <div className={styles.calendarInner}>
          <div className={styles.calendarLeft}>
            <div className={styles.headingGroup}>
              <div className={styles.eyebrowGold}>Lịch tháng 11</div>
              <h2 className={styles.h2}>Hôm nào ghé, có gì ngon?</h2>
              <p className={styles.calendarHint}>
                Chạm vào một ngày để xem ưu đãi đang chạy.
              </p>
            </div>
            <div className={styles.calendar}>
              <div className={styles.weekRow}>
                {WEEKDAYS.map((weekday) => (
                  <div key={weekday} className={styles.weekday}>
                    {weekday}
                  </div>
                ))}
              </div>
              <div className={styles.dayGrid}>
                {Array.from({ length: LEADING_BLANKS }, (_, i) => (
                  <div key={`blank-${i}`} aria-hidden="true" />
                ))}
                {DAYS.map((d) => {
                  const active = PROMOTIONS.filter((p) => p.days.includes(d));
                  const dots = [
                    ...new Set(active.map((p) => categoryColor(p.category))),
                  ];
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setPickedDay(d)}
                      aria-label={`${d}/11, ${active.length} ưu đãi`}
                      aria-pressed={d === day}
                      aria-current={d === today ? "date" : undefined}
                      className={styles.dayCell}
                    >
                      <span>{d}</span>
                      <span className={styles.dots}>
                        {dots.map((color) => (
                          <span
                            key={color}
                            className={styles.dot}
                            style={{ "--dot": color } as CSSProperties}
                          />
                        ))}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className={styles.legend}>
                {Object.values(CATEGORIES).map(({ label, color }) => (
                  <span key={label} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{ background: color }}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.dayPanel} aria-live="polite">
            <div className={styles.dayHead}>
              <div className={styles.dayNumber}>
                {String(day).padStart(2, "0")}/11
              </div>
              <div className={styles.dayMeta}>
                {DOW_LABELS[dayOfWeek(day)]}
                {day === today ? " · Hôm nay" : ""} · {dayPromos.length} ưu đãi
              </div>
            </div>
            {dayPromos.map((promo) => (
              <a
                key={promo.id}
                href={`#ud-${promo.id}`}
                // The card only exists in the list when the filter shows it.
                onClick={() => setFilter("all")}
                className={styles.dayPromo}
              >
                <span
                  className={styles.dayPromoBar}
                  style={{ background: categoryColor(promo.category) }}
                />
                <span className={styles.dayPromoBody}>
                  <span className={styles.dayPromoTitle}>{promo.title}</span>
                  <span className={styles.dayPromoMeta}>
                    {promo.tag} · {promo.when}
                  </span>
                </span>
              </a>
            ))}
            {dayPromos.length === 0 && (
              <p className={styles.dayEmpty}>
                Hôm nay chưa có chương trình chung — ghé thử ưu đãi riêng ở từng đảo nhé.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
