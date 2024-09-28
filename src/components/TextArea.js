import { Input } from "antd";
import "highlight.js/styles/dracula.css";

const { TextArea } = Input;

const app = () => {
    return (
        <TextArea
            rows={4}
            placeholder="Input your xss payload here."
            showCount="true"
            autoSize={{ minRows: 4, maxRows: 10 }}
        />
    );
};

export default app;
