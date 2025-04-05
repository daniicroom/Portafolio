"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col border border-muted p-3">
      <CardHeader>
        <CardTitle className="text-base">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </CardTitle>
        {link && (
          <div className="font-mono text-xs underline print:block">
            {link.replace(/^https?:\/\//, "").replace(/www\./, "").replace(/\/$/, "")}
          </div>
        )}
        <CardDescription className="font-mono text-xs mt-1">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} className="px-1 py-0 text-[10px]" variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
