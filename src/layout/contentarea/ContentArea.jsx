import { Layout } from "antd";
import { Button } from "antd";
import { useRef, useState, useEffect } from "react";
import { Col, Row, Card, Checkbox, Form, Input } from "antd";
import { Tabs } from "antd";
import VisibilitySensor from "react-visibility-sensor";

import {
  ArrowRightOutlined,
  PhoneOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./contentarea.css";
const { Content } = Layout;
const { TextArea } = Input;

function ContentArea() {
  const [isPlaying, setIsPlaying] = useState(false);

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const videoRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Monthly",
      children: (
        <div className="flex flex-wrap justify-center gap-8 mt-5">
          <div className="relative w-80 h-[420px]  rounded-2xl shadow-xl border border-[#0A77B4] p-8 flex flex-col justify-between items-center text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 ">
              <img
                src="/images/logo.webp"
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="text-2xl font-semibold mt-8">Starter</p>
              <p className="text-3xl font-bold mt-2">
                $99<span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-4 text-black-300">
                A nice tier for individuals who need a calm workspace.
              </p>
            </div>

            <ul className="mt-6 list-disc list-inside space-y-2 text-black-300">
              <li>Hot desk access</li>
              <li>High-speed Wi-Fi</li>
              <li>Free coffee & tea</li>
              <li>Dedicated desks</li>
            </ul>
            <div>
              <Button
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "8px",
                }}
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-green-400 p-2 w-50"
              >
                Book a Call{" "}
                <ArrowRightOutlined
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                />
              </Button>
            </div>
          </div>

          <div className="relative w-80 h-[420px]  rounded-2xl shadow-xl border border-[#0A77B4] p-8 flex flex-col justify-between items-center text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 ">
              <img
                src="/images/logo.webp"
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="text-2xl font-semibold mt-8">Team</p>
              <p className="text-3xl font-bold mt-2">
                $199<span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-4 text-black-300">
                A Shared space built for collaboration.
              </p>
            </div>

            <ul className="mt-6 list-disc list-inside space-y-2 text-black-300">
              <li>Everything in first tier</li>
              <li>Meeting room hours</li>
              <li>24/7 access</li>
              <li>Bussiness address use</li>
            </ul>
            <div>
              <Button
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "8px",
                }}
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-green-400 p-2 w-50"
              >
                Book a Call{" "}
                <ArrowRightOutlined
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                />
              </Button>
            </div>
          </div>

          <div className="relative w-80 h-[420px]  rounded-2xl shadow-xl border border-[#0A77B4] p-8 flex flex-col justify-between items-center text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 ">
              <img
                src="/images/logo.webp"
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="text-2xl font-semibold mt-8">Enterprise</p>
              <p className="text-3xl font-bold mt-2">
                $299<span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-4 text-black-300">
                Full-scale access with all the perks.
              </p>
            </div>

            <ul className="mt-6 list-disc list-inside  space-y-2 text-black-300">
              <li>Everything in second tier</li>
              <li>Private office suite</li>
              <li>Mail & package handling</li>
              <li>Onsite support team</li>
            </ul>
            <div>
              <Button
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "8px",
                }}
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-green-400 p-2 w-50"
              >
                Book a Call{" "}
                <ArrowRightOutlined
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Anually",
      children: (
        <div className="flex flex-wrap justify-center gap-8  mt-5">
          <div className="relative w-80 h-[420px]  rounded-2xl shadow-xl border border-[#0A77B4] p-8 flex flex-col justify-between items-center text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 ">
              <img
                src="/images/logo.webp"
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="text-2xl font-semibold mt-8">Starter</p>
              <p className="text-3xl font-bold mt-2">
                $1,188<span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-4 text-black-300">
                A nice tier for individuals who need a calm workspace.
              </p>
            </div>

            <ul className="mt-6 list-disc list-inside space-y-2 text-black-300">
              <li>Hot desk access</li>
              <li>High-speed Wi-Fi</li>
              <li>Free coffee & tea</li>
              <li>Dedicated desks</li>
            </ul>
            <div>
              <Button
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "8px",
                }}
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-green-400 p-2 w-50"
              >
                Book a Call{" "}
                <ArrowRightOutlined
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                />
              </Button>
            </div>
          </div>

          <div className="relative w-80 h-[420px]  rounded-2xl shadow-xl border border-[#0A77B4] p-8 flex flex-col justify-between items-center text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 ">
              <img
                src="/images/logo.webp"
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="text-2xl font-semibold mt-8">Team</p>
              <p className="text-3xl font-bold mt-2">
                $2,388<span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-4 text-black-300">
                A Shared space built for collaboration.
              </p>
            </div>

            <ul className="mt-6 list-disc list-inside space-y-2 text-black-300">
              <li>Everything in first tier</li>
              <li>Meeting room hours</li>
              <li>24/7 access</li>
              <li>Bussiness address use</li>
            </ul>
            <div>
              <Button
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "8px",
                }}
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-green-400 p-2 w-50"
              >
                Book a Call{" "}
                <ArrowRightOutlined
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                />
              </Button>
            </div>
          </div>

          <div className="relative w-80 h-[420px]  rounded-2xl shadow-xl border border-[#0A77B4] p-8 flex flex-col justify-between items-center text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 ">
              <img
                src="/images/logo.webp"
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>

            <div>
              <p className="text-2xl font-semibold mt-8">Enterprise</p>
              <p className="text-3xl font-bold mt-2">
                $3,588<span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-4 text-black-300">
                Full-scale access with all the perks.
              </p>
            </div>

            <ul className="mt-6 list-disc list-inside  space-y-2 text-black-300">
              <li>Everything in second tier</li>
              <li>Private office suite</li>
              <li>Mail & package handling</li>
              <li>Onsite support team</li>
            </ul>
            <div>
              <Button
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "8px",
                }}
                type="primary"
                htmlType="submit"
                className="bg-blue-500 hover:bg-green-400 p-2 w-50"
              >
                Book a Call{" "}
                <ArrowRightOutlined
                  style={{
                    transform: "rotate(-45deg)",
                    display: "inline-block",
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.4 }
    );
    if (section2.current) observer.observe(section2.current);
    return () => observer.disconnect();
  }, []);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           videoRef.current.play();
  //           setIsPlaying(true);
  //         } else {
  //           videoRef.current.pause();
  //           videoRef.current.currentTime = 0;
  //           setIsPlaying(false);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );
  //   if (videoRef.current) {
  //     observer.observe(videoRef.current);
  //   }
  //   return () => {
  //     if (videoRef.current) {
  //       observer.unobserve(videoRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div>
      <section
        id="section1"
        ref={section1}
        className="h-180 bg-[url(/images/section1-bg.webp)] bg-black bg-no-repeat bg-cover     "
      >
        <div className=" flex justify-around">
          <div>
            <img src="/images/logo.webp" alt="logo" className="w-15 mt-5" />
          </div>
          <div className="header  mt-5">
            <span onClick={() => scrollToSection(section1)}>Home</span>
            <span onClick={() => scrollToSection(section2)}>How it works</span>
            <span onClick={() => scrollToSection(section3)}>features</span>
            <span onClick={() => scrollToSection(section4)}>Pricing</span>
            <span>
              <Button
                className="bg-blue-500  rounded-3xl p-2"
                onClick={() => scrollToSection(section5)}
              >
                Book a Demo{" "}
              </Button>
            </span>
          </div>
        </div>
        <div className="">
          <Row>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <div className="form_section_left">
                <p
                  style={{
                    fontSize: "50px",
                    fontWeight: "600",
                    fontFamily: "Bricolage Grotesque",
                  }}
                >
                  Security AI integration for Business
                </p>

                <p style={{ fontSize: "14px", marginTop: "5%" }}>
                  Work without the hassle of multiple passwords. Quantum Pass
                  lets your team access every authorized platform with a single,
                  secure click. With built-in encryption, multi-factor
                  authentication, and real-time tracking, your data stays
                  protected and your work stays effortless.
                </p>
              </div>
            </Col>

            <Col span={12} style={{ marginTop: "5%" }}>
              <div className="container">
                <img
                  src="/images/hero-logo.webp"
                  alt="logo"
                  className="transition-logo"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section
        id="section2"
        ref={section2}
        className="relative h-[100vh] flex flex-col justify-center items-center bg-white"
      >
        <div className="flex flex-col items-center text-center section_container">
          <img
            src="/images/finalized logo 1.webp"
            alt="logo"
            className="w-64 "
          />

          <div className="relative w-[600px] h-[400px] flex justify-center items-center">
            <img
              src="/images/blue-frame.webp"
              alt="base frame"
              className="w-[550px] "
            />

            <img
              src="/images/laptop-frame.webp"
              alt="overlay frame"
              className={`absolute bottom-8 left-18 w-[450px] transition-all duration-[1200ms] ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            />
          </div>

          <h1 className=" text-[#0A77B4] font-semibold text-2xl">
            One Click. Total Control
          </h1>

          <p className="w-[600px] mt-2 text-gray-700">
            Work without the hassle of multiple passwords. Quantum Pass lets
            your team access every authorized platform with a single, secure
            click. With built-in encryption, multi-factor authentication, and
            real-time tracking, your data stays protected and your work stays
            effortless.
          </p>

          <button
            className="mt-3 bg-[#2A98F8] text-white rounded-full px-6 py-2"
            onClick={() => scrollToSection(section5)}
          >
            Book a demo
          </button>
        </div>
      </section>

      <section
        id="section3"
        className="h-180 bg-[url(/images/section3-bg.webp)] bg-no-repeat bg-cover -rotate-180 "
        ref={section3}
      >
        <div className="section_container -rotate-180 ">
          <div className="video w-200 border-4 border-[#2E2E2E] rounded-3xl overflow-hidden">
            <video ref={videoRef} loop playsInline controls>
              <source src="/videos/Quantum Pass_Final.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <p className="mt-4" style={{ fontSize: "20px", color: "white" }}>
              {" "}
              <strong style={{ color: "#0A77B4" }}>Quantum Pass</strong> is
              where simplicity meets{" "}
              <strong style={{ color: "#0A77B4" }}>security.</strong>
            </p>
            <div>
              <p
                style={{ textAlign: "center", color: "white" }}
                className="mt-4 w-150"
              >
                Say goodbye to credential overload and welcome Quantum Pass — a
                sleek solution built for modern organizations. One click is all
                it takes for authorized users to access all portals, while
                role-based permissions keep sensitive data protected. Ideal for
                hospitals, schools, colleges and enterprises seeking faster
                workflows and tighter security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section4"
        ref={section4}
        className="h-180 py-20 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-12">
            Transparent, flexible, and fair. Our pricing grows with you,
            offering simple plans for those just starting and those scaling up.
          </p>

          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className=""
          />
        </div>
      </section>

      <section id="section5" className="h-230 bg-black" ref={section5}>
        <div className="section3">
          <Row
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginBottom: "2%",
            }}
          >
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <div className="form_section_left">
                <p style={{ fontSize: "50px" }}>Better Security Start here</p>
                <p style={{ fontSize: "18px" }}>
                  Instant logins.Stronger.passwords,no memory games
                </p>
                <p style={{ fontSize: "14px" }}>
                  Say goodbye to credential overload and welcome Quantum Pass —
                  a sleek solution built for modern organizations. One click is
                  all it takes for authorized users to access all portals, while
                  role-based permissions keep sensitive data protected. Ideal
                  for hospitals, schools, colleges and enterprises seeking
                  faster workflows and tighter security.
                </p>
              </div>
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <div>
                <Card
                  style={{
                    width: 375,
                    height: 394,
                    borderRadius: "55px",
                    backgroundImage:
                      "linear-gradient(to bottom, #FFFFFF 0%, #A0F9FF )",
                  }}
                >
                  <div class="form_container">
                    <Form
                      name="basic"
                      labelCol={{ span: 16 }}
                      wrapperCol={{ span: 18 }}
                      style={{ maxWidth: 600 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      layout="vertical"
                    >
                      <Form.Item
                        label="Business Name"
                        name="businessname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Business Name"
                        name="businessname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item label="Message">
                        <TextArea
                          rows={4}
                          autoSize={{ minRows: 3, maxRows: 5 }}
                          style={{ backgroundColor: "#F2F2F2" }}
                        />
                      </Form.Item>

                      <Form.Item label={null}>
                        <Button
                          style={{
                            borderRadius: "30px",
                            textAlign: "center",
                            padding: "8px",
                          }}
                          type="primary"
                          htmlType="submit"
                          className="bg-blue-500 hover:bg-green-400 p-2"
                        >
                          Book a Demo{" "}
                          <ArrowRightOutlined
                            style={{
                              transform: "rotate(-45deg)",
                              display: "inline-block",
                            }}
                          />
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "transparent", color: "white" }}>
            <Col
              span={8}
              style={{
                borderTop: "1px solid white",
                borderRight: "1px solid white",
                borderBottom: "1px solid white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "4%",
                }}
              >
                <span style={{ fontSize: "80px" }}>4X</span>
                <p style={{ width: "50%", fontSize: "18px" }}>
                  Smarter operations. Seamless access that multiplies
                  productivity effortlessly.
                </p>
              </div>
            </Col>
            <Col
              span={8}
              style={{
                borderTop: "1px solid white",
                borderRight: "1px solid white",
                borderBottom: "1px solid white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "4%",
                }}
              >
                <span style={{ fontSize: "80px" }}>50%</span>
                <p style={{ width: "50%", fontSize: "18px" }}>
                  Less hassle, more control — automate every entry, every time.
                </p>
              </div>
            </Col>
            <Col
              span={8}
              style={{
                borderTop: "1px solid white",
                borderRight: "1px solid white",
                borderBottom: "1px solid white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "4%",
                }}
              >
                <span style={{ fontSize: "80px" }}>18%</span>
                <p style={{ width: "50%", fontSize: "18px" }}>
                  Faster check-ins powered by Quantum intelligence — because
                  time shouldn’t wait.
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-black bg-white">
            <Row>
              <Col span={8}>
                <div>
                  <div
                    className="rounded-3xl w-75 mt-10"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/finalized logo 1.webp"
                      alt="logo"
                      className="w-80 p-2"
                    />
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div className="flex justify-around">
                  <div className="flex flex-col">
                    <div className="mt-10">Ready to create with purpose?</div>
                    <div className="w-110 mt-5">
                      If you’re looking for a design partner who listens,
                      understands, and crafts with intention, let’s start the
                      conversation
                    </div>
                    <div className="mt-5">
                      {/* <Button className="demo_btn" style={{backgroundColor:"#2A98F8",color:"white",borderRadius:"30px"}} > <PhoneOutlined  style={{ 
        transform: 'rotate(90deg)', 
        display: 'inline-block' 
      }} />Let's Talk </Button> */}
                      <Button
                        className="demo_btn"
                        style={{
                          backgroundColor: "#111111ff",
                          color: "white",
                          borderRadius: "30px",
                        }}
                      >
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=247healthmedpro@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Email
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div>
                      <p className="mt-10 ">
                        <a href="" target="_blank">
                          <InstagramOutlined /> Instagram
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="mt-10">
                        <a
                          href="https://in.linkedin.com/company/247healthmedpro"
                          target="_blank"
                          className="text-white"
                        >
                          <LinkedinOutlined /> Linked in
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <div
              className="text-black bg-white mt-10 mb-5
      text-center"
            >
              <p>© 2025 All right reserved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContentArea;
