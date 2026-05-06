interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const variantClasses = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-200 text-purple-600",
}

const defaultStyles = "px-4 py-2 rounded-md font-light";

export function Button(props: ButtonProps){
    return <button className={variantClasses[props.variant || "primary"] + " " + defaultStyles}>
        {props.startIcon}
        {props.text}
    </button>
}
