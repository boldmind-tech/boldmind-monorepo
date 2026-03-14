"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectContextValue {
    value: string;
    onValueChange: (value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelectContext() {
    const ctx = React.useContext(SelectContext);
    if (!ctx) throw new Error("Select components must be used within a Select");
    return ctx;
}

interface SelectProps {
    children: React.ReactNode;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}

function Select({ children, defaultValue = "", value, onValueChange }: SelectProps) {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);

    const currentValue = value !== undefined ? value : internalValue;
    const handleChange = (v: string) => {
        if (value === undefined) setInternalValue(v);
        onValueChange?.(v);
    };

    return (
        <SelectContext.Provider value={{ value: currentValue, onValueChange: handleChange, open, setOpen }}>
            <div className="relative">{children}</div>
        </SelectContext.Provider>
    );
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => {
        const { open, setOpen } = useSelectContext();
        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                onClick={() => setOpen(!open)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
        );
    }
);
SelectTrigger.displayName = "SelectTrigger";

function SelectValue({ placeholder }: { placeholder?: string }) {
    const { value } = useSelectContext();
    return <span className={cn(!value && "text-muted-foreground")}>{value || placeholder}</span>;
}

function SelectContent({ children, className }: { children: React.ReactNode; className?: string }) {
    const { open } = useSelectContext();
    if (!open) return null;
    return (
        <div
            className={cn(
                "absolute top-full left-0 z-50 mt-1 min-w-[8rem] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
                className
            )}
        >
            <div className="p-1">{children}</div>
        </div>
    );
}

function SelectItem({ children, value, className }: { children: React.ReactNode; value: string; className?: string }) {
    const { value: currentValue, onValueChange, setOpen } = useSelectContext();
    return (
        <div
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                currentValue === value && "bg-accent text-accent-foreground",
                className
            )}
            onClick={() => {
                onValueChange(value);
                setOpen(false);
            }}
        >
            {children}
        </div>
    );
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
