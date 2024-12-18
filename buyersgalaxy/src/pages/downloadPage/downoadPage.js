import D_one from '../../components/D_one/D_one';
import D_two from '../../components/D_two/D_two';
import Navbar from "../../components/navbar/navbar";
// import SectionName from "../../components/section-name/section-name";
function DownloadPage() {
  return (
    <>
      <Navbar/>
      <div data-aos="fade-in">
        <D_one></D_one>
        <D_two></D_two>
      </div>
    </>
  );
}

export default DownloadPage;
