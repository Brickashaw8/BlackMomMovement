import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from '@sanity/vision';
import project from './sanity/schemas/project-schema';
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "zw1hod31",
    dataset: "production",
    title: "BlackMomsMovement",
    apiVersion: "2022-03-07",
    basePath: "/admin",
    plugins: [structureTool(),visionTool()],
    schema: {
        types: schemas
    }
});

export default config;