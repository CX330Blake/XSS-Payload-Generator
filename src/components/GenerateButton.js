import { Button } from "antd";

export default function GenerateButton({ onClick }) {
    return (
        <Button type="primary" size="medium" className="" onClick={onClick}>
            <p className="font-mono text-xl">Generate</p>
        </Button>
    );
}
