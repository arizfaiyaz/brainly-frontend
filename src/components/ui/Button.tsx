
type variant = "primary" | "secondary";
interface ButtonProps {
    variant: variant
    size?: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}

const varaintStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}

const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}
const defaultStyles = "rounded-md p-4"

export const Button = (props : ButtonProps) => {


    return <button className={`${varaintStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size || 'md']}`}>{props.text}</button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"asd"}/>