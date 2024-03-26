// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/****************************************************************************************
 *                            NOTICE: AUTO-GENERATED                                    *
 ****************************************************************************************
 * This file is automatically generated by script "./src/question/generator.ts".        *
 * Please don't manually change its contents, as any modifications will be overwritten! *
 ***************************************************************************************/

import { Inputs } from "@microsoft/teamsfx-api";

export interface CreateProjectInputs extends Inputs {
  /** @description Teams Toolkit: select runtime for your app */
  runtime?: "node" | "dotnet";
  /** @description New Project */
  "project-type"?:
    | "bot-type"
    | "tab-type"
    | "me-type"
    | "office-xml-addin-type"
    | "office-addin-type"
    | "outlook-addin-type";
  /** @description Select to create an Outlook, Word, Excel, or PowerPoint Add-in */
  "addin-host"?: "outlook" | "word" | "excel" | "powerpoint";
  /** @description Capabilities */
  capabilities?:
    | "bot"
    | "notification"
    | "command-bot"
    | "workflow-bot"
    | "tab-non-sso"
    | "sso-launch-page"
    | "dashboard-tab"
    | "tab-spfx"
    | "search-app"
    | "collect-form-message-extension"
    | "search-message-extension"
    | "link-unfurling"
    | "copilot-plugin-new-api"
    | "copilot-plugin-existing-api"
    | "custom-copilot-basic"
    | "custom-copilot-agent"
    | "message-extension"
    | "BotAndMessageExtension"
    | "TabNonSsoAndBot"
    | "json-taskpane"
    | "office-content-addin"
    | "word-taskpane"
    | "word-sso"
    | "word-react"
    | "word-manifest"
    | "excel-taskpane"
    | "excel-sso"
    | "excel-react"
    | "excel-cfshared"
    | "excel-cfjs"
    | "excel-manifest"
    | "powerpoint-taskpane"
    | "powerpoint-sso"
    | "powerpoint-react"
    | "powerpoint-manifest";
  /** @description Select triggers */
  "bot-host-type-trigger"?:
    | "http-restify"
    | "http-webapi"
    | "http-and-timer-functions"
    | "http-functions"
    | "timer-functions";
  /** @description SharePoint Solution */
  "spfx-solution"?: "new" | "import";
  /** @description SharePoint Framework */
  "spfx-install-latest-package"?: boolean;
  /** @description Framework */
  "spfx-framework-type"?: "react" | "minimal" | "none";
  /** @description Name for SharePoint Framework Web Part */
  "spfx-webpart-name"?: string;
  /** @description SPFx solution folder */
  "spfx-folder"?: string;
  /** @description Architecture of Search Based Message Extension */
  "me-architecture"?: "new-api" | "api-spec" | "bot-plugin" | "bot";
  /** @description OpenAPI Description Document */
  "openapi-spec-location"?: string;
  /** @description Select Operation(s) Teams Can Interact with */
  "api-operation"?: string[];
  /** @description Authentication Type */
  "api-me-auth"?: "none" | "api-key";
  /** @description AI Agent */
  "custom-copilot-agent"?: "custom-copilot-agent-new" | "custom-copilot-agent-assistants-api";
  /** @description Programming Language */
  "programming-language"?: "javascript" | "typescript" | "csharp" | "python";
  /** @description Service for Large Language Model (LLM) */
  "llm-service"?: "llm-service-azure-openai" | "llm-service-openai";
  /** @description Azure OpenAI Key */
  "azure-openai-key"?: string;
  /** @description Azure OpenAI Endpoint */
  "azure-openai-endpoint"?: string;
  /** @description OpenAI Key */
  "openai-key"?: string;
  /** @description Framework */
  "office-addin-framework-type"?: "default" | "react";
  /** @description Application Name */
  "app-name"?: string;
}
