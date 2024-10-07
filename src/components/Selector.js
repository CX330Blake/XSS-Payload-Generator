import { Select } from "antd";

const handleChange = (value) => {
    console.log(`Selected obfuscation method: ${value}`);
};

export default function Selector() {
    return (
        <Select
            defaultValue="Base 64"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
                { value: "base64", label: "Base 64" },
                { value: "url", label: "URL Encoding" },
                { value: "unicode", label: "Unicode" },
            ]}
        />
    );
}
