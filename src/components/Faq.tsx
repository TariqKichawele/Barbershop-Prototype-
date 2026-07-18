import { FAQ_ITEMS } from "@/lib/site";

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="shell faq__grid">
        <div className="section-heading faq__heading reveal">
          <p className="eyebrow">FAQ</p>
          <h2>Before you book</h2>
          <p className="section-lead">
            Quick answers on parking, walk-ins, cancellations, kids, and payment
            so your visit is smooth from the start.
          </p>
        </div>

        <div className="faq__list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="faq__item reveal">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
