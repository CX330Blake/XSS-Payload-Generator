import { Divider } from "antd";

export default function MyDivider({ orientation, text }) {
    return (
        <Divider orientation={orientation} style={{ borderColor: "#b968c7" }}>
            <p className="text-base sm:text-lg">{text}</p>
        </Divider>
    );
}
