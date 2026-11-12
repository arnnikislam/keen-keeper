import Banner from "@/components/Banner/Banner";
import Summary from "@/components/Summary/Summary";
import FriendList from "./friends/page";

export default function Home() {
  return (
    <div className="py-12">
      <Banner></Banner>
      <Summary></Summary>
      <div className="divider"></div>
      <FriendList></FriendList>
    </div>
  );
}
