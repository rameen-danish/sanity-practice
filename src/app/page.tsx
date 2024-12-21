import Header from "@/components/header";
import CustomCard from "@/components/card-custom";
import BottomNav from "@/components/bottom-nav";

export default function Home() {
  return (
   <div>
    <Header />
      <div className="flex justify-between items-center mt-[70px]">
        <CustomCard />
        <CustomCard />
      </div>
      <BottomNav />
   </div>
  );
}
