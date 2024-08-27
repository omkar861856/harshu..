/* eslint-disable react/prop-types */
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  FieldTimeOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
import { useState, useEffect } from "react";
import { ConfigProvider, Button } from "antd";
import "./theme.less"; // Import your custom theme file

const items = [
  getItem("About Me", "1", <PieChartOutlined />),
  getItem("Business Overview", "2", <DesktopOutlined />),
  getItem("Key Achievements", "sub1", <UserOutlined />, [
    getItem("Success Stories", "3"),
    getItem("Metrics and Data", "4"),
    getItem("Skill Set", "5"),
  ]),
  getItem("Upcoming Projects", "sub2", <TeamOutlined />, [
    getItem("Project 1", "6"),
    getItem("Project 2", "8"),
  ]),
  getItem("Timeline", '7', <FieldTimeOutlined />),
  getItem("Networking Links", "9", <FileOutlined />),
];
const LayoutMain = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  // for theme.


//   const [theme1, setTheme1] = useState("dark-blue-theme");

//   useEffect(() => {
//     document.body.className = theme; // Apply the theme to the body
//   }, [theme1]);

//   const toggleTheme = () => {
//     setTheme1((prevTheme) =>
//       prevTheme === "dark-blue-theme" ? "off-white-theme" : "dark-blue-theme"
//     );
//   };
  const navigate = useNavigate();
  const handleClick = (e) => {
    // console.log("Clicked item key:", e.key);
    // Perform actions based on the clicked key
    // Example:
    switch (e.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/business-overview");
        break;
      case "3":
        navigate("/key-achievements/success-stories");
        break;
      case "4":
        navigate("/key-achievements/metrics-and-data");
        break;
      case "5":
        navigate("/key-achievements/skill-set");
        break;
      case "6":
        navigate("/upcoming-projects/project-1");
        break;
        case "7":
        navigate("/timeline");
        break;
      case "8":
        navigate("/upcoming-projects/project-2");
        break;
      case "9":
        navigate("/networking-links");
        break;
      //   case "10":
      //     navigate("/key-achievements/success-stories");
      //     break;
      default:
        navigate("/404");
    }
  };
  return (
    <ConfigProvider>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            onClick={handleClick}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            {/* <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
            <div
              id="children"
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                color: 'var(--text-color)'
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Clutch ©{new Date().getFullYear()} Created with 💗 in India.
            {/* For theme */}
            {/* <Button type="primary" onClick={toggleTheme}>
              Toggle Theme
            </Button> */}
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default LayoutMain;
