import Header  from "./Header.jsx";
import Footer  from "./Footer.jsx";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted() {
  return (
    <div>
    <Header />
   
    <section class="pt-20 pb-32">
     MIDDLE
    </section>
    
      <Footer />
    </div>
  );
}
