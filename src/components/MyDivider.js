import { Divider } from "antd";

export default function MyDivider({ orientation, text }) {
    return (
        <Divider orientation={orientation} style={{ borderColor: "#BD93F9" }}>
            <p className="text-base sm:text-lg text-secondary">{text}</p>
        </Divider>
    );
}
