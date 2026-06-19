import { W2 } from "@/components/widgets/W2/W2";
import { W5 } from "@/components/widgets/W5/W5";
import { W8 } from "@/components/widgets/W8/W8";
import { W11 } from "@/components/widgets/W11/W11";
import { W14 } from "@/components/widgets/W14/W14";
import { W17 } from "@/components/widgets/W17/W17";
import { W20 } from "@/components/widgets/W20/W20";
import { W23 } from "@/components/widgets/W23/W23";
import { W3 } from "@/components/widgets/W3/W3";
import { W6 } from "@/components/widgets/W6/W6";
import { W9 } from "@/components/widgets/W9/W9";
import { W12 } from "@/components/widgets/W12/W12";

// Heavy route sharing the Button CSS module with Home and the r1..r16 routes.
// The wide sharing is what pushes Turbopack to extract Button into a shared chunk
// that, once loaded here, is left in the document after a Back navigation — landing
// after Home's Banner override and flipping the cascade to orange.
export default function Catalog() {
  return (
    <main>
      <W2 />
      <W5 />
      <W8 />
      <W11 />
      <W14 />
      <W17 />
      <W20 />
      <W23 />
      <W3 />
      <W6 />
      <W9 />
      <W12 />
    </main>
  );
}
