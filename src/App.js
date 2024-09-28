import "./App.css";
import GenerateButton from "./components/GenerateButton";
import { ConfigProvider, theme } from "antd";
import Switcher from "./components/Switcher";
import MyDivider from "./components/MyDivider";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: "#b968c7" },
                algorithm: theme.darkAlgorithm,
            }}
        >
            <h1>XSS Payload Generator</h1>
            <h1>TEST</h1>
            <Switcher />
            <MyDivider />
            <GenerateButton />
        </ConfigProvider>
    );
}

export default App;
