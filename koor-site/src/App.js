import KoorMetaTags from "./components/KoorMetaTags";
import Main_CoverImage from "./components/Main_CoverImage"
import Main_NavBar from "./components/Main_NavBar";
import Main_UmbraDeal from "./components/Main_UmbraDeal";
import Main_TFYourSona from "./components/Main_TFYourSona";
import Main_Youtube from "./components/Main_Youtube";
import Main_Tanuki from "./components/Main_Tanuki";
import Main_Artwork from "./components/Main_Artwork";
import Main_FootBar from "./components/Main_FootBar";
import Main_Patreon from "./components/Main_Patreon";

export default function App() {
  return (
    <>
    <KoorMetaTags
        title="PureKoor"
        description="Pure Tycoon creating artwork, videos, and more!"
        image="https://purekoor.com/assets/img/main/SocialPreview.png"
        name="furry,art,artwork,freelance,purekoor,streaming,video,creator,digital,3D,Avatar"
        url="https://purekoor.com"
        author="James"
      />
        <div className="h-fit bg-gradient-to-b from-[#47a2ed] to-[#323384] overflow-hidden">
      <Main_CoverImage />
      <div className="flex flex-col flex-start items-center justify-center mx-auto max-w-screen-xl gap-2">
        <div className="max-w-screen-xl w-full">
          <Main_NavBar />
          <Main_UmbraDeal />
        </div>
        <Main_Youtube />
        <Main_Patreon />
        <Main_TFYourSona />
        <Main_Tanuki />
        <Main_Artwork />
        <Main_FootBar />
      </div>
    </div>
    </>
  );
}
