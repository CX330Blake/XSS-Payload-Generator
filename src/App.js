import "./App.css";
import GenerateButton from "./components/GenerateButton";
import { ConfigProvider, theme } from "antd";
import Switcher from "./components/Switcher";
import MyDivider from "./components/MyDivider";
import TextArea from "./components/TextArea";
import Payload from "./components/Payload";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: "#b968c7" },
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className="flex justify-center items-center min-h-screen">
                {" "}
                {/* 外層容器 */}
                <div className="text-center space-y-5">
                    {" "}
                    {/* 內層容器 */}
                    <h1 className="font-mono text-6xl mb-6">
                        XSS Payload Generator
                    </h1>
                    <MyDivider orientation="left" text="Original" />
                    <TextArea />
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        {" "}
                        {/* 調整 Switcher 的佈局 */}
                        <h1 className="font-mono text-l">TEST</h1>
                        <Switcher />
                        <h1 className="font-mono text-l">TEST</h1>
                        <Switcher />
                        <h1 className="font-mono text-l">TEST</h1>
                        <Switcher />
                    </div>
                    <GenerateButton />
                    <MyDivider orientation="right" text="Obfuscated" />
                    <Payload />
                    <Payload />
                    <Payload />
                </div>
            </div>
        </ConfigProvider>
    );
}

export default App;
