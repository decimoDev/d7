import React, { ReactNode } from "react";

export interface LayoutProps {
    children : ReactNode
}

export interface NavProps {
    title : String
    link : String
}

export interface ShowcaseProps {
    title : String
}

export interface ContainerProps {
    children : ReactNode
}