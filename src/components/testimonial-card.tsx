import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface TestimonialCardProps {
  feedback: string;
}

export function TestimonialCard({ feedback }: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;