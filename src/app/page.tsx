import Image from "next/image";

import {
  CTAButton,
  IslandStamp,
  LocationTag,
  Logo,
  PatternBand,
  Postmark,
  PromoTag,
} from "@/components/brand";
import { OffersAndCalendar } from "@/components/OffersAndCalendar";
import { CONTACT, FAQS, ISLANDS } from "@/data/promotions";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.logoLink}>
            <Logo ink="brown" height={30} />
          </a>
          <nav className={styles.nav}>
            <a href="#uu-dai">Ưu đãi</a>
            <a href="#lich">Lịch tháng 11</a>
            <a href="#dao">Theo đảo</a>
            <a href="#dieu-kien">Điều kiện</a>
            <CTAButton size="sm" label="Đặt bàn ngay" href="#dat-ban" />
          </nav>
        </div>
      </header>

      <main>
        <section id="top" data-theme="xanh" className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.heroEyebrow}>Ưu đãi tháng 11 · 2026</div>
              <h1 className={styles.heroTitle}>
                Tháng 11, Koh nêm <span className={styles.heroScript}>ưu đãi</span> vừa miệng
              </h1>
              <p className={styles.heroLead}>
                8 chương trình chung cho cả quần đảo, thêm 6 món quà riêng ở từng đảo Koh. Từ
                bữa trưa văn phòng tới bàn tiệc sinh nhật — bạn chọn, Koh lo phần nêm.
              </p>
              <div className={styles.heroActions}>
                <CTAButton label="Xem ưu đãi" href="#uu-dai" />
                <CTAButton variant="outline" label="Đặt bàn ngay" href="#dat-ban" />
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroPhoto}>
                <Image
                  src="/assets/photos/food-ban-tiec.jpg"
                  alt="Bàn tiệc nhiều món Thái tại Koh Yam"
                  fill
                  priority
                  sizes="(max-width: 568px) 100vw, 520px"
                  className={styles.cover}
                />
              </div>
              <div className={styles.heroPostmark}>
                <Postmark
                  top="Ưu đãi tháng"
                  bottom="Koh Yam"
                  center="11"
                  color="#9a2220"
                  size={128}
                />
              </div>
              <div className={styles.heroTag}>
                <PromoTag>1 – 30/11 · Cả 6 đảo</PromoTag>
              </div>
            </div>
          </div>
          <div className={styles.heroPattern}>
            <PatternBand height={36} opacity={0.5} />
          </div>
        </section>

        <OffersAndCalendar />

        <section id="dao" data-theme="xanh" className={styles.islands}>
          <div className={styles.islandsInner}>
            <div className={styles.islandsHead}>
              <div className={styles.eyebrowOnGreen}>Riêng từng đảo</div>
              <h2 className={styles.islandsTitle}>
                Mỗi đảo Koh, một món quà <span className={styles.islandsScript}>riêng</span>
              </h2>
              <p className={styles.islandsLead}>
                Cộng thêm vào ưu đãi chung, chỉ có khi bạn ghé đúng đảo đó.
              </p>
            </div>
            <div className={styles.islandGrid}>
              {ISLANDS.map((island) => (
                <article
                  key={island.slug}
                  data-island={island.slug}
                  className={styles.islandCard}
                >
                  <div className={styles.islandBand} />
                  <div className={styles.islandBody}>
                    <div className={styles.islandStamp}>
                      <IslandStamp
                        island={island.slug}
                        kicker="Đảo"
                        name={island.short}
                        sub={island.address}
                        date="11 · 2026"
                      />
                    </div>
                    <div className={styles.islandCopy}>
                      <h3 className={styles.islandTitle}>{island.title}</h3>
                      <p className={styles.islandText}>{island.description}</p>
                      <div className={styles.islandWhen}>{island.when}</div>
                      <div>
                        <LocationTag island={island.slug}>{island.address}</LocationTag>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dieu-kien" className={styles.faq}>
          <div className={styles.headingGroup}>
            <div className={styles.eyebrowGold}>Điều kiện chung</div>
            <h2 className={styles.faqTitle}>Nói trước cho rõ, ăn mới vui</h2>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.faqPlus} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="dat-ban" className={styles.booking}>
          <div className={styles.bookingCard}>
            <div className={styles.bookingCopy}>
              <h2 className={styles.bookingTitle}>Ghé Koh tháng này nhé</h2>
              <p className={styles.bookingText}>
                Đặt bàn trước để Koh giữ chỗ và chuẩn bị sẵn ưu đãi cho cả bàn. Nhắn mã ưu đãi
                khi đặt là được.
              </p>
            </div>
            <div data-theme="xanh" className={styles.bookingActions}>
              <CTAButton label="Đặt bàn ngay" href={CONTACT.bookingHref} />
              <div className={styles.bookingContact}>
                Hotline {CONTACT.hotline} · Zalo OA Koh Yam
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Logo tagline ink="gold" height={40} />
          <div className={styles.footerText}>
            Bếp Thái Koh Yam · Thai Kitchen &amp; Dessert · Hà Nội · TP.HCM
            <br />
            Ưu đãi áp dụng 01/11 – 30/11/2026, theo điều kiện từng chương trình.
          </div>
        </div>
      </footer>
    </div>
  );
}
