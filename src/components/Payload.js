import { List } from "antd";
import { FaCopy, FaCheck } from "react-icons/fa";
import React, { useState } from "react";

var data = ["test"];

export default function Payload({ input }) {
    const [copiedIndex, setCopiedIndex] = useState(null); // 记录已复制项的索引

    const handleCopy = (item, index) => {
        navigator.clipboard.writeText(item).then(() => {
            setCopiedIndex(index); // 设置已复制项的索引
            // 设置定时器在3秒后重置复制状态
            setTimeout(() => {
                setCopiedIndex(null);
            }, 2000);
        });
    };

    return (
        <List
            bordered
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item>
                    <p className="Paragraph-lg md:text-xl">{item}</p>
                    {copiedIndex !== index ? ( // 根据索引显示或隐藏复制按钮
                        <FaCopy
                            onClick={() => handleCopy(item, index)}
                            className="cursor-pointer"
                        />
                    ) : null}
                    {copiedIndex === index && ( // 复制成功后显示成功消息
                        // <Alert
                        //     message="Copied"
                        //     type="success"
                        //     showIcon
                        //     className="h-3/4"
                        //     style={{ marginLeft: "10px" }}
                        // />
                        <FaCheck
                            message="Copied"
                            type="success"
                            showIcon
                            className="h-3/4"
                            style={{ marginLeft: "10px" }}
                        />
                    )}
                </List.Item>
            )}
        />
    );
}
