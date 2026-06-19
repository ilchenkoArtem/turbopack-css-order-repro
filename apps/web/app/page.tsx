import { Banner } from "@/components/Banner/Banner";
import { W1 } from "@/components/widgets/W1/W1";
import { W7 } from "@/components/widgets/W7/W7";
import { W13 } from "@/components/widgets/W13/W13";

export default function Home() {
  return (
    <main>
      <Banner />
      <p className="hint">
        The “Show more” button should be <strong>transparent</strong> (white border,
        white text). Click it to go to <code>/catalog</code>, then press the browser
        <strong> Back</strong> button. Under Turbopack the button can turn{" "}
        <strong>orange</strong>: a re-emitted copy of <code>Button.module.css</code>{" "}
        lands after <code>Banner.module.css</code>, so <code>.kindPrimary</code> wins
        over the equal-specificity <code>.featureButton</code>.
      </p>
    </main>
  );
}
