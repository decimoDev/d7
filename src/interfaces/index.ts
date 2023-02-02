import { ReactNode } from "react"

export interface AboutProps {
    title : string
    context : string
}

export interface AwardProps {
    title : string
    rank : string
}

export interface ShowcaseProps {
    title : string
    info : string
    label : string
    tech: string
}

export interface NavProps {
    children : ReactNode
    href : string
}

export interface GlobalProps {
    children : ReactNode
}