import { Layout } from "antd";
import HeaderComponent from "./header/HeaderComponent";
import ContentArea from "./contentarea/ContentArea";
import FooterComponent from "./footer/FooterComponent";


function LayoutComponent() {
  return (
    <Layout>
        {/* <HeaderComponent /> */}
        <ContentArea />
        
    </Layout>
  );
}

export default LayoutComponent;