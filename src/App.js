import "./App.css";
import { ConfigProvider, theme } from "antd";
import Switcher from "./components/Switcher";
import MyDivider from "./components/MyDivider";
import TextArea from "./components/TextArea";
import Payload from "./components/Payload";
import GenerateButton from "./components/GenerateButton";
import DeleteButton from "./components/DeleteButton";

const handleGenerate = () => {};

function App() {
    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: "#b968c7" },
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className="flex justify-center items-center min-h-screen p-4 sm:p-6">
                {/* 外層容器 */}
                <div className="text-center space-y-5 max-w-full w-10/12 sm:w-10/12 md:w-8/12 lg:w-6/12">
                    {/* 內層容器 */}
                    <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                        XSS Payload Generator
                    </h1>
                    <MyDivider orientation="left" text="Original" />
                    <TextArea />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                        {/* 調整 Switcher 的佈局 */}
                        <div className="flex items-center space-x-2">
                            <h1 className="font-mono text-sm sm:text-base">
                                TEST
                            </h1>
                            <Switcher />
                        </div>
                        <div className="flex items-center space-x-2">
                            <h1 className="font-mono text-sm sm:text-base">
                                TEST
                            </h1>
                            <Switcher />
                        </div>
                        <div className="flex items-center space-x-2">
                            <h1 className="font-mono text-sm sm:text-base">
                                TEST
                            </h1>
                            <Switcher />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                        <GenerateButton onClick={handleGenerate} />
                        <DeleteButton />
                    </div>

                    <MyDivider orientation="right" text="Obfuscated" />
                    <Payload input="test" />
                </div>
            </div>
        </ConfigProvider>
    );
}

export default App;
