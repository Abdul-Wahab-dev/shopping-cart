import "./assets/style/index.css";
import Link from "next/link";
export default function Payments() {
  return (
    <div className="flex justify-center items-center w-screen h-screen payments">
      <div className="flex items-center justify-center gap-4">
        <div className="item">Element</div>
        <div className="item">Checkout</div>
        <Link href={"/subscription"} className="item">
          Subscription
        </Link>
      </div>
    </div>
  );
}
