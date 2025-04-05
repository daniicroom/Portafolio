"use client";

import * as React from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "./ui/button";
import { PrinterIcon, CommandIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <>
      <p className={cn("fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block")}>
        Press <kbd className={cn("inline-flex items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground")}>⌘J</kbd> to open the command menu
      </p>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        variant="outline"
        size="icon"
        className={cn("fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden")}
      >
        <CommandIcon className={cn("h-6 w-6")} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => { setOpen(false); window.print(); }}>
              <span>Print</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem key={url} onSelect={() => { setOpen(false); window.open(url, "_blank"); }}>
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export const PrintDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={cn("fixed bottom-4 right-20 size-16 rounded-full shadow-2xl print:hidden")}> 
          <PrinterIcon className={cn("h-6 w-6")} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className={cn("mx-auto w-full max-w-sm")}> 
          <DrawerHeader>
            <DrawerTitle>Print Options</DrawerTitle>
            <DrawerDescription>Choose how to print your document.</DrawerDescription>
          </DrawerHeader>
          <div className={cn("p-4 pb-0")}></div>
          <DrawerFooter>
            <Button onClick={() => window.print()}>Print</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
