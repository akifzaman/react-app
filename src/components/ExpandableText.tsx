import React, { useState } from "react";
import Button from "./Button";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 10 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <p>
      {text}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </p>
  );
};

export default ExpandableText;
