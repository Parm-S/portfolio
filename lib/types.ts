import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type FormData = {
    sendEmail: string;
    message: string;
}