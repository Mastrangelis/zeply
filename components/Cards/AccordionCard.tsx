"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card";
import { AccordionCardProps } from "@/types/card";

const AccordionCard = ({ header, isLoading, children }: AccordionCardProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive((prev: boolean) => !prev);
  };

  return (
    <Card>
      <Card.Header
        header={header}
        hasBorderBottom={isActive}
        onClick={toggleActive}
        isLoading={isLoading}
      >
        <div className="accordion-card__collapse">
          <Image
            src={!isActive ? "/arrow-down.svg" : "/arrow-up.svg"}
            alt={!isActive ? "Expand" : "Collapse"}
            height={18}
            width={18}
            quality={100}
          />
        </div>
      </Card.Header>
      <Card.Content>{isActive && <div>{children}</div>}</Card.Content>
    </Card>
  );
};
export default AccordionCard;
