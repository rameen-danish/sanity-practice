import { defineConfig } from 'sanity';
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

export const SanityConfig = defineConfig({
    name: "default",
    title: "studio",
    projectId: "8srpnyus",
    dataset: "production",
    plugins: [structureTool(), visionTool()],
    basePath: "/studio",
    schema: {
        types: schemaTypes
    }
})