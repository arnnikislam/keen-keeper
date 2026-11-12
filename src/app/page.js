import Banner from "@/components/Banner/Banner";
import Summary from "@/components/Summary/Summary";

export default function Home() {
  return (
    <div className="py-12">
      <Banner></Banner>
      <Summary></Summary>
      <div className="divider"></div>
    </div>
  );
}
