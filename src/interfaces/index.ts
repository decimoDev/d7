import React, { ReactNode } from "react";

export interface LayoutProps {
    children : ReactNode
}

export interface NavProps {
    title : String
    link : String
    span : String
}

export interface ShowcaseProps {
    title : String
}

export interface ContainerProps {
    children : ReactNode
}