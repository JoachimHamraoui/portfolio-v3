"use client";

import { fadeUpVariant } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExtraInfo } from "./extraInfo";
import { TechStack } from "../techstack/TechStack";
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-[1240px] flex flex-col mt-12 space-y-6">
      <motion.h2
        className="text-4xl font-bold"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        More about me
      </motion.h2>

      <motion.div
        className="w-full "
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Tabs defaultValue="tab-1">
          <ScrollArea>
            <TabsList className="mb-3 gap-1 bg-transparent">
              <TabsTrigger
                value="tab-1"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg data-[state=active]:shadow-none"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg data-[state=active]:shadow-none"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg data-[state=active]:shadow-none"
              >
                Experience
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="tab-1">
              <ExtraInfo />
          </TabsContent>
          <TabsContent value="tab-2">
            <TechStack />
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="text-muted-foreground p-4 pt-1 text-center text-xs">
              Content for Tab 3
            </p>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};
