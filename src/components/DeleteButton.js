import { Button } from "antd";

export default function Generate({ onClick }) {
    return (
        <Button
            variant="solid"
            color="danger"
            size="medium"
            className=""
            onClick={onClick}
        >
            <p className="font-mono text-xl">Delete</p>
        </Button>
    );
}
